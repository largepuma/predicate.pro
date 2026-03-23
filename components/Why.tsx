const items = [
  {
    icon: '🚫',
    cls: 'why-icon-1',
    title: 'No Engineering Team Needed',
    desc: 'You shouldn\'t need a backend dev to deploy AI. We handle setup, maintenance, and updates — so you get the output without hiring for the infrastructure.',
  },
  {
    icon: '⚡',
    cls: 'why-icon-2',
    title: 'Running Before Your Coffee Gets Cold',
    desc: 'From zero to a configured, connected AI agent — in hours, not weeks. We handle deployment and integration end to end. You just show up.',
  },
  {
    icon: '🧠',
    cls: 'why-icon-3',
    title: 'AI That Actually Knows You',
    desc: 'Unlike chat sessions that reset, your agent builds context over time. The longer you use it, the sharper it gets — persistent memory that actually persists.',
  },
  {
    icon: '🔒',
    cls: 'why-icon-4',
    title: 'Your Data. Full Stop.',
    desc: 'We support self-hosted and privacy-first configurations for users who need full control. No training on your data. No surprises in the fine print.',
  },
]

export default function Why() {
  return (
    <div id="why">
      <p className="section-label">Why Predicate</p>
      <h2 className="section-title">AI that does the job — not just demos it</h2>
      <p className="section-sub">
        The gap between &ldquo;AI is impressive&rdquo; and &ldquo;AI is actually useful for my business&rdquo; is exactly where we work.
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
