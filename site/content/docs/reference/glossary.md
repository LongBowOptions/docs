---
title: Glossary
description: Every term these pages use, defined once.
sidebar:
  order: 1
---

**Arbiter.** The role that can set a value on a series that cannot settle on its own
evidence, after a grace period. The arbiter is a trusted party and is reachable only while
the oracle cannot finalise.

**Asset.** The ERC-20 a series is written on. An ordinary token with no behaviour of its
own.

**Cash.** The dollar stablecoin a series is quoted in. Also an ordinary token.

**Call series.** A series secured in the asset. One deposit is one unit of the underlying.

**Cutoff.** The point before expiry at which the canonical market stops quoting, written
$T - \delta$. A venue rule, not a protocol one.

**Deposit.** One unit of whatever secures the series: one unit of the asset on a call
series, $S$ in cash on a put series. Every quantity on these pages is counted in deposits.

**Depth floor.** The venue depth below which a sample is discarded rather than recorded,
written $L$.

**Kernel.** The function that splits a deposit, $\kappa(a, b) = \min(1, a / b)$. The
denominator is the numeraire the series is secured in.

**Leg.** One of the two claims a deposit splits into. Both are ERC-6909 balances, named
`OPTION` and `NOTE` in the contracts.

**Merge.** Handing back one of each leg for one deposit. Available at any time, with no
oracle involved.

**Mint.** Posting one deposit for one of each leg. Available until expiry.

**Note leg.** The residual claim, written $N$. It pays like a covered call on a call series
and like a cash secured put on a put series without being either, and it carries the full
downside below the strike.

**Option leg.** The claim that is the option, written $O$. Always computed as one minus the
note leg's share, never independently.

**Put series.** A series secured in cash. One deposit is $S$ in cash.

**Redeem.** Handing back one leg, after settlement, for its share of the deposit.

**Sampler.** An address permitted to record samples. Sampling is permissionless unless a
series restricts recording to a named set, fixed at creation.

**Series.** The unit everything else is said about: one underlying, one strike, one expiry,
one settlement configuration and one collateral class. Immutable once created.

**Settle.** Finalising an expired series' oracle, which fixes its settlement value
permanently. Permissionless, and it may be called once.

**Settlement value.** The number both legs redeem against, written $x_T$. The median of the
valid samples recorded across the window.

**Strike.** The price at which the deposit is split, written $S$.

**Window.** The interval $[T - W, T]$ in which samples may be recorded, and at no other
time.
