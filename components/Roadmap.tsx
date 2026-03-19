const items = [
  { tag: 'Q1 2026 ✓', name: 'ReplyWise', desc: 'AI reply assistant Chrome Extension — shipped and available now.' },
  { tag: 'Q2 2026', name: 'ReplyWise Pro', desc: 'Bulk reply management, custom tone profiles, and analytics dashboard.' },
  { tag: 'Q2 2026', name: 'MarketLens Beta', desc: 'AI-powered product research and market intelligence platform.' },
  { tag: 'Q3 2026', name: 'StoreOps ERP', desc: 'Unified multi-platform store management and operations hub.' },
  { tag: 'Q3 2026', name: 'SafeStore', desc: 'Account protection and multi-store security toolkit.' },
  { tag: 'Q4 2026', name: 'Predicate Platform', desc: 'Integrated suite bringing all tools under one unified dashboard.' },
]

export default function Roadmap() {
  return (
    <section id="roadmap">
      <p className="section-label">Roadmap</p>
      <h2 className="section-title">What&apos;s coming next</h2>
      <p className="section-sub">
        We&apos;re actively building the next generation of cross-border commerce tools.
        Here&apos;s a glimpse of what&apos;s ahead.
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
