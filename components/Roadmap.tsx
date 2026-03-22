const items = [
  { tag: 'Q1 2026 ✓', name: 'ReplyWise', desc: 'AI reply assistant Chrome Extension — shipped and live on the Chrome Web Store.' },
  { tag: 'Q1 2026 ✓', name: 'OpenClaw Hosting', desc: 'Managed OpenClaw deployment service — now available. Your AI agent, zero setup.' },
  { tag: 'Q2 2026', name: 'OpenClaw Pro', desc: 'Custom Skills, automation workflows, multi-app support, and usage analytics dashboard.' },
  { tag: 'Q2 2026', name: 'ReplyWise Pro', desc: 'Bulk reply management, custom tone profiles, and team analytics.' },
  { tag: 'Q3 2026', name: 'Business Plans', desc: 'Multi-instance deployments, dedicated infrastructure, and team management.' },
  { tag: 'Q4 2026', name: 'Predicate Platform', desc: 'Unified dashboard bringing all your AI services and products together.' },
]

export default function Roadmap() {
  return (
    <section id="roadmap">
      <p className="section-label">Roadmap</p>
      <h2 className="section-title">What&apos;s coming next</h2>
      <p className="section-sub">
        We&apos;re moving fast — here&apos;s what we&apos;re building and when you can expect it.
      </p>

      <div className="roadmap-grid">
        {items.map((item) => (
          <div key={item.name} className="roadmap-card">
            <p className="roadmap-tag">{item.tag}</p>
            <p className="roadmap-name">{item.name}</p>
            <p className="roadmap-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
