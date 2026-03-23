const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Hero() {
  return (
    <div className="hero">
      <span className="hero-badge">✦ AI Services · Managed Agents · Vertical Products</span>

      <h1>
        Managed AI.<br />
        <span>Real results.</span><br />
        No asterisk.
      </h1>

      <p className="hero-sub">
        Predicate deploys and manages AI agents, builds purpose-built products, and integrates
        intelligence into your workflows — without the setup, the maintenance, or the headaches.
      </p>

      <div className="hero-actions">
        <a href="#services" className="btn-primary">
          Get Started
          <ArrowIcon />
        </a>
        <a href="#products" className="btn-secondary">
          Explore Products
        </a>
      </div>
    </div>
  )
}
