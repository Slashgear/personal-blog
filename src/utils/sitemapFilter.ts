/**
 * Decide whether a built page should be listed in the sitemap.
 * Thin pages that are noindexed (tags, post pagination) stay crawlable but
 * are excluded so the sitemap only contains pages of real value.
 *
 * `pathname` is the page's path, e.g. "/posts/2/" or "/tags/angular/".
 */
export function shouldIncludeInSitemap(pathname: string): boolean {
  if (pathname.startsWith("/tags/")) return false;
  // Any numbered post-pagination page (e.g. "/posts/2/"); "/posts/" itself
  // (the blog listing, page 1) is not numbered and must be kept.
  if (/^\/posts\/\d+\/$/.test(pathname)) return false;
  return true;
}
