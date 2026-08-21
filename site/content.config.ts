import { defineCollection } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

/**
 * The documentation collection, on Starlight's own defaults.
 *
 * There is no slug map and no manifest here on purpose. A file's path under
 * `site/content/docs` is the URL it is served at, so the only way to publish a page is to
 * add a file and the only way to move one is to move its file. A corpus of typeset paper
 * chapters used to be loaded through here as well, with a generated id apiece; that corpus
 * no longer lives in this package and this collection is the only one there is.
 */
export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
