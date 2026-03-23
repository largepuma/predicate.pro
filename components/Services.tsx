const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Services() {
  return (
    <section id="services">
      <div className="section-header">
        <p className="section-label">What We Do</p>
        <h2 className="section-title">Three ways AI earns its keep —<br />managed, productized, and integrated.</h2>
      </div>

      <div className="services-grid">

        {/* Managed AI Agents — Featured */}
        <div className="service-card service-featured">
          <div>
            <span className="product-badge badge-live">Now Available</span>
            <span className="product-icon">🤖</span>
            <h3 className="product-name">Managed AI Agents</h3>
            <p className="product-tagline">
              Most AI tools require setup, configuration, and ongoing maintenance. Ours don&apos;t.
              We deploy a 24/7 AI agent connected to WhatsApp, Telegram, or Discord — and keep it
              running, updated, and optimized. Hands-free, from day one.
            </p>
            <div className="service-tags">
              <span className="service-tag">24/7 Active</span>
              <span className="service-tag">Zero Setup</span>
              <span className="service-tag">Persistent Memory</span>
              <span className="service-tag">Autonomous Tasks</span>
            </div>
            <a href="mailto:contact@predicate.pro" className="product-cta">
              Deploy Your Agent
              <ArrowIcon />
            </a>
          </div>

          <div className="service-visual">
            <div className="chat-preview">
              <div className="chat-app-bar">
                <span className="chat-dot"></span>
                <span className="chat-app-name">Your AI Agent</span>
                <span className="chat-status">● Active</span>
              </div>
              <div className="chat-messages">
                <div className="chat-msg msg-ai">✓ Replied to 14 customer reviews &mdash; 2m ago</div>
                <div className="chat-msg msg-ai">✓ Weekly sales summary ready &mdash; 1h ago</div>
                <div className="chat-msg msg-user">What&apos;s my top-performing product this week?</div>
                <div className="chat-msg msg-ai">Product A at $4.2k — up 18% vs last week. Want the full breakdown?</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical AI Products */}
        <div className="service-card">
          <span className="product-icon">📦</span>
          <h3 className="product-name">Vertical AI Products</h3>
          <p className="product-tagline">
            Not generic AI — purpose-built tools for specific industries and workflows.
            We identify where AI earns real ROI and ship products that do exactly that job.
          </p>
          <a href="#products" className="service-link">
            See Our Products <ArrowIcon />
          </a>
        </div>

        {/* AI Integration */}
        <div className="service-card">
          <span className="product-icon">🔗</span>
          <h3 className="product-name">AI Integration Services</h3>
          <p className="product-tagline">
            Already have a stack? We bring AI into it — custom, clean, and built to last.
            No ripping out what works. Just making it smarter.
          </p>
          <a href="mailto:contact@predicate.pro" className="service-link">
            Talk to Us <ArrowIcon />
          </a>
        </div>

      </div>
    </section>
  )
}
