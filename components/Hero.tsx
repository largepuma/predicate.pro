const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Hero() {
  return (
    <div className="hero">
      <span className="hero-badge">✦ OpenClaw Managed Hosting — Now Available</span>

      <h1>
        Your Bridge to<br />
        <span>the World of AI</span>
      </h1>

      <p className="hero-sub">
        Predicate deploys and manages powerful AI agents on your behalf — available 24/7,
        connected to your chat apps, and built to help you imagine more, create more, and solve more.
      </p>

      <div className="hero-actions">
        <a href="#services" className="btn-primary">
          Start with OpenClaw
          <ArrowIcon />
        </a>
        <a href="#services" className="btn-secondary">
          Explore Our Services
        </a>
      </div>
    </div>
  )
}
