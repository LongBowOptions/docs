---
title: Why nothing can go insolvent
description: What a wrong settlement value can and cannot do to the collateral.
sidebar:
  order: 8
---

The solvency argument is short, which is the point of the construction.

## The argument

One deposit enters the escrow for every pair minted. The two legs receive shares that sum
to one deposit at any settlement value whatever, because one share is defined as one minus
the other. Redemption pays those shares out of the deposit that was posted against them.

So the escrow holds what it owes however the price turns out. There is no interest rate, no
funding and no rehypothecation. Nothing is pooled across series, and one series cannot draw
on another's collateral.

## What a wrong price does

A settlement value that is wrong moves value between the two legs of one series. It cannot
make the escrow short.

This is worth stating precisely, because it is the difference between an oracle failure
that costs identifiable people a known amount and an oracle failure that opens a hole
somebody else has to fill. A pushed median transfers deposit share from one leg to the
other inside a single series. Every other series is untouched, and the total collateral
held is unchanged.

That is not a defence of a wrong price. It is a bound on the blast radius of one.

## Rounding

Every redemption floors. The remainder stays in the escrow rather than being paid out
twice, so a series can only ever end with a surplus and never with a shortfall. The
invariant the tests assert is not that the two shares sum to one, which is trivial, but
that no interleaving of the four operations, with floor rounding on every redemption, can
leave the escrow short.

## What this does not cover

Solvency is an arithmetic property of the escrow. It says nothing about what a leg is
worth, whether anybody will buy it, or whether the collateral token itself behaves. The
escrow holds balances and assumes they stay put. A collateral token with an administrator
who can move or freeze balances breaks that assumption from outside, which is why
only plain tokens can be listed.
