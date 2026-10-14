/**
 * Share destinations used by both the footer share block
 * (`ShareLinks.astro`) and the in-read share callout
 * (`ShareCallout.astro`). Each shares the current page URL by
 * appending it to the given base `href`.
 */
export const shareLinks = [
  {
    name: "Slack",
    href: "https://slack.com/share?url=",
    linkTitle: `Share this post on Slack`,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/sharing/share-offsite/?url=",
    linkTitle: `Share this post on LinkedIn`,
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/intent/compose?text=",
    linkTitle: `Share this post on Bluesky`,
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/submit?url=",
    linkTitle: `Share this post on Reddit`,
  },
  {
    name: "X",
    href: "https://twitter.com/intent/tweet?url=",
    linkTitle: `Share this post on X`,
  },
] as const;
