---
title: Parameters
description: Every value a series is configured with, and what each one trades off.
sidebar:
  order: 10
---

A series fixes all of these at creation and none of them can be edited afterwards.

## Series definition

| Symbol | Meaning |
| --- | --- |
| $S$ | Strike. Placed on the grid at creation. |
| $T$ | Expiry. Minting stops here and the sampling window closes here. |
| $M$ | Seed minimum. The smallest deposit that may create a series, locked as liquidity until the cutoff. |
| $g$ | Ratio of the strike grid. Admissible strikes are the reference mark times integer powers of $g$. |

The grid is venue policy rather than a solvency rule, and it is not enforced on chain. It
bounds how far liquidity fragments across strikes. The ratio wants calibrating per
underlying: a rung that is a reasonable step on a volatile asset puts consecutive strikes
nowhere near the money on a quiet one.

## Settlement configuration

| Symbol | Meaning | Trade-off |
| --- | --- | --- |
| $W$ | Length of the sampling window, ending at $T$. | Longer windows are more expensive to hold a false price across, and delay nothing, since the window closes at expiry either way. |
| $u$ | Minimum spacing between two recorded samples. | Larger spacing forces the window to be covered rather than filled in one block. Too large and a series struggles to reach its count. |
| $c$ | Minimum samples before the series can settle. | Higher raises an attacker's threshold and raises the chance the series does not settle at all. |
| $L$ | Depth floor. Samples from a venue thinner than this are discarded. | Higher rejects more manipulable prints and more honest ones. |
| $B$ | Sample cap. | Bounds the one time sort, and with it the count anyone can raise the threshold to. |
| $\delta$ | Trading cutoff, before expiry. | Longer protects quotes from adverse selection and lengthens the period with no market. |

## Contract constants

Two of these are fixed in `SampledMedianOracle` rather than configured per series:
`MAX_SAMPLES` is 128, which is the ceiling on $B$, and `MIN_COUNT` is 2, which is the floor
under $c$. A series configuration outside those bounds is rejected at creation.

## Modelling assumptions

The interest rate is taken as zero throughout, so a series carries no cost of carry on
either collateral class and moneyness is read against spot rather than against a forward.

A volatility appears only in figures that draw a premium. The protocol computes no option
value at any point, so nothing in the design turns on what it is.
