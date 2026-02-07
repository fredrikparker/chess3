# Partner Documentation Reference

This file contains aggregated context for partner technologies, sourced from their `llms.txt` or documentation summaries.

---

## 🟡 Yellow Network
**Source:** [docs.yellow.org](https://docs.yellow.org/docs/learn)

### Core Concepts
- **Problem Solved:** Scaling, cost, and speed for high-frequency applications using state channels.
- **Architecture:** Three protocol layers (on-chain, off-chain, application).
- **State Channels:** Enable off-chain transactions with on-chain settlement. Contrast with L1/L2 (scaling execution vs. data).
- **App Sessions:** Multi-party application channels with custom governance and state management.
- **Session Keys:** Delegated keys for secure, gasless interactions.
- **Challenge-Response:** Dispute resolution mechanism to ensure funds are recoverable.

### Getting Started
- **Quickstart:** Create a state channel, off-chain transfer, verify (~10 mins).
- **SDK:** Nitrolite SDK (Node.js/TypeScript).

### Links
- [Build - Quick Start](https://docs.yellow.org/docs/build/quick-start)
- [Protocol Reference](https://docs.yellow.org/docs/protocol/introduction)

---

## 🦄 Uniswap
**Source:** [docs.uniswap.org/llms.txt](https://docs.uniswap.org/llms.txt)

### Overview
Uniswap is a decentralized exchange protocol using an AMM model. v4 is the latest version.

### Structure
- **/concepts/**: Protocol overview, AMMs, Liquidity Provision.
- **/contracts/**: v4 (latest), v3 (concentrated liquidity), v2 (legacy).
- **/sdk/**: v4-SDK, v3-SDK.
- **/api/**: Subgraph (GraphQL), Routing API.

### Technical Details
- **Smart Contracts (v4):** Singleton design, Hooks (custom logic), Flash Accounting.
- **Integration Patterns:** Direct contract calls, SDK (frontend), Subgraph (data).
- **Common Use Cases:** DeFi protocols, Wallet swaps, Arbitrage bots.

### Resources
- [Uniswap v4 Docs](https://docs.uniswap.org/contracts/v4/overview)
- [Uniswap Builder Toolkit](https://uniswaplabs.notion.site/hackmoney)

---

## 💧 Sui
**Source:** [docs.sui.io/llms.txt](https://docs.sui.io/llms.txt)

### Overview
Sui is a smart contract platform with high throughput, low latency, and asset-oriented Move programming.

### Key Concepts
- **Objects:** Basic unit of storage. Assets are objects.
- **Move:** Programming language. Safe, expressive.
- **PTB (Programmable Transaction Blocks):** Chain multiple transactions in one request.
- **Sui Kiosk:** Decentralized commerce/marketplace standard.
- **DeepBook:** Central limit order book (CLOB) primitive.

### Standards
- **Coin:** Fungible tokens.
- **Closed-Loop Token:** Restricted tokens.
- **Kiosk:** NFT commerce.
- **Wallet Standard:** App-wallet interaction.

### Getting Started
- Obtain SUI from Faucet (Devnet/Testnet).
- Install Sui Binaries.
- Create a Move Package ("Hello World").

---

## ⭕ Arc
**Source:** [docs.arc.network/llms.txt](https://docs.arc.network/llms.txt)

### System Overview
- **Consensus:** Malachite (Tendermint-based PoA).
- **Execution:** Reth-based EVM compatible.
- **Finality:** Deterministic, sub-second.
- **Gas:** USDC is used as gas. Stable fee design.

### Key Features
- **Opt-in Privacy:** Confidential on-chain transactions.
- **EVM Compatibility:** Deploy Solidity contracts easily.
- **Account Abstraction:** SDKs and paymasters accepted.

### Developer Tools
- **Circle Gateway:** Bridging USDC.
- **Circle Wallets:** Programmable wallets.
- **Contract Addresses:** Testnet addresses available in docs.

### Tutorials
- Deploy contracts (Solidity).
- Transfer USDC/EURC.
- Bridge USDC to Arc via CCTP.

---

## 🦎 LI.FI
**Source:** [docs.li.fi/llms.txt](https://docs.li.fi/llms.txt)

### Overview
Multi-chain liquidity aggregation protocol (Bridge + DEX aggregator).

### API Endpoints (Base: `https://li.quest/v1`)
1.  **GET /quote**: Get transfer quote (transactionRequest, estimate). **Most Important**.
2.  **GET /status**: Check transfer status (PENDING, DONE, FAILED).
3.  **GET /chains**: List supported chains.
4.  **GET /tokens**: List supported tokens.
5.  **GET /tools**: List bridges and DEXs.

### Products
- **API:** REST API for quotes and status.
- **SDK:** Javascript/TypeScript (`@lifi/sdk`).
- **Widget:** Embeddable UI component (`@lifi/widget`).

### Integration
- **Flow:** Get Quote -> Sign Transaction -> Execute -> Track Status.

---

## 🏷️ ENS
**Source:** [docs.ens.domains/llms.txt](https://docs.ens.domains/llms.txt)

### Concepts
- **Name Wrapper:** Tokenizes names (ERC-1155). Handles fuses (permissions) and expiry.
- **Resolver:** Smart contract that stores records (Addr, Text, ContentHash).
- **Registry:** Root contract reducing names to owners and resolvers.
- **Subnames:** Can be issued/sold.

### Development
- **Libraries:** wagmi, viem, ethers.js support.
- **SIWE:** Sign-In with Ethereum integration.
- **CCIP Read:** Off-chain/L2 resolution (e.g., store records on L2).
- **DNS Import:** Use DNS names on ENS.

### Key Records
- **Text Records:** "Digital backpack" (socials, descriptions).
- **Avatars:** Profile pictures.
- **Address Lookup/Reverse Resolution:** Name <-> Address.
