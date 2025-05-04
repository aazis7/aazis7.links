import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonLink() {
    const skeletonItems = Array.from({ length: 6 }, (_, i) => i);

    return (
        <>
            {skeletonItems.map((item) => (
                <div
                    key={item}
                    className="text-main-foreground rounded-base border-2 border-border bg-main p-5 shadow-shadow"
                >
                    {/* Icon skeleton */}
                    <Skeleton className="h-8 w-8 rounded-md sm:h-10 sm:w-10" />

                    {/* Title skeleton */}
                    <Skeleton className="mt-3 h-6 w-24 sm:h-7 sm:w-32" />

                    {/* Text skeleton */}
                    <Skeleton className="mt-1 h-4 w-full sm:h-5" />
                    <Skeleton className="mt-1 h-4 w-3/4 sm:h-5" />
                </div>
            ))}
        </>
    );
}
