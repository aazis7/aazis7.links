import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '404',
    description: '404 Page not found',
};

export default function NotFound() {
    return (
        <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2 md:gap-4">
                <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                    404 | Page not found
                </h1>
                <p className="tracking-tight">
                    The page you are looking for it does not seem exist.
                </p>
                <Button variant={'neutral'} asChild>
                    <Link href={'/'} replace>
                        Return to the homepage
                    </Link>
                </Button>
            </div>
        </main>
    );
}
