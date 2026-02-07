# chess3.xyz — Technical Architecture (MVP)

## Overview
The MVP prioritizes instant play and clean settlement. Moves and micro‑bets are exchanged off‑chain inside a Yellow session; final outcomes settle on an Ethereum L2. ENS handles identity resolution; Arc/Circle provides USDC rails.

## Core Components
1. **Web Client**
   - Match UI + move engine
   - Session state viewer
   - Spectator panel (tips + mini‑bets)

2. **Session Orchestrator (Backend)**
   - Creates Yellow sessions
   - Validates players/spectators
   - Tracks session state hash for settlement

3. **On‑chain Contracts (Ethereum L2)**
   - Wager escrow contract
   - Settlement contract (winner, payout, fees)

4. **Identity & Payments**
   - ENS resolver (names → addresses)
   - Arc/Circle USDC rails (deposits/withdrawals)

## Key Flows
### 1) Match Session
- Player A creates match → backend opens Yellow session → both players join → USDC escrow on L2.

### 2) Move Streaming
- Moves exchanged inside Yellow session (off‑chain).
- Each move updates session state hash.

### 3) Settlement
- When match ends, final state hash + result signed.
- Settlement contract releases USDC to winner and fees to protocol.

### 4) Spectator Mini‑Market
- Spectators place off‑chain micro‑bets in session.
- Outcome settles on‑chain with match result.

## Sequence Diagrams (Text)
### A) Match Session + Settlement
1. Player A → Web Client: Create match
2. Web Client → Orchestrator: Request session
3. Orchestrator → Yellow: Create session
4. Yellow → Orchestrator: Session ID
5. Orchestrator → Players: Join session
6. Players → L2 Contract: Escrow USDC
7. Players → Yellow: Stream moves
8. Players → Orchestrator: Final result + signatures
9. Orchestrator → L2 Contract: Settle
10. L2 Contract → Players: Payouts

### B) Spectator Mini‑Bet
1. Spectator → Web Client: Place mini‑bet
2. Web Client → Yellow: Add session bet
3. Orchestrator → L2 Contract: Settle bet at match end

## Data & Storage
- Session states: off‑chain (Yellow)
- Match receipts: on‑chain (L2)
- Player profile: ENS + minimal off‑chain metadata

## Security Considerations (MVP)
- Session‑bound signing for moves
- Explicit match finalization with signatures from both players
- Timeouts + default settlement if a player disconnects

