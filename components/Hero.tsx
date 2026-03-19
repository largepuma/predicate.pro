const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Hero() {
  return (
    <div className="hero">
      <span className="hero-badge">Now Available — ReplyWise for Chrome</span>

      <h1>
        Smarter Tools for<br />
        <span>Cross-Border Sellers</span>
      </h1>

      <p className="hero-sub">
        Predicate builds AI-powered SaaS tools that help international e-commerce sellers
        operate more efficiently—from handling customer feedback to running full store operations.
      </p>

      <div className="hero-actions">
        <a href="#products" className="btn-primary">
          Explore Products
          <ArrowIcon />
        </a>
        <a href="#why" className="btn-secondary">
          Learn More
        </a>
      </div>
    </div>
  )
}
