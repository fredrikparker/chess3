# Architecture

## Overview
Phase 1 is a UI-only MVP built with Next.js. Flows are mocked to demonstrate the full product loop. Phase 2 adds Yellow, ENS, and Arc/Circle integrations. Phase 3 adds Sui.

## Components (Phase 1)
- Next.js UI (App Router)
- Static mock data for session, moves, wagers, tips, and goals

## Components (Phase 2+)
- Yellow session orchestrator
- Ethereum L2 escrow and settlement contracts
- ENS resolver
- Arc/Circle USDC rails

## Key Flows (Target)
- Create match -> open Yellow session -> escrow USDC -> stream moves -> settle
- Spectator mini-bets -> settle with match result
- Goal staking -> commitment tracking -> settlement
