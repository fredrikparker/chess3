'use client';

import { useGameStore } from '@/store/useGameStore';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Chessboard = dynamic(() => import('react-chessboard').then((mod) => mod.Chessboard), {
    ssr: false,
    loading: () => <div style={{ width: '100%', height: '100%', background: '#111' }} />
});

interface BoardProps {
    boardWidth?: number;
}

export default function Board({ boardWidth = 480 }: BoardProps) {
    const { fen, makeMove } = useGameStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    function onDrop(sourceSquare: string, targetSquare: string) {
        try {
            return makeMove({
                from: sourceSquare,
                to: targetSquare,
                promotion: 'q',
            });
        } catch {
            return false;
        }
    }

    if (!mounted) return <div style={{ width: boardWidth, aspectRatio: '1', background: '#111' }} />;

    return (
        <div style={{ width: '100%', height: '100%' }}>
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
                        borderRadius: '4px',
                    },
                    darkSquareStyle: { backgroundColor: '#b58863' },
                    lightSquareStyle: { backgroundColor: '#f0d9b5' },
                    animationDurationMs: 200,
                }}
            />
        </div>
    );
}
