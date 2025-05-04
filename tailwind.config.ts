import type { Config } from 'tailwindcss';

export default {
    darkMode: ['class'],
    content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                main: 'var(--main)',
                overlay: 'var(--overlay)',
                bg: 'var(--bg)',
                bw: 'var(--bw)',
                blank: 'var(--blank)',
                text: 'var(--text)',
                mtext: 'var(--mtext)',
                border: 'var(--border)',
                ring: 'var(--ring)',
                ringOffset: 'var(--ring-offset)',

                secondaryBlack: '#212121',
            },
            borderRadius: {
                base: '3px',
            },
            boxShadow: {
                shadow: 'var(--shadow)',
            },
            translate: {
                boxShadowX: '4px',
                boxShadowY: '4px',
                reverseBoxShadowX: '-4px',
                reverseBoxShadowY: '-4px',
            },
            fontWeight: {
                base: '500',
                heading: '900',
            },
            fontFamily: {
                sans: ['var(--font-public-sans)'],
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config;
