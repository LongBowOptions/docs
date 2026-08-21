---
title: The life of a series
description: Creation, the minting phase, the cutoff, the window, settlement and redemption.
sidebar:
  order: 5
---

A series passes through the same phases whatever it is written on.

## Creation

A series is listed with its underlying, strike, expiry, collateral class and settlement
configuration. All of them are fixed at this point and none can be edited afterwards.

The strike is placed on a grid: admissible strikes are a reference mark times integer
powers of a ratio $g$. The grid is venue policy rather than a solvency rule. It bounds how
far liquidity fragments across strikes, and the ratio wants calibrating per underlying,
since a rung that is sensible on a volatile asset is far too coarse on a quiet one.

A seed minimum is locked as liquidity at creation, so a listed series is never an empty
market.

## Minting open

From creation until expiry, anybody may mint pairs and anybody may merge them. This is the
phase in which the two legs trade and in which the parity relation is enforced by the
freedom to do both.

## The trading cutoff

The canonical market stops quoting at $T - \delta$, shortly before expiry. Near expiry the
option leg becomes close to a step function around the strike, and a passive quote near
expiry is adversely selected by anyone who can see the strike being crossed.

The cutoff is a venue rule. It does not touch sampling, which reads a different venue, and
it does not stop minting or merging. It does mean there is no market between the cutoff
and expiry, which is a consequence holders should know about before they need to exit.

## The sampling window

The window opens at $T - W$ and closes at expiry. Samples may be recorded inside it and at
no other time. [Settlement](/docs/options/settlement/) covers what a valid sample is and how
many are needed.

## Settlement and redemption

At expiry the window closes. If the series holds enough valid samples it can be finalised,
which fixes the settlement value permanently. Each leg then redeems independently for its
share of the deposit.

If it does not hold enough samples, it does not settle, and merge remains available exactly
as it was before. A series can fail to settle, and a matched pair is unaffected when it
does.
