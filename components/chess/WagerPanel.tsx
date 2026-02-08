'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useGameStore } from '@/store/useGameStore';
import { Wallet, Coins, Lock } from 'lucide-react';
import { useState } from 'react';

export default function WagerPanel() {
    const { walletConnected, balance, wager, wagerStatus, connectWallet, placeWager } = useGameStore();
    const [customAmount, setCustomAmount] = useState('');

    if (!walletConnected) {
        return (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center p-4">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-2">
                    <Wallet className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-heading font-bold">Connect to Wager</h3>
                <p className="text-sm text-muted-foreground mb-4">
                    Connect your mock wallet to place bets and settle mock USDC.
                </p>
                <Button onClick={connectWallet} className="w-full">
                    Connect Wallet
                </Button>
            </div>
        );
    }

    if (wagerStatus === 'matched') {
        return (
            <div className="flex flex-col h-full gap-6">
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
                    <div className="text-sm text-primary uppercase tracking-widest font-heading mb-2">Total Pot</div>
                    <div className="text-4xl font-mono font-bold text-primary">
                        {(wager * 2).toFixed(2)} <span className="text-lg">USDC</span>
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <Lock className="w-3 h-3" /> Funds Escrowed on Yellow
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Your Wager</span>
                        <span className="font-mono">{wager.toFixed(2)} USDC</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Opponent Wager</span>
                        <span className="font-mono">{wager.toFixed(2)} USDC</span>
                    </div>
                    <div className="flex justify-between text-sm border-t border-border pt-4">
                        <span className="text-muted-foreground">Est. Payout</span>
                        <span className="font-mono text-green-500">{(wager * 1.95).toFixed(2)} USDC</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground text-center mt-4">
                        * 2.5% Protocol Fee deducted from winnings.
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-6 h-full">
            <div className="text-center space-y-2">
                <Coins className="w-12 h-12 mx-auto text-primary mb-4" />
                <h2 className="text-xl font-heading font-bold">Place Your Wager</h2>
                <p className="text-sm text-muted-foreground">Winner takes all. Funds are escrowed on Yellow Network.</p>
            </div>

            <div className="space-y-4 flex-1">
                <Button
                    variant="outline"
                    className="w-full h-12 justify-between px-4 hover:border-primary hover:bg-primary/5"
                    onClick={() => placeWager(10)}
                >
                    <span className="font-bold">10 USDC</span>
                    <span className="text-xs text-muted-foreground">Starter</span>
                </Button>
                <Button
                    variant="outline"
                    className="w-full h-12 justify-between px-4 hover:border-primary hover:bg-primary/5"
                    onClick={() => placeWager(50)}
                >
                    <span className="font-bold">50 USDC</span>
                    <span className="text-xs text-muted-foreground">Standard</span>
                </Button>

                <div className="relative">
                    <input
                        type="number"
                        placeholder="Custom Amount"
                        className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pr-16 font-mono"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                    />
                    <Button
                        size="sm"
                        className="absolute right-1 top-1 bottom-1"
                        onClick={() => placeWager(Number(customAmount))}
                        disabled={!customAmount || Number(customAmount) <= 0}
                    >
                        Bet
                    </Button>
                </div>
            </div>

            <div className="mt-auto pt-4 border-t border-border">
                <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Wallet Balance</span>
                    <span className="font-mono text-foreground">{balance.toFixed(2)} USDC</span>
                </div>
            </div>
        </div>
    );
}
