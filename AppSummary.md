# chess3.xyz — App Summary

## Overview
chess3.xyz is a session-based chess arena where players stake USDC, play in real time, and settle results on-chain. The MVP is a UI-first demo for HackMoney 2026 with mocked integrations and a clear end-to-end flow.

## Core Experience
- Connect wallet (mock) and open a match session
- Stake USDC (mock) and play a live game
- Settle outcome on-chain (mocked in Phase 1)
- Spectator tips and mini-bets
- Optional goal staking and creator subscriptions

## Product Phases
- Phase 1: UI MVP with full flow and screens (mocked integrations)
- Phase 2: Yellow sessions, ENS identity, Arc/Circle USDC rails
- Phase 3: Sui expansion with native escrow + PTB settlement

## Target Users
- Competitive online chess players seeking real rewards
- Spectators who tip or place micro-bets
- Creators who monetize lessons/content via subscriptions

## Technical Architecture (MVP)
- Web client for match UI, move log, and spectator panel
- Backend orchestrator to create/manage Yellow sessions
- Ethereum L2 contracts for escrow and settlement
- ENS for identity resolution
- Arc/Circle for USDC deposits and payouts

## Success Criteria (Hackathon)
- End-to-end UI demo with coherent user flow
- Goal staking screen included
- Clear narrative for wager → play → settle → tip/mini-bet
