import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.slashgear.dev/", // replace this with your deployed domain
  author: "Antoine Caron",
  profile: "https://blog.slashgear.dev/",
  desc: "Antoine Caron personal blog where you can read news about his open-source courses, packages.",
  title: "Antoine Caron",
  ogImage: "picture-of-me.png",
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 6,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/Slashgear",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/antoine-caron-slash/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://x.com/Slashgear_",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Reddit",
    href: 'https://www.reddit.com/user/slashgear_/',
    linkTitle: `${SITE.title} on Reddit`,
    active: true,
  },
  {
    name: 'Hackernoon',
    href: 'https://hackernoon.com/u/antoinecaron',
    linkTitle: `${SITE.title} on Hackernoon`,
    active: true,
  },
  {
    name: 'Discord',
    href: 'https://discordapp.com/users/199566011849113600',
    linkTitle: `${SITE.title} on Discord`,
    active: true,
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@Slashgear_',
    linkTitle: `${SITE.title} on Medium`,
    active: true,
  },
  {
    name: 'NPM',
    href: 'https://www.npmjs.com/~slashgear',
    linkTitle: `${SITE.title} on Medium`,
    active: true,
  }
];
