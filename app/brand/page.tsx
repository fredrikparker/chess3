import Link from "next/link";

export default function BrandPage() {
  return (
    <main className="brand-page">
      <header>
        <div className="label">Brand guidelines</div>
        <h1 className="brand-title">chess3.xyz</h1>
        <p className="brand-lead">
          Quiet-premium, classical, gamified. Dark base with subtle grid. Gold is
          split between buttons and text accents.
        </p>
        <div className="actions" style={{ marginTop: 12 }}>
          <Link className="btn" href="/">
            Back to MVP
          </Link>
        </div>
      </header>

      <section className="brand-grid">
        <div className="brand-card">
          <div className="panel-title">Colors</div>
          <div className="brand-item"><strong>Background</strong><span>#0B0D10</span></div>
          <div className="brand-item"><strong>Surface</strong><span>#12151A</span></div>
          <div className="brand-item"><strong>Primary text</strong><span>#E4DED4</span></div>
          <div className="brand-item"><strong>Muted text</strong><span>#A7A094</span></div>
          <div className="brand-item"><strong>Gold (buttons)</strong><span>#B08B4F</span></div>
          <div className="brand-item"><strong>Gold (text)</strong><span>#C7A96B</span></div>
        </div>

        <div className="brand-card">
          <div className="panel-title">Typography</div>
          <div className="brand-item"><strong>Handwritten</strong><span>Caveat 600</span></div>
          <div className="brand-item"><strong>Caps</strong><span>Space Grotesk 600</span></div>
          <div className="brand-item"><strong>Body</strong><span>Inter 400/600</span></div>
        </div>

        <div className="brand-card">
          <div className="panel-title">Buttons</div>
          <div className="brand-item"><strong>Size</strong><span>12px, 6x10</span></div>
          <div className="brand-item"><strong>Radius</strong><span>4px</span></div>
          <div className="brand-item"><strong>Primary</strong><span>Gold</span></div>
          <div className="brand-item"><strong>Light</strong><span>Grey</span></div>
        </div>
      </section>

      <section className="brand-card">
        <div className="panel-title">Voice</div>
        <p className="brand-lead">
          Short, deliberate sentences. No hype. Emphasize speed, fairness, and
          reward loops.
        </p>
      </section>
    </main>
  );
}
