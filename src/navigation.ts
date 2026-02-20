import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About Me',
      href: getPermalink('/'),
    },
    {
      text: 'Contact',
      href: getPermalink('/'),
    },
    {
      text: 'Blog',
      href: getPermalink('/'),
    },
    {
      text: 'Skills',
      href: getPermalink('/'),
    },
    {
      text: 'Experience',
      href: getPermalink('/'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/Dan1731' },
    // Replace with your LinkedIn URL:
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/claudia-vargas-b80065137/' },
  ],

  footNote: `
    <span>© ${new Date().getFullYear()} Claudia. Built with Astro.</span>
  `,
};