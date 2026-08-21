# Longbow docs

The documentation site, published at docs.longbowoptions.com. Astro and Starlight over
ordinary Markdown under `site/content/docs`. A file's path is its URL and the sidebar is
generated from the directories, so adding a page is adding a file.

This folder used to hold a second thing beside the site: a Markdown dialect, a Typst
emitter, a figure generator and a corpus of chapters that typeset three PDFs, kept here so
that the papers and the site could not disagree about what they claimed. That is gone. The
whitepaper is built in `whitepaper/` by its own pipeline, and nothing in this package reads
it or is read by it.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # the static site into dist/
```

| Script | What it does |
| --- | --- |
| `npm run dev` | The site, on a local server that reloads |
| `npm run build` | Builds the static site into `dist/` |
| `npm run preview` | Serves what `build` produced |

`npm run build` is the only gate there is. `starlight-links-validator` runs inside it and
unconditionally, so a broken internal link fails the build rather than shipping a 404.

## Layout

```
site/                   the Astro srcDir
  content/docs/         the documentation, plain Markdown. Path is URL.
    index.md              the splash
    introduction/         Longbow itself. Not the options product.
    options/              Longbow Options: mechanism, parameters, limits, paper
    token/                $LONG: the curve, the ladder, supply, the launch
    reference/            glossary and FAQ, which are not any one subject's
  content.config.ts     Starlight's own defaults. No slug map, no manifest.
  overrides/            the Starlight components this site replaces
  assets/               the lockup, in a dark and a light cut
  styles/longbow.css    the palette, the type and the chrome
public/                 served verbatim: the favicon, the card, the whitepaper PDF
```

## The whitepaper PDF

`public/longbow-whitepaper.pdf` is served at `/longbow-whitepaper.pdf` and linked from the
splash and from `options/whitepaper.md`. Nothing here builds it. It comes from the sibling
folder and is copied in by hand:

```bash
bash ../whitepaper/build.sh
cp ../whitepaper/longbow-whitepaper.pdf public/longbow-whitepaper.pdf
```

It is committed rather than ignored, because it is an asset of this site rather than
output of this site's build. There is no script that refreshes it, so a change to the
whitepaper reaches the site only when somebody runs those two lines.

## One group per subject

Longbow is the parent. Longbow Options is a product of it and $LONG is a third subject
again, so the sidebar has one group each and nothing about one is explained inside
another. In particular there is no cross-cutting "risks" group: a limit belongs to the
thing it is a limit of, so `what-this-does-not-do` and `what-is-deferred` sit inside
`options/` alongside the mechanism they qualify, and a second product brings its own pair.
The whitepaper is the options paper, so its page lives there too.

`astro.config.ts` names the four groups and autogenerates each from its directory,
ordering on the `sidebar.order` in each file's frontmatter. Nothing is a second copy of
anything: there is no manifest of pages that can run ahead of the files, which is why
`starlight-links-validator` runs unconditionally.

This is also the mobile fix. The sidebar used to be a single group holding a flat list of
chapters, so the menu button on a phone opened a chapter list, and the front page, which
uses the splash template and therefore has no sidebar at all, had no navigation in it
whatsoever. Named subjects give the menu something to be, and `.lb-routes` on the splash
gives the front page the same four links.

## Two things that will bite

**Astro caches rendered markdown.** The content layer keys its cache on the source file,
so editing the markdown pipeline changes how every page should render and invalidates
none of them. `npm run build` passes `--force` for exactly this reason. Never remove it.

**A bare `$LONG` is a maths delimiter.** `remark-math` is enabled, so a paragraph naming
the token twice becomes a paragraph with a formula in the middle of it, and no error is
raised anywhere. Write it `\$LONG`. A lint used to catch this and no longer exists, so the
only thing standing between the site and a mangled paragraph is remembering the backslash.

## Honest framing to preserve

Only one leg of a series is an option. The other pays like a covered call or a
cash-secured put without being one, and it carries the full downside below the strike. It
is never described as protected.

This used to be enforced. `content/disclosures.ts` and `content/site.ts` counted about
thirty phrases the site was obliged to keep saying, and `content/style.ts` forbade em and
en dashes, American spelling, the word protected, and naming the outside protocols. All of
it was deleted with the corpus, so every one of those is now editorial discipline rather
than a build failure. An edit can delete a disclosure and still ship.

The phrases worth guarding hardest, because each is a cost a reader has to meet: only one
leg of a series is an option; the note leg carries the full downside below the strike; a
sampled median can be moved; a series can fail to settle; the arbiter is a trusted party;
nothing is pooled across series; the issuer benefits from a lower settlement value; the fee
prices sniping rather than preventing it.
