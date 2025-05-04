import { SITE_BASE_URL } from '@/lib/constants';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: SITE_BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0,
        },
    ];
}
