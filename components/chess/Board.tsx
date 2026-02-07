'use client';

import { Chessboard } from 'react-chessboard';
import { useGameStore } from '@/store/useGameStore';
import { useEffect, useState } from 'react';

interface BoardProps {
    boardWidth?: number;
}

export default function Board({ boardWidth = 480 }: BoardProps) {
    const { fen, turn, makeMove, lastMove } = useGameStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    function onDrop(sourceSquare: string, targetSquare: string) {
        try {
            const move = makeMove({
                from: sourceSquare,
                to: targetSquare,
                promotion: 'q', // always promote to queen for simplicity for now
            });
            return move;
        } catch (e) {
            return false;
        }
    }

    if (!mounted) return <div className="aspect-square bg-[#15181e] rounded-lg animate-pulse" style={{ width: boardWidth }} />;

    return (
        <div className="relative group rounded-lg overflow-hidden shadow-2xl border border-white/10" style={{ width: boardWidth }}>
            <Chessboard
                options={{
                    position: fen,
                    onPieceDrop: ({ sourceSquare, targetSquare }) => {
                        if (sourceSquare && targetSquare) {
                            return !!onDrop(sourceSquare, targetSquare);
                        }
                        return false;
                    },
                    boardStyle: {
                        borderRadius: "4px",
                        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
                    },
                    darkSquareStyle: { backgroundColor: '#B08B4F' },
                    lightSquareStyle: { backgroundColor: '#E4DED4' },
                    animationDurationInMs: 200,
                }}
            />
        </div>
    );
}
