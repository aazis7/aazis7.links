import { SITE_BASE_URL } from '@/lib/constants';

export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
            },
        ],
        sitemap: `${SITE_BASE_URL}/sitemap.xml`,
    };
}
