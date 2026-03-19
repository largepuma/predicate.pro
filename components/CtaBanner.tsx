const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function CtaBanner() {
  return (
    <div className="cta-banner">
      <h2>Start with ReplyWise — it&apos;s free</h2>
      <p>Install the Chrome Extension and respond to customer feedback smarter, starting today.</p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a
          href="https://chromewebstore.google.com/detail/replywise-ai-%E2%80%93-amazon-rev/aciobakkpieiophenjlakofponihfloe"
          className="btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Add to Chrome
          <ArrowIcon />
        </a>
        <a href="mailto:contact@predicate.pro" className="btn-secondary">
          Contact Us
        </a>
      </div>
    </div>
  )
}
