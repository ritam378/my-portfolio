export const baseUrl = "https://www.ritammukherjee.com";

export default async function sitemap() {
  let routes = [
    "",
    "/work",
    "/blog",
    "/linkedin",
    "/projects",
    "/contact-me",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return routes;
}
