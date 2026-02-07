'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { ArrowRight, Trophy, Zap, Shield } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  const handlePlay = () => {
    // Generate random match ID for MVP
    const matchId = Math.random().toString(36).substring(7);
    router.push(`/match/${matchId}`);
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-12 text-center">

        {/* Hero */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-accent bg-clip-text text-transparent bg-gradient-to-b from-primary to-accent drop-shadow-lg">
            chess3
          </h1>
          <p className="text-xl text-muted-foreground font-heading max-w-lg mx-auto leading-relaxed">
            The Instant Arena.
            <span className="block text-foreground mt-2">Wager USDC. Play Fast. Win Instantly.</span>
          </p>
        </div>

        {/* Action Card */}
        <Card className="p-8 bg-card border-border shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="relative z-10 space-y-6">
            <div className="flex justify-center gap-4 text-sm font-heading text-muted-foreground uppercase tracking-widest">
              <span><Zap className="inline w-4 h-4 mr-1 text-primary" /> Lag-Free</span>
              <span>•</span>
              <span><Shield className="inline w-4 h-4 mr-1 text-primary" /> Secure</span>
              <span>•</span>
              <span><Trophy className="inline w-4 h-4 mr-1 text-primary" /> Instant Payouts</span>
            </div>

            <Button
              size="lg"
              className="w-full h-16 text-xl font-bold bg-primary hover:bg-accent text-primary-foreground shadow-[0_0_20px_rgba(176,139,79,0.3)] hover:shadow-[0_0_30px_rgba(176,139,79,0.5)] transition-all transform hover:scale-[1.02]"
              onClick={handlePlay}
            >
              Enter Arena <ArrowRight className="ml-2 w-6 h-6" />
            </Button>

            <p className="text-xs text-muted-foreground">
              Powered by Yellow Network & Sui Base Layer
            </p>
          </div>
        </Card>

        {/* Footer */}
        <div className="flex justify-center gap-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Docs</a>
          <a href="#" className="hover:text-primary transition-colors">Leaderboard</a>
          <a href="#" className="hover:text-primary transition-colors">Discord</a>
        </div>
      </div>
    </main>
  );
}
