'use client';

import Board from '@/components/chess/Board';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useGameStore } from '@/store/useGameStore';
import { useEffect, useState } from 'react';
import { Trophy, Clock, Flag, User } from 'lucide-react';

export default function MatchPage({ params }: { params: { id: string } }) {
    const { turn, status, resetGame } = useGameStore();

    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col items-center">
            {/* Header / Nav */}
            <header className="w-full h-16 border-b border-border flex items-center justify-between px-6 bg-card/50 backdrop-blur-md fixed top-0 z-50">
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-accent text-primary">chess3</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest px-2 py-0.5 border border-border rounded">Beta</span>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="outline" className="text-xs h-8">Connect Wallet</Button>
                </div>
            </header>

            {/* Main Content - Centered Stage */}
            <div className="w-full max-w-[1400px] px-6 lg:px-12 pt-24 pb-12 flex-1 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-start justify-items-center">

                {/* Left Panel - Hidden on mobile */}
                <div className="hidden lg:flex flex-col w-full max-w-xs space-y-4 opacity-75 hover:opacity-100 transition-opacity">
                    <Card className="p-4 bg-card/30 border-border">
                        <div className="text-xs font-heading text-muted-foreground uppercase mb-4">Match Info</div>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">ID</span>
                                <span className="font-mono">{params.id.slice(0, 8)}...</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Stake</span>
                                <span className="text-primary font-bold">50 USDC</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Time Control</span>
                                <span>10 min</span>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Center Stage - The Board */}
                <div className="flex flex-col gap-4 w-full max-w-[600px]">
                    {/* Opponent Bar */}
                    <div className="flex items-center justify-between px-2">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-muted flex items-center justify-center">
                                <User className="w-5 h-5 opacity-50" />
                            </div>
                            <div>
                                <div className="font-heading text-sm font-bold">Opponent</div>
                                <div className="text-xs text-muted-foreground">1200 ELO</div>
                            </div>
                        </div>
                        <div className="bg-card border border-border px-4 py-2 rounded text-xl font-mono tabular-nums">
                            09:45
                        </div>
                    </div>

                    {/* Board Wrapper */}
                    <div className="w-full aspect-square">
                        <Board boardWidth={600} />
                    </div>

                    {/* Player Bar */}
                    <div className="flex items-center justify-between px-2">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center border border-primary/20">
                                <User className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <div className="font-heading text-sm font-bold text-foreground">You</div>
                                <div className="text-xs text-muted-foreground">1254 ELO</div>
                            </div>
                        </div>
                        <div className="bg-card border border-border px-4 py-2 rounded text-xl font-mono tabular-nums text-foreground">
                            09:12
                        </div>
                    </div>

                    {/* Game Status */}
                    {status !== 'active' && (
                        <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-lg text-center">
                            <div className="text-lg font-heading font-bold text-primary mb-2">
                                {status === 'checkmate' ? (turn === 'w' ? 'Black Wins' : 'White Wins') : 'Draw'}
                            </div>
                            <Button onClick={resetGame}>New Game</Button>
                        </div>
                    )}
                </div>

                {/* Right Panel - Tools */}
                <div className="w-full max-w-[360px] h-[600px] flex flex-col">
                    <Card className="flex-1 bg-card border-border flex flex-col overflow-hidden">
                        <div className="flex border-b border-border">
                            <Button variant="ghost" className="flex-1 rounded-none border-b-2 border-primary text-primary h-12">Play</Button>
                            <Button variant="ghost" className="flex-1 rounded-none text-muted-foreground h-12 hover:text-foreground">Chat</Button>
                            <Button variant="ghost" className="flex-1 rounded-none text-muted-foreground h-12 hover:text-foreground">Moves</Button>
                        </div>

                        <div className="p-6 flex-1 flex flex-col gap-6">
                            <div className="text-center space-y-2">
                                <Trophy className="w-12 h-12 mx-auto text-primary mb-4" />
                                <h2 className="text-xl font-heading font-bold">Place Your Wager</h2>
                                <p className="text-sm text-muted-foreground">Winner takes all. Funds are escrowed on Yellow Network.</p>
                            </div>

                            <div className="space-y-4">
                                <Button className="w-full h-12 text-base font-bold" size="lg">Place 50 USDC</Button>
                                <Button variant="outline" className="w-full">Custom Amount</Button>
                            </div>

                            <div className="mt-auto pt-6 border-t border-border">
                                <div className="flex justify-between text-xs text-muted-foreground mb-2">
                                    <span>Balance</span>
                                    <span>1,240.50 USDC</span>
                                </div>
                                <Button variant="ghost" size="sm" className="w-full text-xs hover:bg-destructive/10 hover:text-destructive">
                                    <Flag className="w-3 h-3 mr-2" /> Resign Game
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>

            </div>
        </main>
    );
}
