'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { useGameStore } from '@/store/useGameStore';
import { useEffect, useRef } from 'react';

export default function MoveLog() {
    const { history } = useGameStore();
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history]);

    // Group moves into pairs (White, Black)
    const movePairs = [];
    for (let i = 0; i < history.length; i += 2) {
        movePairs.push({
            number: Math.floor(i / 2) + 1,
            white: history[i],
            black: history[i + 1] || '',
        });
    }

    return (
        <ScrollArea className="h-full w-full pr-4">
            <div className="grid grid-cols-[3rem_1fr_1fr] gap-2 text-sm font-mono">
                <div className="text-muted-foreground border-b border-border pb-2">#</div>
                <div className="text-muted-foreground border-b border-border pb-2">White</div>
                <div className="text-muted-foreground border-b border-border pb-2">Black</div>

                {movePairs.map((pair, i) => (
                    <div key={i} className="contents group hover:bg-muted/50">
                        <div className="text-muted-foreground py-1">{pair.number}.</div>
                        <div className="py-1 px-2 rounded hover:bg-white/5">{pair.white}</div>
                        <div className="py-1 px-2 rounded hover:bg-white/5">{pair.black}</div>
                    </div>
                ))}
                <div ref={scrollRef} />
            </div>
        </ScrollArea>
    );
}
