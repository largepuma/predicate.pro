const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function CtaBanner() {
  return (
    <div className="cta-banner">
      <h2>Ready to Let AI Work for You?</h2>
      <p>Start with a managed OpenClaw instance — or try ReplyWise for free and see what AI can do.</p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="mailto:contact@predicate.pro" className="btn-primary">
          Get Started
          <ArrowIcon />
        </a>
        <a
          href="https://chromewebstore.google.com/detail/replywise-ai-%E2%80%93-amazon-rev/aciobakkpieiophenjlakofponihfloe"
          className="btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try ReplyWise Free
        </a>
      </div>
    </div>
  )
}
