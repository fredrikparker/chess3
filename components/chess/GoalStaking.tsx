'use client';

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Target, Lock } from 'lucide-react';
import { useState } from 'react';

export function GoalStaking() {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="w-full justify-start gap-2">
                    <Target className="w-4 h-4" />
                    <span>Set Daily Goal</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        Stake on Your Improvement
                    </DialogTitle>
                    <DialogDescription>
                        Commit USDC to playing 3 games today. If you fail, funds go to the community treasury.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="goal" className="text-right">
                            Goal
                        </Label>
                        <Input id="goal" value="Play 3 Rapid Games" disabled className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="stake" className="text-right">
                            Stake
                        </Label>
                        <div className="col-span-3 relative">
                            <Input id="stake" defaultValue="10" className="pl-3" type="number" />
                            <span className="absolute right-3 top-2 text-xs text-muted-foreground">USDC</span>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={() => setOpen(false)} className="w-full">
                        <Lock className="w-3 h-3 mr-2" /> Lock Stake
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
