---
title: The four operations
description: Mint, merge, settle and redeem, and what each one conserves.
sidebar:
  order: 4
---

The escrow exposes four operations. Everything a series can do is one of them.

## Mint

Post one deposit, receive one of each leg. Available to anybody until expiry.

Minting is value neutral: it adds a deposit to the escrow and adds exactly one unit of
each claim against it. It cannot dilute an existing holder, because the collateral arrives
in the same operation as the claims on it.

## Merge

Hand back one of each leg, receive one deposit. Available at any time, before or after
expiry, settled or not.

A matched pair is one deposit by construction, which is why merge carries no time bound
and needs no oracle. This is the one exit that depends on no price, no venue and no
operator. It works when settlement has already happened, and it works when settlement
never happens at all.

## Settle

Fix the settlement value of an expired series by finalising its oracle. Permissionless,
and it may be called once.

Settlement is what turns two claims on a deposit into two known shares of it. Before it,
the only exit is merge. After it, each leg redeems independently.
[Settlement](/docs/options/settlement/) is the whole of how that number is produced.

## Redeem

After settlement, hand back one leg and receive its share of the deposit, in collateral.

The two shares sum to one deposit exactly, at any settlement value whatever. Redemption
rounds down, and the rounding is what the escrow keeps rather than what it owes, so no
interleaving of operations can leave it short.

## What is conserved

Minting and merging move the count of outstanding legs and leave the ratio of collateral
to claims untouched. Settling fixes a number and moves nothing. Redeeming pays a share and
retires the claim it paid.

The identity `O + N = 1` holds through all four, at every price, in every phase. It carries
no domain and no inequality, because it is a property of the construction rather than of
any market.
