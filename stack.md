# Tech Stack & Integrations

## Core Tracks (Confirmed)
These integrations are central to the product MVP.

### 🟡 Yellow Network
- **Role:** High-speed off-chain game sessions.
- **Usage:** Players open a State Channel -> Stream moves -> Settle final result.
- **Justification:** "Instant Chess" requires sub-second moves without gas fees.

### 💧 Sui
- **Role:** Settlement & Object State.
- **Usage:** Game results settle to Sui. User assets (NFTs, Profile Stats) stored as Sui Objects.
- **Justification:** High throughput, low latency, and object-oriented model fits "Game State" perfectly.

### 🏷️ ENS
- **Role:** Identity & Social Layer.
- **Usage:** User profiles, avatars, and readable names.
- **Justification:** Essential for social gaming and "premium" feel.

### 🦄 Uniswap (Restored)
- **Role:** Liquidity / Swaps.
- **Usage:** Optional integration for token bridging or custom hooks.
- **Justification:** Kept for potential bonus points and future DeFi features.

---

## Proposed Additions
Pending user approval.

### ⭕ Arc (High Rec.)
- **Role:** UX Optimization / Payment Rail.
- **Argument:**
  1.  **USDC as Gas:** Removes the most painful friction for casual users (needing direct gas tokens).
  2.  **Performance:** Deterministic sub-second finality matches our "Instant" brand promise.
  3.  **Premium Feel:** Focused "App-Chain" vibe aligns with high-end UI goals.

### 🦎 LI.FI (Medium Rec.)
- **Role:** Onboarding / Deposits.
- **Argument:**
  1.  **Fund Access:** Users likely have USDC on Arb/Base/Poly.
  2.  **Low Lift:** The Widget is a "drop-in" solution for the Deposit modal.
  3.  **Utility:** Solves the "how do I bet?" problem immediately.
