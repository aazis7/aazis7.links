import github from '../../public/icons/github.svg';
import instagram from '../../public/icons/instagram.svg';
import linkedin from '../../public/icons/linkedin.svg';
import medium from '../../public/icons/medium.svg';
import x from '../../public/icons/x.svg';

import { StaticImageData } from 'next/image';

export type LinkType = {
    link: string;
    icon: StaticImageData;
    title: string;
    text: string;
};

export const LINKS: Record<string, LinkType> = {
    github: {
        title: 'Github',
        icon: github,
        link: 'https://github.com/aazis7',
        text: '@aazis7',
    },
    linkedin: {
        title: 'Linkedin',
        icon: linkedin,
        link: 'https://www.linkedin.com/in/aazis7',
        text: '@aazis7',
    },
    x: {
        title: 'X',
        icon: x,
        link: 'https://twitter.com/aazis_7',
        text: '@aazis7',
    },
    instagram: {
        title: 'Instagram',
        icon: instagram,
        link: 'https://www.instagram.com/aazis.7',
        text: '@aazis7',
    },
    medium: {
        title: 'Medium',
        icon: medium,
        link: 'https://medium.com/@aazis7',
        text: '@aazis7',
    },
};

export async function getLinks() {
    return {
        links: LINKS,
    };
}
