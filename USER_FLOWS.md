# User Flows

## 1. Game Creation & Joining (MVP)
This flow describes how a user starts a match in the MVP version (no lobby, direct link).

```mermaid
sequenceDiagram
    participant P1 as Player 1 (Creator)
    participant SYS as System (Next.js)
    participant P2 as Player 2 (Joiner)

    P1->>SYS: Clicks "Enter Arena"
    SYS->>SYS: Generates Match ID (e.g. "abc12")
    SYS-->>P1: Redirects to /match/abc12
    P1->>P1: Shares URL with P2
    P2->>SYS: Navigates to /match/abc12
    SYS-->>P2: Loads Match Interface
    SYS->>SYS: Initializes Board & State
```

## 2. Move Execution (Optimistic UI)
This flow details the optimistic update strategy to ensure lag-free experience.

```mermaid
sequenceDiagram
    participant P as Player
    participant UI as UI (Board Component)
    participant STORE as Game Store (Zustand)
    participant VAL as Validator (Chess.js)

    P->>UI: Drops Piece (e2 -> e4)
    UI->>STORE: makeMove({from: 'e2', to: 'e4'})
    STORE->>VAL: Validate Move
    alt Move Valid
        VAL-->>STORE: Returns Result
        STORE->>STORE: Update FEN, Turn, History
        STORE-->>UI: Trigger Re-render (Optimistic)
        Note over UI: Board updates instantly
        STORE->>SYS: Broadcast Move (Future Integration)
    else Move Invalid
        VAL-->>STORE: Returns False
        STORE-->>UI: No Change / Snapback
    end
```

## 3. Game Settlement (Planned)
How the game concludes and funds are settled.

```mermaid
stateDiagram-v2
    [*] --> Active
    Active --> Checkmate: King captured
    Active --> Draw: Stalemate/Repetition
    Active --> Resignation: Player forfeits
    
    Checkmate --> Settlement
    Resignation --> Settlement
    Draw --> Refund/Split
    
    Settlement --> [*]: Funds Released
```
