---
title: Longbow
description: Synthetic options, fully collateralised, settled on a sampled median.
template: splash
editUrl: false
hero:
  tagline: Synthetic options, fully collateralised, settled on a sampled median.
  image:
    html: |
      <div class="lb-card">
        <img class="lb-watermark" src="/docs/logo-mark.svg" alt="" aria-hidden="true" />
        <p class="lb-label">The identity</p>
        <p class="lb-identity">O + N = 1</p>
        <ul class="lb-legend">
          <li>
            <span class="lb-swatch lb-swatch-lapis" aria-hidden="true"></span>
            <span class="lb-sym">O</span>
            <span class="lb-gloss">the option leg</span>
          </li>
          <li>
            <span class="lb-swatch lb-swatch-gold" aria-hidden="true"></span>
            <span class="lb-sym">N</span>
            <span class="lb-gloss">the note leg, fully secured</span>
          </li>
        </ul>
      </div>
  actions:
    - text: Start reading
      link: /docs/options/overview/
      variant: primary
    - text: Download the whitepaper
      link: /docs/longbow-whitepaper.pdf
      variant: secondary
    - text: longbowoptions.com
      link: https://longbowoptions.com
      variant: minimal
---

<div class="lb-claims">
  <div class="lb-claim">
    <h2>Collateralised in full</h2>
    <p>Every position is collateralised in full the moment it exists, so there is no margin, no liquidation and no counterparty that can fail.</p>
  </div>
  <div class="lb-claim">
    <h2>One deposit, two claims</h2>
    <p>One leg of a series is an option and the other is what the deposit becomes once that option has been split off it.</p>
  </div>
  <div class="lb-claim">
    <h2>Settled on a median</h2>
    <p>A series settles on the median of spaced samples drawn from an on-chain venue, and a matched pair recovers its deposit at par at any time.</p>
  </div>
</div>

<nav class="lb-routes" aria-label="Sections">
  <a href="/docs/introduction/what-is-longbow/">
    <span class="lb-route-h">Introduction</span>
    <span class="lb-route-p">Longbow itself, and the things it builds.</span>
  </a>
  <a href="/docs/options/overview/">
    <span class="lb-route-h">Longbow Options</span>
    <span class="lb-route-p">The options product: the mechanism, its parameters and its limits.</span>
  </a>
  <a href="/docs/token/">
    <span class="lb-route-h">&#36;LONG</span>
    <span class="lb-route-p">The token, the curve that opens it and the ladder that distributes it.</span>
  </a>
  <a href="/docs/reference/glossary/">
    <span class="lb-route-h">Reference</span>
    <span class="lb-route-p">Glossary, and the questions the design attracts most.</span>
  </a>
</nav>

<p class="lb-label">Version 0.1, August 2026</p>
