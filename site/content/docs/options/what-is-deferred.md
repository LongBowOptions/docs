---
title: What is deferred
description: What exists, what does not, and what has not been decided.
sidebar:
  order: 12
---

This page separates what has been built from what has been argued for.

## Status of the code

The contracts are **not audited**. No third party has reviewed them, and the test suite,
however thorough, is written by the same people who wrote the code it tests.

Parts of the system on these pages are described rather than built. Where documentation
covers a mechanism, that is a statement about the design and not a claim that a deployed
contract implements it today.

## The regulatory position

The regulatory position is not settled. Nothing here is an offer, and nothing here is
advice. How these instruments are characterised, and in which jurisdictions, is an open
question that this documentation does not attempt to answer.

## What has not been decided

**Parameter calibration.** The strike grid ratio, the window, the spacing, the depth floor
and the minimum count all want setting per underlying rather than once for the protocol.
[Parameters](/docs/options/parameters/) lists them and says what each one trades off.

**Venue policy.** Which series are listed, on what, and with what settlement configuration
is a policy question rather than a property of the escrow.

**The token.** \$LONG has a published design and no implementation. The ladder is built out
of this primitive and needs nothing new from it, but the pool, the hook and the fee path
are described rather than built. See [what \$LONG is](/docs/token/).

## What is not deferred

The escrow's solvency argument, the four operations, the kernel and the parity identity are
the parts the design rests on, and none of them is provisional. If any of those changed,
this would be a different protocol rather than a later version of this one.
