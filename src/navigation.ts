
export const headerData = {
  links: [
    {
      text: 'About Me',
      href: '/about',
    },
    {
      text: 'Contact',
      href: '#contact',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Skills',
      href: '#skills',
    },
    {
      text: 'Experience',
      href: '#experience',
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