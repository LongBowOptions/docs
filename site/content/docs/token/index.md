---
title: $LONG Summary
description: What the token is, the two ways to get it, and what the fees do.
sidebar:
  order: 3
---

## What it is

\$LONG is an experimental token that leverages Longbow Options. There is a fixed supply of one billion, and
none of it was handed out. No team allocation, no investor round, no advisors, no
reserve. Everybody gets it the same two ways.

## How to get it

### 1. Buy it from the pool

A pool holds half the supply and sells it for ETH. Anybody, any amount, any time. No
allowlist, no queue, no phase.

The price is not fixed. It climbs as tokens sell along the curve.

The ETH stays in the pool. Nobody withdraws it, because LP tokens are locked on launch.

### 2. Buy some call options

The other half of the supply is locked behind a set of LongBow options call ladder. You can
buy the right to some of those tokens if the price gets high enough up in a certain time.

- **16 price targets**, each 25% above the one below it.
- **30 expiration dates** one every 3 days, ending 90 days after launch.
- **You pay by burning \$LONG.** It is the only way to buy one at issuance, and the tokens
  you spend are destroyed rather than paid to a seller.
- On the date, if the price is above the strike, you get tokens, and more the higher \$LONG price increases. This payout is determined by LongBow synthetic options math and is the same as a call option, but paid in \$LONG.
- If the price is below the strike at expire, option is worthless.

What each rung costs a starting price and increases as more people buy them. Options can't be sold back into the curve

## The fees

There are three, and all of them do the same thing: **buy \$LONG and burn it.**

| Fee | What it costs | When it is charged |
| --- | --- | --- |
| Pool fee | 1% of a swap | Every trade in the main pool |
| Launch fee | Up to 80%, falling fast | The first day only |

Fees generated are used for:
 - $LONG buybacks
 - Protocol development
 - Audits
 - Liquidity for Crypto and RWA options

## If you are thinking about launch day

In order to give a fair chance of getting available call options. The open penalize snipers in two overlapping ways:

- **A clock:** The fee starts at 80% and falls to the ordinary 1% over 24 hours.
- **A ladder:** The lower in the market cap ladder higher the fee. Fee starts at 80% at 2k MCAP falling to 1% at 200k MCAP.

The fee is the higher of both values, after launch stage has passed the fee stays at 1% forever.

## Future

Possible next steps to generate more value to $LONG would be:

- Options on crypto, RWAs and memecoins, with the fees accruing to \$LONG.
- A launchpad for the option token mechanism, with the fees accruing to \$LONG.

## Disclaimer

This is an experimental token. None of this
is financial advice, and nothing here is a promise about future gains.
