---
title: The market
description: What the canonical market quotes, why the domain is bounded, and what the protocol does not promise.
sidebar:
  order: 7
---

The primitive and the market are two separate things. The escrow works whether or not
anybody is quoting.

## What is quoted

The canonical market quotes the option leg against its own collateral. Its price is
provably bounded in the unit interval for the whole life of the series, because a leg is a
share of one deposit and a share cannot exceed the whole.

A bounded domain is the best case for concentrated liquidity: the range that has to be
covered is known in advance and does not move.

## Why one market is enough

Minting and merging are free, unrestricted and symmetric. Anybody can turn one deposit into
both legs and both legs back into one deposit, at any time, in either direction.

That freedom pins the two prices to `O + N = 1` in units of collateral, to within the cost
of gas. So one market prices both legs, rather than two markets pricing them
inconsistently. The note leg's price is read off the option leg's, and an inconsistency
between them is an arbitrage anybody can take.

## The cutoff

Quoting stops at $T - \delta$. Approaching expiry, the option leg's value becomes close to
a step around the strike, and a passive quote near expiry is adversely selected by anyone
who can see the strike being crossed. The cutoff exists to stop a market maker being picked
off in the last minutes rather than to protect anybody's position.

The consequence is that there is no market between the cutoff and expiry. Minting and
merging continue throughout.

## What is not promised

Liquidity is not a protocol guarantee. Series are listed rather than created on demand,
a listed series may be quoted thinly or not at all, and the escrow makes no undertaking
about either. What the protocol guarantees is that a matched pair recovers its deposit and
that a settled leg redeems for its share. Everything about price is the market's.
