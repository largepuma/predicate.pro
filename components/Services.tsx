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
        <h2 className="section-title">AI services that work —<br />so you don&apos;t have to do all the work yourself.</h2>
      </div>

      <div className="services-grid">

        {/* OpenClaw — Featured */}
        <div className="service-card service-featured">
          <div>
            <span className="product-badge badge-live">Now Available</span>
            <span className="product-icon">🤖</span>
            <h3 className="product-name">OpenClaw, Managed for You</h3>
            <p className="product-tagline">
              OpenClaw is a powerful open-source AI agent — but setting it up takes time and expertise.
              We handle deployment, configuration, and maintenance. You get a 24/7 AI assistant connected
              to WhatsApp, Telegram, or any chat app you already use.
            </p>
            <div className="service-tags">
              <span className="service-tag">24/7 Online</span>
              <span className="service-tag">Chat App Native</span>
              <span className="service-tag">Persistent Memory</span>
              <span className="service-tag">Autonomous Tasks</span>
            </div>
            <a href="mailto:contact@predicate.pro" className="product-cta">
              Get Your OpenClaw Instance
              <ArrowIcon />
            </a>
          </div>

          <div className="service-visual">
            <div className="chat-preview">
              <div className="chat-app-bar">
                <span className="chat-dot"></span>
                <span className="chat-app-name">Your AI Assistant</span>
                <span className="chat-status">● Online</span>
              </div>
              <div className="chat-messages">
                <div className="chat-msg msg-user">Help me draft a reply to this negative review…</div>
                <div className="chat-msg msg-ai">Sure! Here&apos;s a professional response that addresses their concerns and turns it around…</div>
                <div className="chat-msg msg-user">Also summarize my sales report from last week</div>
                <div className="chat-msg msg-ai">Revenue was up 12% week-over-week. Top performer: Product A at $4.2k. Shall I send the full breakdown?</div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom AI Tools */}
        <div className="service-card">
          <span className="product-icon">🛠</span>
          <h3 className="product-name">Tailored AI Products</h3>
          <p className="product-tagline">
            Beyond managed agents, we build focused AI tools for specific needs — from
            replying to customer reviews to automating business workflows.
          </p>
          <a href="#products" className="service-link">
            See Our Products <ArrowIcon />
          </a>
        </div>

        {/* AI Integration */}
        <div className="service-card">
          <span className="product-icon">🔗</span>
          <h3 className="product-name">AI Integration</h3>
          <p className="product-tagline">
            Need AI embedded into your existing workflow or product? We help teams integrate
            AI capabilities without starting from scratch.
          </p>
          <a href="mailto:contact@predicate.pro" className="service-link">
            Talk to Us <ArrowIcon />
          </a>
        </div>

      </div>
    </section>
  )
}
