'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useGameStore } from '@/store/useGameStore';
import { Trophy, Frown, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function SettlementModal() {
    const { status, winner, wager, turn, resetGame } = useGameStore();
    const [claiming, setClaiming] = useState(false);

    // Determine if the current user (always 'w' for MVP) won or lost
    const userWon = status === 'checkmate' && winner === 'w';
    const opponentWon = status === 'checkmate' && winner === 'b';
    const isDraw = status === 'draw';
    const isResigned = status === 'resigned'; // Assuming resignation logic sets status='resigned'

    const isOpen = status === 'checkmate' || status === 'draw' || status === 'resigned';
    const totalPrize = (wager * 2 * 0.975).toFixed(2); // 2.5% fee

    const handleClaim = () => {
        setClaiming(true);
        // Simulate tx delay
        setTimeout(() => {
            setClaiming(false);
            resetGame();
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <Dialog open={isOpen} onOpenChange={() => { }}>
            <DialogContent className="sm:max-w-md text-center">
                <DialogHeader className="flex flex-col items-center gap-4">
                    {userWon ? (
                        <div className="w-16 h-16 rounded-full bg-yellow-400/20 flex items-center justify-center animate-bounce">
                            <Trophy className="w-8 h-8 text-yellow-500" />
                        </div>
                    ) : (
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <Frown className="w-8 h-8 text-muted-foreground" />
                        </div>
                    )}

                    <DialogTitle className="text-2xl font-bold font-heading">
                        {userWon ? 'Victory!' : isDraw ? 'Draw' : 'Defeat'}
                    </DialogTitle>

                    <DialogDescription>
                        {userWon
                            ? `You won the match against your opponent.`
                            : isDraw
                                ? "The game ended in a draw. Wagers returned."
                                : "Better luck next time."
                        }
                    </DialogDescription>
                </DialogHeader>

                {userWon && wager > 0 && (
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 my-4">
                        <div className="text-xs uppercase tracking-widest text-primary mb-1">Prize Pool</div>
                        <div className="text-3xl font-mono font-bold text-primary">{totalPrize} USDC</div>
                        <div className="text-[10px] text-muted-foreground mt-2">Funds are ready to claim on Yellow</div>
                    </div>
                )}

                <DialogFooter className="flex-col gap-2 sm:flex-col">
                    {userWon && wager > 0 ? (
                        <Button className="w-full h-12 text-lg" onClick={handleClaim} disabled={claiming}>
                            {claiming ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Claiming...</> : 'Claim Winnings'}
                        </Button>
                    ) : (
                        <Button className="w-full" onClick={resetGame}>Return to Lobby</Button>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
