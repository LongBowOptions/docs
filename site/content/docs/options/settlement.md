---
title: Settlement
description: The window, the spacing, the depth floor, the count, and the median they feed.
sidebar:
  order: 6
---

A series settles on one number, and every leg redeems against it. That number is the
median of spaced samples drawn from an on-chain venue across a window that closes at
expiry.

## What a valid sample is

A sample is a price read from the venue and recorded against the series. Four rules decide
whether it counts.

**The window.** A sample may be recorded in $[T - W, T]$ and at no other time.

**The spacing.** Two samples must be at least $u$ apart. Spacing is enforced per series,
which is what forces the window to be covered rather than filled inside a single block.

**The depth floor.** A sample drawn from a venue thinner than $L$ is discarded rather than
recorded. A thin venue is cheap to push, so a price read off one is not evidence.

**The cap and the count.** A series holds at most $B$ samples, which bounds the one time
sort. It needs at least $c$ of them before it can settle at all.

## Why a median

An average moves with one print in proportion to its size. A median moves only for someone
who controls more than half the samples, which means holding a false price across most of
the window while anyone who can see it trades against them.

That is the property the design is bought with, and it is a cost rather than an
impossibility. A well funded party can move a sampled median. The spacing rule and the
depth floor raise what that costs, and neither makes it unavailable.

## Who records samples

By default, sampling is permissionless. Anybody may record a valid sample, which means it
is nobody's duty rather than everybody's, and a series nobody samples is a series that
does not settle.

A series may instead be configured so that it restricts recording to a named set, fixed at
creation. This swaps nobody's duty for somebody's, and the set cannot be added to once the
series exists. If that set stops recording, the series has no other route to a settlement
value on its own evidence.

## When a series does not settle

A series can fail to settle. If the window closes below the minimum count, there is no
settlement value, no leg redeems, and merge is what remains. A matched pair recovers its
deposit at par whether or not settlement ever happens.

## The arbiter

For a series that genuinely cannot settle on its own evidence, an arbiter can set a value
on a series after a grace period has elapsed. The arbiter is a trusted party. It is
reachable only while the oracle cannot finalise, so it has no power over a series that has
cleared its count.

This is the largest trusted component in the design and it is named as one rather than
described around.
