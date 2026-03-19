const items = [
  {
    icon: '🤖',
    cls: 'why-icon-1',
    title: 'AI-First, Always',
    desc: 'Every product is designed around modern AI — not bolted on as an afterthought. Intelligent automation from day one.',
  },
  {
    icon: '⚡',
    cls: 'why-icon-2',
    title: 'Fast to Value',
    desc: 'Install and start getting results in minutes. No lengthy onboarding, no complicated setup — just tools that work.',
  },
  {
    icon: '🌍',
    cls: 'why-icon-3',
    title: 'Global by Design',
    desc: 'Multi-language, multi-platform, multi-currency — built for sellers operating across borders, not just one market.',
  },
  {
    icon: '📈',
    cls: 'why-icon-4',
    title: 'Scales With You',
    desc: 'From your first store to hundreds of SKUs across multiple platforms — our tools grow with your business without extra complexity.',
  },
]

export default function Why() {
  return (
    <div id="why">
      <p className="section-label">Why Predicate</p>
      <h2 className="section-title">Built for the realities of global commerce</h2>
      <p className="section-sub">
        Cross-border selling is complex. We build tools that remove friction, automate the routine,
        and give you back time to grow.
      </p>

      <div className="why-grid">
        {items.map((item) => (
          <div key={item.title} className="why-card">
            <div className={`why-icon ${item.cls}`}>{item.icon}</div>
            <h3 className="why-title">{item.title}</h3>
            <p className="why-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
