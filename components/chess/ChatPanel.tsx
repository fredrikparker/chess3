'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useGameStore } from '@/store/useGameStore';
import { Send } from 'lucide-react';
import { useState } from 'react';

export default function ChatPanel() {
    const { chat, sendMessage, walletConnected } = useGameStore();
    const [input, setInput] = useState('');

    const handleSend = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim() || !walletConnected) return;
        sendMessage(input);
        setInput('');
    };

    return (
        <div className="flex flex-col h-full">
            <ScrollArea className="flex-1 pr-4 mb-4">
                <div className="space-y-3">
                    {chat.length === 0 && (
                        <div className="text-center text-xs text-muted-foreground py-8">
                            No messages yet. Say GLHF!
                        </div>
                    )}
                    {chat.map((msg) => (
                        <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                            <span className="text-[10px] text-muted-foreground mb-1">
                                {msg.sender === 'user' ? 'You' : 'Opponent'}
                            </span>
                            <div className={`px-3 py-2 rounded-lg text-sm max-w-[85%] ${msg.sender === 'user'
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted text-muted-foreground'
                                }`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>

            <form onSubmit={handleSend} className="flex gap-2">
                <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={walletConnected ? "Type a message..." : "Connect wallet to chat"}
                    disabled={!walletConnected}
                    className="bg-muted/50 border-input focus-visible:ring-primary"
                />
                <Button size="icon" type="submit" disabled={!input.trim() || !walletConnected}>
                    <Send className="w-4 h-4" />
                </Button>
            </form>
        </div>
    );
}
