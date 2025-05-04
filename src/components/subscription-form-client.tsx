'use client';

import { useState, useTransition, type FormEventHandler } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { subscribeToNewsletter } from '@/lib/actions';

export function SubscriptionFormClient() {
    const { toast } = useToast();
    const [email, setEmail] = useState('');
    const [isPending, startTransition] = useTransition();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);

        startTransition(async () => {
            const result = await subscribeToNewsletter(formData);

            if (result.success) {
                toast({
                    title: result.message,
                    description: 'Please check your email inbox',
                });
                setEmail('');
            } else {
                toast({
                    title: 'Error',
                    description: result.message,
                    variant: 'destructive',
                });
            }
        });
    };

    return (
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
            <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col gap-2 sm:flex-row sm:gap-3"
            >
                <Input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-9 w-full text-sm sm:h-10 sm:text-base"
                />
                <Button
                    type="submit"
                    variant="neutral"
                    className="h-9 whitespace-nowrap text-sm sm:h-10 sm:text-base"
                    disabled={isPending}
                >
                    {isPending ? 'Subscribing...' : 'Subscribe'}
                </Button>
            </form>
        </div>
    );
}
