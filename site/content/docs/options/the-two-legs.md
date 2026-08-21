---
title: The two legs
description: The kernel that splits a deposit, and the identity the two shares satisfy.
sidebar:
  order: 2
---

A **series** is the unit everything else is said about: one underlying, one strike, one
expiry, one settlement configuration and one of the two collateral classes. Creating a
series fixes all of them and they are immutable afterwards.

A **deposit** is one unit of whatever secures the series. Every quantity on these pages is
counted in deposits, so the two constructions can be described once instead of twice.

## The kernel

One deposit splits into two shares using a single function:

$$
\kappa(a, b) = \min\left(1, \frac{a}{b}\right)
$$

The note leg receives $\kappa(a, b)$ of the deposit. The option leg receives the rest:

$$
O = 1 - \kappa(a, b), \qquad N = \kappa(a, b), \qquad O + N = 1
$$

The denominator $b$ is the numeraire the series is secured in. Which arguments go where
is what distinguishes a call series from a put series, and
[instruments](/docs/options/instruments/) is where that is set out.

## Why the option leg is the residual

The option leg is always computed as one minus the note leg's share, never independently.
That is not an implementation convenience. Two shares derived from one subtraction cannot
sum to anything other than a whole deposit, at any settlement value, including values
nobody would choose. The escrow therefore holds exactly what it owes by construction
rather than by a check that has to be maintained.

The contracts name the same two legs `OPTION` and `NOTE`, in that correspondence, so there
is no mapping between these pages and the code to keep straight.

## What each leg is

**The option leg** is the option. It is worth nothing at settlement values that leave the
strike untouched and takes the whole of the move beyond it.

**The note leg** is what the deposit becomes once the option has been split off it. It is
not a hedged position. It pays like a covered call on a call series and like a cash
secured put on a put series, without being either, and it carries the full downside below
the strike. It is never described as protected anywhere in this documentation, because it
is not.

Both are ERC-6909 balances. An ERC-20 wrapper exists for venues that speak only ERC-20,
which is a listing convenience and not what makes a leg transferable.
