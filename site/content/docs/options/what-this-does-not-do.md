---
title: What this does not do
description: Every cost of the design, at full strength, in one place.
sidebar:
  order: 11
---

Everything on this page is a cost of the design rather than a defect in it. Each item
appears where its mechanism is explained as well as here, because a reader who skims
straight to the limitations is exactly the reader these are written for.

## Settlement can be attacked

A well funded party can move a sampled median. Settlement reads a price off a market and a
market can be pushed. The median, the depth floor and the fact that spacing is enforced per
series raise what an attack costs. None of them makes it unavailable, and an uncontested
window is a much cheaper attack than the majority arithmetic alone suggests.

## A series can fail to settle

Sampling is permissionless, which means it is nobody's duty rather than everybody's. If
nobody records enough valid samples before the window closes, the series does not settle
and no leg redeems. A matched pair still merges at par.

A series may instead be configured so that it restricts recording to a named set. That
swaps nobody's duty for somebody's, and the set cannot be added to once the series exists,
so there is no way to appoint a replacement if it stops recording.

## An arbiter can set a value on a series

For a series that genuinely cannot settle on its own evidence, an arbiter can set a value
on a series once a grace period has elapsed. The arbiter is a trusted party. It cannot
reach a series that has cleared its count, which bounds the power but does not remove it.

## The note leg is not protected

The note leg pays like a covered call on a call series and like a cash secured put on a put
series without being either, and it carries the full downside below the strike. Only one
leg of a series is an option. Holding the note leg is a directional position in the
underlying with the upside sold off, and nothing in this design changes that.

## Full collateralisation costs netting

Full collateralisation buys no netting. Offsetting positions across two series each post
their own collateral, because nothing is pooled across series. This is the price of having
no margin system, and it is a real cost to anybody running more than one position.

## The market is not guaranteed

Liquidity is not a protocol guarantee. Series are listed rather than created on demand, so
a holder cannot conjure the series they want, and a listed series may be quoted thinly or
not at all.

Quoting stops at the cutoff, so there is no market between the cutoff and expiry. The
cutoff exists because a passive quote near expiry is adversely selected by anyone who can
see the strike being crossed.

## What may be listed is constrained

Only plain tokens can be listed. The escrow holds balances and assumes they stay put, so
a collateral token whose administrator can move, freeze or rebase balances breaks the
solvency argument from outside the protocol. Verifying a prospective collateral token's
privileged roles is a listing decision, not something the escrow can check.
