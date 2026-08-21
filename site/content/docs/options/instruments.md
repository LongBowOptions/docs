---
title: Instruments
description: A call secured in the asset and a put secured in cash, and why the numeraire is forced.
sidebar:
  order: 3
---

Two constructions cover the market: a call secured in the asset, and a put secured in
cash.

Which of the two secures a series is not a design choice. A payoff can be collateralised
only in a numeraire that bounds it, and these two payoffs are bounded in opposite ones.

## The call series

Secured in the asset. One deposit is one unit of the underlying. Per one asset base unit,
the note leg receives $\kappa(S, x_T)$ and the option leg receives the remainder.

At a settlement value at or below the strike the kernel saturates at one, the note leg
takes the whole deposit, and the option leg is worth nothing. Above the strike the note
leg's share falls as $S / x_T$ and the option leg takes what it gives up.

## The put series

Secured in cash. One deposit is $S$ in cash. Per one cash base unit, the note leg receives
$\kappa(x_T, S)$ and the option leg receives the remainder.

At a settlement value at or above the strike the kernel saturates at one and the option
leg is worth nothing. Below the strike the note leg's share falls as $x_T / S$.

## Why the numeraire cannot be swapped

A call's payoff is unbounded in cash and bounded in the asset: it can never be worth more
than one unit of the underlying. A put's payoff is unbounded in the asset and bounded in
cash: it can never be worth more than the strike. Collateralising either one in the
numeraire that does not bound it would need an amount nobody can post in advance, which is
what margin exists to avoid posting.

So a call series holds the asset and a put series holds cash, and neither can be written
the other way round.

## What may be listed

Cash means the dollar stablecoin a series is quoted in, and the asset means the ERC-20 the
series is written on. Both must be ordinary tokens with no behaviour of their own. That is
a constraint on what may be listed rather than an assumption about what exists:
only plain tokens can be listed, and
[what this does not do](/docs/options/what-this-does-not-do/) says what that rules out.

Series are listed rather than created on demand. A holder cannot conjure the series they
want into existence.
