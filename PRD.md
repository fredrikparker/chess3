# Product Requirements

## Summary
chess3.xyz is an instant, session-based chess arena where players stake USDC, play in real time, and settle on-chain. Phase 1 is a UI-first MVP on Ethereum L2 with mocked flows. Phase 2 adds Yellow, ENS, and Arc/Circle integrations. Phase 3 expands to Sui.

## Goals
- Deliver a working HackMoney 2026 UI MVP with clear user flows.
- Demonstrate the product loop: wager, play, tip, subscribe, commit goals.

## Non-Goals (Phase 1)
- Per-move on-chain writes on Ethereum L1/L2.
- Live SDK integrations (Yellow, ENS, Arc/Circle).
- Advanced anti-cheat or tournament systems.

## Target Users
- Online chess players seeking real rewards.
- Spectators who want to tip or place micro-bets.
- Creators who monetize lessons and content.

## Phase Plan
### Phase 1 - UI MVP (Hackathon)
- UI for session flow, move log, settlement, tipping, and mini-bets.
- Goal staking screens (daily/weekly commitments).
- Creator subscription screens.

### Phase 2 - Integrations
- Yellow session flows for off-chain moves and settlement.
- ENS identity resolution.
- Arc/Circle USDC deposits and payouts.
- Uniswap v4 (Optional/Bonus).

### Phase 3 - Sui Expansion
- Sui-native wager escrow + PTB settlement.
- Daily-goal staking pools.

## Core User Flow (Phase 1)
- Connect wallet (mock) -> open match session -> stake USDC (mock) -> play moves -> settle -> tip/mini-bet -> commit goals.

## Success Criteria (Hackathon)
- End-to-end UI demo with all major screens.
- Clear, coherent user flow and narrative.
- Goal staking screen included.

## Open Questions
- Final Ethereum L2 choice for MVP.
- Anti-abuse mechanics for micro-bets at scale.
