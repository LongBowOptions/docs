---
title: FAQ
description: The questions the design attracts most often.
sidebar:
  order: 2
---

## Is the note leg safe?

No. It pays like a covered call on a call series and like a cash secured put on a put
series without being either, and it carries the full downside below the strike. If the
underlying falls, the note leg falls with it. It is never described as protected anywhere
in this documentation.

## Who is on the other side of my option?

Nobody. No seller writes it. The option leg is carved out of a deposit somebody posted to
mint a pair, and that deposit is the whole of the obligation behind it. Whoever holds the
note leg holds the other share of the same deposit, but they took no obligation and cannot
default.

## What happens if the oracle is wrong?

Value moves between the two legs of that one series. It cannot make the escrow short, and
no other series is affected. That is a bound on the damage rather than a defence of it: a
well funded party can move a sampled median.

## What happens if the series never settles?

A series can fail to settle, and then no leg redeems. Merge still works: one option leg
plus one note leg recovers one deposit at par, at any time, whether or not settlement ever
happens. That exit depends on no oracle, no venue and no operator.

## Can I get my collateral back before expiry?

Yes, if you hold both legs. Merge is available at any time and has no time bound, because a
matched pair is one deposit by construction. If you hold only one leg you must sell it or
wait for settlement.

## Why a median rather than a time weighted average?

An average moves with one print in proportion to its size. A median moves only for someone
who controls more than half the samples, which means holding a false price across most of
the window while anyone who can see it trades against them.

## Why can I not create the series I want?

Series are listed rather than created on demand. Listing is a venue decision, partly
because only plain tokens can be listed and a prospective collateral token's privileged
roles have to be checked before anything is written on it.

## Does the protocol price options?

No. It computes no option value at any point, reads no volatility, and runs no pricing
model. What a leg is worth is whatever the market pays for it. What it redeems for is a
share of one deposit fixed by arithmetic.
