'use client';

import Image from 'next/image';
import { LinkType } from '@/lib/links';
import { use } from 'react';

interface LinkCardProps {
    links: Record<string, LinkType>;
}

export function LinkCard({ links }: { links: Promise<LinkCardProps> }) {
    const allLinks = use(links);

    return (
        <>
            {Object.keys(allLinks.links).map((key) => {
                const { link, icon, title, text } = allLinks.links[key];

                return (
                    <a
                        className={`text-main-foreground rounded-base border-2 border-border bg-main p-5 shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none`}
                        key={key}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={link}
                        aria-label={`Visit ${title}`}
                    >
                        <Image
                            className="size-8 sm:size-10"
                            width={24}
                            height={24}
                            src={icon.src}
                            alt={title}
                            priority
                        />
                        <p className="mt-3 text-lg font-heading sm:text-xl">
                            {title}
                        </p>
                        <p className="mt-1 text-sm font-base sm:text-base">
                            {text}
                        </p>
                    </a>
                );
            })}
        </>
    );
}
