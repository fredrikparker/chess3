import { create } from 'zustand';
import { Chess } from 'chess.js';

interface Message {
    id: string;
    sender: 'user' | 'opponent' | 'system';
    text: string;
    timestamp: number;
}

interface GameState {
    game: Chess;
    fen: string;
    turn: 'w' | 'b';
    history: string[];
    lastMove: { from: string; to: string } | null;
    status: 'idle' | 'active' | 'checkmate' | 'draw' | 'resigned';
    winner: 'w' | 'b' | null;

    // Wallet & Wager State
    walletConnected: boolean;
    balance: number;
    wager: number;
    wagerStatus: 'idle' | 'pending' | 'matched';

    // Chat State
    chat: Message[];

    // Actions
    connectWallet: () => void;
    placeWager: (amount: number) => void;
    sendMessage: (text: string) => void;
    makeMove: (move: { from: string; to: string; promotion?: string }) => boolean;
    resetGame: () => void;
    resignGame: () => void;
    loadFen: (fen: string) => void;
}

export const useGameStore = create<GameState>((set, get) => ({
    game: new Chess(),
    fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    turn: 'w',
    history: [],
    lastMove: null,
    status: 'idle',
    winner: null,

    walletConnected: false,
    balance: 1000, // Mock initial balance
    wager: 0,
    wagerStatus: 'idle',
    chat: [],

    connectWallet: () => set({ walletConnected: true }),

    placeWager: (amount) => {
        const { balance, walletConnected } = get();
        if (!walletConnected || amount > balance) return;
        set({
            wager: amount,
            wagerStatus: 'matched', // Auto-match for MVP
            balance: balance - amount
        });
    },

    sendMessage: (text) => {
        const newMessage: Message = {
            id: Math.random().toString(36).substring(7),
            sender: 'user',
            text,
            timestamp: Date.now()
        };
        set((state) => ({ chat: [...state.chat, newMessage] }));
    },

    makeMove: (move) => {
        const { game } = get();

        try {
            // Optimistic validation
            const result = game.move(move);

            if (result) {
                set({
                    fen: game.fen(),
                    turn: game.turn(),
                    history: game.history(),
                    lastMove: { from: result.from, to: result.to },
                    status: game.isGameOver() ? (game.isCheckmate() ? 'checkmate' : 'draw') : 'active',
                    winner: game.isCheckmate() ? (game.turn() === 'w' ? 'b' : 'w') : null
                });
                return true;
            }
            return false;
        } catch (e) {
            return false;
        }
    },

    resignGame: () => {
        set({ status: 'resigned', winner: 'b' }); // Assume User (White) resigns
    },

    resetGame: () => {
        const newGame = new Chess();
        set({
            game: newGame,
            fen: newGame.fen(),
            turn: 'w',
            history: [],
            lastMove: null,
            status: 'idle',
            winner: null,
            wager: 0,
            wagerStatus: 'idle'
        });
    },

    loadFen: (fen) => {
        const newGame = new Chess(fen);
        set({
            game: newGame,
            fen: newGame.fen(),
            turn: newGame.turn(),
            history: newGame.history(),
            lastMove: null,
            status: newGame.isGameOver() ? (newGame.isCheckmate() ? 'checkmate' : 'draw') : 'active',
            winner: newGame.isCheckmate() ? (newGame.turn() === 'w' ? 'b' : 'w') : null
        });
    }
}));
