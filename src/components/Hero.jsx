function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-grid" />

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container hero-container">
        <div className="hero-content">

          <div className="eyebrow">
            <span className="eyebrow-dot" />
            DIGITAL GROWTH AGENCY
          </div>

          <h1>
            Digital growth,
            <br />
            engineered around
            <br />
            <em>your business.</em>
          </h1>

          <p className="hero-description">
            Strategy, technology and performance marketing built around
            business goals — not vanity metrics.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Get a Free Audit
              <span>↗</span>
            </a>

            <a href="#work" className="btn btn-secondary">
              Explore Our Work
              <span>↓</span>
            </a>
          </div>

          <div className="hero-note">
            <span className="note-line" />
            <span>
              SEO · PERFORMANCE · SOCIAL · TECHNOLOGY
            </span>
          </div>

        </div>

        <div className="hero-visual" aria-hidden="true">

          <div className="visual-frame">

            <div className="frame-top">
              <span>GROWTH SYSTEM</span>
              <span>01 — 04</span>
            </div>

            <div className="network">

              <div className="network-line line-one" />
              <div className="network-line line-two" />
              <div className="network-line line-three" />
              <div className="network-line line-four" />

              <div className="network-node node-one">
                <span />
                SEO
              </div>

              <div className="network-node node-two">
                <span />
                DATA
              </div>

              <div className="network-node node-three">
                <span />
                WEB
              </div>

              <div className="network-node node-four">
                <span />
                SOCIAL
              </div>

              <div className="network-core">
                <div className="core-ring" />
                <strong>GROW</strong>
                <small>PERFORMANCE</small>
              </div>

            </div>

            <div className="frame-bottom">
              <span>STRATEGY</span>
              <span className="frame-status">
                <i />
                ACTIVE
              </span>
            </div>

          </div>

          <div className="visual-tag tag-growth">
            <span>01</span>
            <strong>+250%</strong>
            <small>Organic traffic</small>
          </div>

          <div className="visual-tag tag-data">
            <span>02</span>
            <strong>DATA → ACTION</strong>
            <small>Continuous optimization</small>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero