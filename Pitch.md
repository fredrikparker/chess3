# chess3.xyz — HackMoney 2026 One‑Pager

## One‑line
chess3.xyz is an instant, session‑based chess arena where players stake USDC, play in real time, and settle on‑chain.

## Problem
Online chess is fast, social, and competitive—but the rewards and economics are stuck off‑chain. Wagers, tipping, and subscriptions are either absent or clunky, and on‑chain play is too slow/expensive for every move.

## Solution
Use Yellow state‑channel sessions for instant, gasless move updates and micro‑bets; settle outcomes on‑chain. ENS handles identity; Arc/Circle provides USDC rails. The UX feels like web2 speed with web3 settlement.

## Why Now
Stablecoin UX and state‑channel primitives are mature enough to make real‑time games viable without sacrificing trust or cost.

## MVP Demo Flow
Connect wallet → ENS identity → open match session → stake USDC → play live moves (off‑chain) → settle result on‑chain → spectator tips/mini‑bets → payout.

## Tech Stack (MVP)
- **Yellow SDK / Nitrolite** for session channels and off‑chain state updates
- **Ethereum L2** for settlement
- **ENS** for identity and profile resolution
- **Arc/Circle** for USDC deposits/payouts

## Differentiation
- Instant play with real stakes (no per‑move gas)
- Built‑in reward loops (wagers, tips, subscriptions)
- Quiet‑premium UX for competitive players

## Phase 2
- Sui‑native escrow + PTB payouts
- Daily goal staking pools
- Expanded creator economy

## Ask
- Yellow track: show session‑based, gasless moves + settlement
- ENS track: identity and payouts
- Arc/Circle: USDC rails
