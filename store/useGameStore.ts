import { create } from 'zustand';
import { Chess } from 'chess.js';

interface GameState {
    game: Chess;
    fen: string;
    turn: 'w' | 'b';
    history: string[];
    lastMove: { from: string; to: string } | null;
    status: 'idle' | 'active' | 'checkmate' | 'draw';

    // Actions
    makeMove: (move: { from: string; to: string; promotion?: string }) => boolean;
    resetGame: () => void;
    loadFen: (fen: string) => void;
}

export const useGameStore = create<GameState>((set, get) => ({
    game: new Chess(),
    fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    turn: 'w',
    history: [],
    lastMove: null,
    status: 'idle',

    makeMove: (move) => {
        const { game } = get();

        try {
            // Optimistic validation
            const result = game.move(move); // This mutates the game instance

            if (result) {
                set({
                    fen: game.fen(),
                    turn: game.turn(),
                    history: game.history(),
                    lastMove: { from: result.from, to: result.to },
                    status: game.isGameOver() ? (game.isCheckmate() ? 'checkmate' : 'draw') : 'active'
                });
                return true;
            }
            return false;
        } catch (e) {
            return false;
        }
    },

    resetGame: () => {
        const newGame = new Chess();
        set({
            game: newGame,
            fen: newGame.fen(),
            turn: 'w',
            history: [],
            lastMove: null,
            status: 'idle'
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
            status: newGame.isGameOver() ? (newGame.isCheckmate() ? 'checkmate' : 'draw') : 'active'
        });
    }
}));
