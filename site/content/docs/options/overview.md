---
title: What Longbow Options is
description: One deposit, split at a strike into two claims that sum back to it at every price.
sidebar:
  order: 1
---

Longbow Options splits one deposit of collateral at a strike into two claims whose payoffs
sum to that deposit at every price. Only one leg of a series is an option. The other is the
residual that option leaves behind, and both are collateralised in full at the instant they
are created.

That single sentence carries most of the product. Everything else in this section is either
a consequence of it or a cost of it.

## What follows from it

**No margin and no liquidation.** The deposit is the whole of the obligation standing
behind both claims. No participant can owe more than they hold, so there is nothing to
call in and no account that can be closed out by anybody.

**No counterparty that can fail.** The option is synthetic in the literal sense: no seller
writes it. It is produced out of a deposit, and that deposit sits in the escrow from the
moment the claim exists until the moment it is redeemed.

**One market prices both legs.** Minting and merging a pair are free, unrestricted and
symmetric, which pins the two prices to `O + N = 1` in units of collateral to within the
cost of gas.

## Why it works this way

Most assets have no options market. Writing one the ordinary way needs a seller willing to
take an uncollateralised obligation, a margin system to decide how much of it they may
take, and a liquidation mechanism for when they take too much. Each of those is a place the
arrangement can fail, and each has to work on the worst day rather than the average one.

Longbow Options removes the seller instead of trying to make the seller safe. The option is
not written by anyone: it is carved out of collateral that was already there, which is why
nothing behind it can default.

## What it costs

Full collateralisation buys no netting. A participant holding offsetting positions across
two series posts collateral for both, because nothing is pooled across series and one
series cannot draw on another's. Margin exists precisely to avoid that, and this design
gives it up on purpose in exchange for having no margin system to get wrong.

## The honest half

The note leg is not a hedged position and it is not a safe one. It pays like a covered call
on a call series, and like a cash secured put on a put series, without being either, and it
carries the full downside below the strike exactly as those positions do. Nothing here is
described as protected.

Settlement reads a price off a market, and a market can be pushed. A well funded party can
move a sampled median. [What this does not do](/docs/options/what-this-does-not-do/) states
every cost at full strength rather than leaving it to be worked out.

## Where to go next

[The two legs](/docs/options/the-two-legs/) is where the mechanism starts. It computes no option
value at any point, reads no volatility, and runs no pricing model: what a leg is worth is
whatever the market pays for it, and what it redeems for is a share of one deposit fixed by
arithmetic.
