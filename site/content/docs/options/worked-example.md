---
title: Worked example
description: One call series and one put series carried through to redemption, with numbers.
sidebar:
  order: 9
---

Two series, carried from creation to redemption. All quantities are per one deposit.

## A call series

An asset trading at 100, a series struck at $S = 120$, secured in the asset. One deposit is
one unit of the asset.

Mint one deposit and receive one option leg and one note leg. The escrow now holds one unit
of the asset against them.

The note leg's share at settlement is $\kappa(S, x_T) = \min(1, 120 / x_T)$.

| Settlement value $x_T$ | Note leg | Option leg | Option leg, in cash |
| --- | --- | --- | --- |
| 100 | 1 | 0 | 0 |
| 120 | 1 | 0 | 0 |
| 180 | 0.667 | 0.333 | 60 |
| 240 | 0.5 | 0.5 | 120 |

At 180 the option leg redeems for a third of one asset unit, which is 60 in cash, and a
call struck at 120 with the asset at 180 is worth 60. At every row the two shares sum to
one deposit.

Note what the note leg did. Between 100 and 180 the asset gained 80 and the note leg's
holder ended with 0.667 of a unit worth 120. They gave up the move above the strike, which
is what a covered call gives up. Had the asset fallen to 50, the note leg would hold the
whole deposit, one unit, now worth 50. It carries the full downside below the strike.

## A put series

The same asset, a series struck at $S = 80$, secured in cash. One deposit is 80 in cash.

The note leg's share is $\kappa(x_T, S) = \min(1, x_T / 80)$.

| Settlement value $x_T$ | Note leg | Option leg | Option leg, in cash |
| --- | --- | --- | --- |
| 100 | 1 | 0 | 0 |
| 80 | 1 | 0 | 0 |
| 60 | 0.75 | 0.25 | 20 |
| 40 | 0.5 | 0.5 | 40 |

At 60 the option leg redeems for a quarter of the 80 cash deposit, which is 20, and a put
struck at 80 with the asset at 60 is worth 20.

## The exit that needs none of this

At any point in either example, before or after expiry, settled or not, one option leg plus
one note leg merges back into one deposit. Neither table is consulted. That exit depends on
no oracle, no venue and no operator.
