'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({
    error,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    const router = useRouter();

    useEffect(() => {
        console.error(error);
    }, [error]);

    const refresh = () => {
        router.refresh();
    };

    return (
        <div>
            <p>Oops! Something went wrong... maybe try refreshing?</p>
            <button onClick={refresh}>Refresh</button>
        </div>
    );
}
