import { LinkCard } from '@/components/link-card';
import { SkeletonLink } from '@/components/skeleton-link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { getLinks } from '@/lib/links';
import { Suspense } from 'react';
import { Mail } from 'lucide-react';
import { SubscriptionForm } from '@/components/subscription-form';

export default function Home() {
    const links = getLinks();

    return (
        <div className="flex min-h-screen flex-col">
            <main className="container mx-auto max-w-3xl flex-1 px-4 py-6 sm:px-6 sm:py-8">
                {/* Header Section */}
                <section id="header-section" className="mb-8 sm:mb-12">
                    <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                        <Avatar>
                            <AvatarImage
                                src="/pfp.webp"
                                fetchPriority="high"
                                alt="Abdul Azis"
                            />
                            <AvatarFallback className="text-lg">
                                AA
                            </AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col gap-2 sm:gap-3">
                            <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                                Abdul Azis
                            </h1>

                            <div className="flex flex-wrap gap-2">
                                <Badge variant="neutral">Job Seeker</Badge>
                                <Badge variant="default">Developer</Badge>
                            </div>

                            <p className="text-muted-foreground max-w-2xl pb-6 pt-2 text-sm sm:pb-0 sm:text-base md:text-lg">
                                Fresh graduate with high learning spirit, focus
                                on web development, and web design. Currently
                                building independent projects while actively
                                seeking job opportunities and collaborations.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Section */}
                <section id="main-section" className="mb-8 sm:mb-12">
                    <div className="w-full">
                        <div
                            id="grid-container"
                            className="grid w-full grid-cols-1 gap-4 text-text sm:grid-cols-2 sm:gap-6 md:gap-7"
                        >
                            <Suspense fallback={<SkeletonLink />}>
                                <LinkCard links={links} />
                            </Suspense>
                        </div>
                    </div>
                </section>
            </main>

            <section className="container mx-auto max-w-3xl px-4 pb-6 sm:px-6 sm:pb-8">
                <footer className="mx-auto w-full pt-6 sm:pt-12">
                    <div className="text-main-foreground rounded-base border-2 border-border bg-main p-3 sm:p-4 md:p-5">
                        <div className="flex flex-col gap-4 sm:gap-6">
                            {/* Description */}
                            <div className="w-full text-left">
                                <p className="text-base font-medium sm:text-lg">
                                    @aazis7
                                </p>
                                <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm sm:text-base">
                                    <Mail className="h-3 w-3 flex-shrink-0 sm:h-4 sm:w-4" />
                                    <span>Email: </span>
                                    <span className="break-all underline underline-offset-4">
                                        halo.aazis7@gmail.com
                                    </span>
                                </p>
                                <p className="text-muted-foreground md:text-md mt-2 text-xs sm:text-sm">
                                    Building digital experiences with modern web
                                    technologies. Connect with me for works,
                                    collaborations, projects, or just to say
                                    hello.
                                </p>
                            </div>

                            {/* Bottom section with copyright and subscription */}
                            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-6">
                                <div className="flex flex-col items-start">
                                    <p className="text-sm font-semibold sm:text-base">
                                        &copy; {new Date().getFullYear()}{' '}
                                        <a
                                            href="https://github.com/aazis7"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary underline underline-offset-4 transition-colors"
                                        >
                                            aazis7
                                        </a>
                                    </p>
                                    <p className="text-sm font-semibold sm:text-base">
                                        All rights reserved.
                                    </p>
                                </div>

                                <div className="w-full sm:w-auto sm:max-w-sm">
                                    <SubscriptionForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    );
}
