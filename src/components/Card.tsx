import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface CardImage {
  src: string;
  srcSet?: string;
  width: number;
  height: number;
}

// Card only reads these five fields. Typing it as a Pick (rather than the
// whole entry) lets the search page hand it a trimmed object instead of
// serialising every post's full frontmatter into the page.
export type CardFrontmatter = Pick<
  CollectionEntry<"blog">["data"],
  "title" | "pubDatetime" | "modDatetime" | "description" | "language"
>;

export interface Props {
  href?: string;
  frontmatter: CardFrontmatter;
  secHeading?: boolean;
  image?: CardImage;
}

export default function Card({ href, frontmatter, secHeading = true, image }: Props) {
  const { title, pubDatetime, modDatetime, description, language } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };
  const isFrench = language === "fr";

  const prefixedTitle = isFrench ? `🇫🇷 ${title}` : title;

  return (
    <li className="my-6 flex gap-4">
      {image && (
        <a href={href} className="hidden shrink-0 sm:block" tabIndex={-1} aria-hidden="true">
          <img
            src={image.src}
            srcSet={image.srcSet}
            sizes="112px"
            width={image.width}
            height={image.height}
            loading="lazy"
            alt=""
            className="h-20 w-28 rounded object-cover"
          />
        </a>
      )}
      <div className="min-w-0 flex-1">
        <a
          href={href}
          className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
        >
          {secHeading ? (
            <h2 {...headerProps} lang={language}>
              {prefixedTitle}
            </h2>
          ) : (
            <h3 {...headerProps} lang={language}>
              {prefixedTitle}
            </h3>
          )}
        </a>
        <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
        <p lang={language}>{description}</p>
      </div>
    </li>
  );
}
