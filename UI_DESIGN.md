# UI Design & Component Architecture

## Design Philosophy
"Chess.com Lite" - Centered, focused, and distraction-free. The board is the protagonist.
**"Quiet-Premium"** aesthetics: Dark backgrounds (#0B0D10), Gold accents (#B08B4F), subtle borders.

## Layout Strategy
**Centered Stage Layout** (vs. Full-width Dashboard).

-   **Global Container:** `min-h-screen bg-background text-foreground flex flex-col items-center`
-   **Content Wrapper:** `w-full max-w-[1400px] px-6 lg:px-12 flex-1 flex flex-col`

### The "Arena" (Match View)
A three-column grid, but optically centered with heavy focus on the middle.

-   **Grid:** `grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 h-[calc(100vh-80px)] items-center`
    -   *Note: On mobile, this stacks vertically.*

#### 1. Left Panel (Context - Collapsible/Minimal)
-   **Content:** Global Chat (optional), Spectator list, or Navigation.
-   **State:** Often minimized during play to reduce noise.
-   **Style:** `w-64 hidden xl:block opacity-50 hover:opacity-100 transition-opacity`

#### 2. Center Stage (The Board)
Everything here is critical. No clutter.
-   **Wrapper:** `flex flex-col gap-2`
-   **Top Bar (Opponent):**
    -   `Avatar` + `Name` + `Rating` (Left)
    -   `Badge` (Captures) (Right)
    -   **Timer:** Large, high-contrast digital clock. `bg-card border border-white/10 px-4 py-2 rounded font-mono text-2xl`
-   **The Board:**
    -   Aspect Ratio 1:1.
    -   Maximized usage of vertical space (up to ~80vh).
    -   `shadow-2xl` + `border-none`.
-   **Bottom Bar (Player - You):**
    -   Matching layout to Top Bar.

#### 3. Right Panel (Tools & Wagers)
The functional cockpit.
-   **Container:** `w-[400px] h-[80vh] flex flex-col bg-card rounded-lg border border-white/5`
-   **Tabs:**
    -   **Play/Wager:** Controls for session, betting, stakes.
    -   **Moves:** Compact history list.
    -   **Chat:** Session chat.
-   **Wager View (Default):**
    -   Clear inputs for USDC amount.
    -   Big Gold "Place Bet" button.
    -   Live pot display.

---

## Component Mapping (shadcn/ui)
-   **Global Font:** `Inter` (UI), `Space Grotesk` (Headings).
-   **Buttons:** `Button` (Gold variant for Primary Actions).
-   **Panels:** `Card` (modified for minimal borders).
-   **Inputs:** `Input` (Gold focus ring).
-   **Dialogs:** `Dialog` (Wallet, Deposit).
-   **Tabs:** `Tabs` (Underline or Segmented).

---

## 🚀 Performance & Robustness Strategy
To achieve "Robust, Quick, Lag-free" performance:

### 1. Optimistic UI (The "Instant" Feel)
-   **Action:** When a user drags/clicks a piece, the piece moves **instantly** on their screen.
-   **Validation:** `chess.js` validates strictly on the client-side before sending.
-   **Sync:** The move is sent to the server (Yellow/mock) *after* the visual update.
-   **Rollback:** If the server rejects it (0.1% case), the board snaps back with a "haptic" shake animation.

### 2. Tech Stack for Speed
-   **Logic:** `chess.js` (Lightweight, standard compliant).
-   **Rendering:** `react-chessboard` (SVG-based, highly optimized DOM diffing) OR custom Canvas if DOM gets heavy (unlikely for 2D).
-   **State:** `zustand` (Transient updates outside React render cycle where possible for timers).

### 3. Network Optimization
-   **WebSockets:** Use `socket.io` (or Ably for serverless reliability) for move streaming.
-   **Edge Locations:** Deploy Next.js to Edge to minimize TTFB (Time to First Byte).

### 4. Lag Prevention
-   **No blocking operations:** Move validation is sync (CPU), network is async.
-   **Asset Preloading:** Preload piece SVGs `onMouseEnter` of the "Play" button.
