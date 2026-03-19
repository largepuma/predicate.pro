const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Products() {
  return (
    <section id="products">
      <div className="section-header">
        <p className="section-label">Products</p>
        <h2 className="section-title">Everything you need to sell globally</h2>
        <p className="section-sub">
          A growing suite of tools purpose-built for cross-border e-commerce — from AI-powered
          customer communication to full operational management.
        </p>
      </div>

      <div className="product-grid">

        {/* ReplyWise — Featured, Live */}
        <div className="product-card featured">
          <div>
            <span className="product-badge badge-live">Live Now</span>
            <span className="product-icon">💬</span>
            <h3 className="product-name">ReplyWise</h3>
            <p className="product-tagline">
              AI-powered Chrome Extension that intelligently drafts replies to customer reviews
              and feedback — so you can respond faster, more professionally, and at scale.
            </p>
            <ul className="product-features">
              <li>One-click AI reply generation for any customer review</li>
              <li>Tone and context awareness — empathetic, professional, or concise</li>
              <li>Works directly inside your store management interface</li>
              <li>Supports Shopify, Amazon, and independent store platforms</li>
              <li>Multi-language output for global storefronts</li>
            </ul>
            <a
              href="https://chromewebstore.google.com/detail/replywise-ai-%E2%80%93-amazon-rev/aciobakkpieiophenjlakofponihfloe"
              className="product-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Add to Chrome — Free
              <ArrowIcon />
            </a>
          </div>

          {/* Preview mockup */}
          <div className="product-visual">
            <div className="reply-preview">
              <div>
                <p className="bubble-label label-user">Customer Review</p>
                <div className="reply-bubble bubble-user">
                  &ldquo;The item arrived damaged and customer support took forever to respond.
                  Really disappointed with this purchase.&rdquo;
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p className="bubble-label label-ai">ReplyWise AI</p>
                <div className="reply-bubble bubble-ai">
                  &ldquo;We sincerely apologize for this experience — a damaged item is never
                  acceptable. We&apos;ve flagged this with our logistics team and will reach out
                  within 24 hours to make this right. Thank you for your honest feedback.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* StoreOps ERP */}
        <div className="product-card coming-soon">
          <span className="product-badge badge-soon">Coming Soon</span>
          <span className="product-icon">🏭</span>
          <h3 className="product-name">StoreOps ERP</h3>
          <p className="product-tagline">Full-chain operations management for multi-platform cross-border sellers.</p>
          <ul className="product-features">
            <li>Inventory, orders, and fulfillment in one dashboard</li>
            <li>Shopify, WooCommerce &amp; Amazon unified</li>
            <li>Automated restocking and supplier workflows</li>
          </ul>
        </div>

        {/* MarketLens */}
        <div className="product-card coming-soon">
          <span className="product-badge badge-soon">Coming Soon</span>
          <span className="product-icon">🔍</span>
          <h3 className="product-name">MarketLens</h3>
          <p className="product-tagline">AI-driven product selection and market research for cross-border commerce.</p>
          <ul className="product-features">
            <li>Trend detection across global marketplaces</li>
            <li>Competitor &amp; pricing intelligence</li>
            <li>Demand forecasting and niche scoring</li>
          </ul>
        </div>

        {/* SafeStore */}
        <div className="product-card coming-soon">
          <span className="product-badge badge-soon">Coming Soon</span>
          <span className="product-icon">🔐</span>
          <h3 className="product-name">SafeStore</h3>
          <p className="product-tagline">Multi-account security and store management for sellers operating at scale.</p>
          <ul className="product-features">
            <li>Account isolation and risk monitoring</li>
            <li>Multi-store dashboard with unified analytics</li>
            <li>Anomaly detection and breach alerts</li>
          </ul>
        </div>

      </div>
    </section>
  )
}
