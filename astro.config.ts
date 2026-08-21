import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import { unified } from "@astrojs/markdown-remark";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

/**
 * The documentation site.
 *
 * Ordinary Markdown under `site/content/docs`, and nothing else. This folder used to hold
 * a second build beside the site, typesetting PDFs from a shared corpus so that the papers
 * and the site could not disagree. That is gone. The whitepaper is built in `whitepaper/`
 * by its own pipeline and reaches this site as a file copied into `public/`, so the two
 * are now free to disagree and a reader is what catches it.
 *
 * srcDir stays at site/ so the Astro sources sit in one directory rather than spread
 * across the root of the package.
 *
 * `npm run build` passes --force deliberately. Astro's content layer caches rendered
 * markdown keyed by the source file, so a change to the markdown pipeline below changes
 * how every page should render and invalidates none of them. A site this size rebuilds in
 * about a second, which is a cheap price for never shipping a stale render.
 */
export default defineConfig({
  srcDir: "./site",
  /*
   * Served as a GitHub project page, so the site lives one path segment deep rather
   * than at a domain root: longbowoptions.github.io/docs/. `base` is what puts that
   * segment in front of every emitted asset and route. It is temporary. The custom
   * domain in public/CNAME is the intended home, and moving there means deleting the
   * base and restoring the site below, at which point the site is at a root again.
   */
  site: "https://longbowoptions.github.io",
  base: "/docs",
  /*
   * $LONG is referred to as /token from everywhere that links to it, because that is
   * the name of the subject rather than the name of a folder it happens to sit in.
   * The page itself lives under introduction/, so this maps the one onto the other and
   * the references stay stable if the file is ever filed somewhere else.
   */
  redirects: {
    "/token": "/docs/introduction/token/",
  },
  markdown: {
    // Astro 7 takes a processor rather than bare plugin arrays. Same two plugins.
    processor: unified({
      remarkPlugins: [remarkMath],
      /*
       * KaTeX's default output: its own HTML, with the MathML kept beside it and hidden,
       * so a screen reader still reads a formula rather than spelling out its glyphs.
       *
       * This was MathML alone until it was found to be unreadable on the page, on the
       * reasoning that native MathML is semantic and needs no stylesheet. The second half
       * of that was wrong twice over. Starlight puts a top margin on every element under
       * .sl-markdown-content that follows a sibling, excluding a list of inline tags that
       * MathML is not on, so every subscript and every denominator was being pushed a
       * full line down out of its own formula. Native MathML also lays out against the
       * OpenType MATH table of the font it inherits, and Spectral has none, so fraction
       * bars and stretchy fences came out at whatever a reader happened to have installed.
       *
       * KaTeX's HTML has neither problem. It is spans, which Starlight's rule excludes by
       * name, and it positions itself against fonts it ships rather than against the
       * reader's.
       */
      rehypePlugins: [rehypeKatex],
    }),
  },
  integrations: [
    starlight({
      title: "Longbow",
      description: "Synthetic options, fully collateralised, settled on a sampled median.",
      // KaTeX first, so anything in longbow.css that touches a formula still wins. Vite
      // bundles the faces KaTeX's stylesheet references, so the fonts are served from
      // this origin rather than fetched from a CDN at read time.
      customCss: ["katex/dist/katex.min.css", "./site/styles/longbow.css"],
      // Unconditional. The sidebar is generated from the files that exist rather than
      // from a manifest that can run ahead of them, so a broken internal link is never
      // legitimate and is always worth failing the build over.
      plugins: [
        starlightLinksValidator({
          // /docs/token/ is a redirect, and redirects are emitted by Astro rather than
          // by Starlight, so the validator cannot see the route and calls the link dead.
          // The route is real: dist/token/index.html. This is the exclusion the plugin
          // documents for pages it cannot resolve, and it is the only one.
          exclude: ["/docs/token/"],
        }),
      ],
      pagination: true,
      lastUpdated: false,
      // The lockup replaces the title because it contains it: brand/FullLogo.svg
      // sets the wordmark in Figtree Black, which is the face the headings beside
      // it are cut from. Two files rather than one because the light theme is
      // paper, and the cream half of the wordmark cannot be read on it.
      logo: {
        light: "./site/assets/logo-full-light.svg",
        dark: "./site/assets/logo-full.svg",
        replacesTitle: true,
      },
      favicon: "/logo-mark.svg",
      social: [
        { icon: "x.com", label: "X", href: "https://x.com/LongBowOptions" },
        { icon: "telegram", label: "Telegram", href: "https://t.me/+0-gT6-iZYzcyM2Ux" },
        { icon: "discord", label: "Discord", href: "https://discord.gg/JWNDEkXdV8" },
      ],
      // An unset theme preference resolves to dark rather than to the operating
      // system, so arriving from the landing page is not a change of scenery.
      components: {
        ThemeProvider: "./site/overrides/ThemeProvider.astro",
      },
      // A link shared anywhere shows the same card the landing page shows.
      head: [
        { tag: "meta", attrs: { property: "og:image", content: "https://longbowoptions.github.io/docs/og.png" } },
        { tag: "meta", attrs: { name: "twitter:card", content: "summary_large_image" } },
      ],
      /*
       * One group per subject.
       *
       * Longbow is the parent and Longbow Options is a product of it, so the introduction
       * is about Longbow and everything specific to the options product lives under that
       * product: its mechanism, its parameters, its limits and its paper. $LONG is a third
       * subject again and owns its own section. Nothing about one of them is explained
       * inside another, which is why there is no cross-cutting "risks" group: a limit
       * belongs to the thing it is a limit of.
       *
       * This is also the mobile fix. The previous sidebar was one group holding a flat
       * list of whitepaper chapters, so the menu button on a phone opened a chapter list
       * and the front page had no navigation in it at all.
       *
       * Each group autogenerates from its directory and orders on the `sidebar.order` in
       * each file's frontmatter, so adding a page is adding a file. Reference is collapsed
       * because it is looked up rather than read.
       */
      sidebar: [
        { label: "Introduction", items: [{ autogenerate: { directory: "introduction" } }] },
        { label: "Longbow Options", items: [{ autogenerate: { directory: "options" } }] },
        { label: "$LONG", items: [{ autogenerate: { directory: "token" } }] },
        { label: "Reference", collapsed: true, items: [{ autogenerate: { directory: "reference" } }] },
      ],
    }),
  ],
});
