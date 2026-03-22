const cases = [
  {
    icon: '🛒',
    title: 'Cross-Border E-Commerce',
    desc: 'Manage customer reviews, draft multilingual replies, track competitors — your AI keeps your store running smoothly across time zones.',
    tag: 'Try ReplyWise →',
    href: '#products',
  },
  {
    icon: '🧠',
    title: 'Personal Productivity',
    desc: 'Research, scheduling, drafting — your AI handles the cognitive overhead so you can focus on what actually matters.',
    tag: null,
    href: null,
  },
  {
    icon: '✍️',
    title: 'Content & Creativity',
    desc: 'Brainstorm ideas, draft copy, refine your voice — AI as your creative co-pilot, always available when inspiration strikes.',
    tag: null,
    href: null,
  },
  {
    icon: '🏢',
    title: 'Small Business Ops',
    desc: 'Automate routine workflows, generate reports, respond to inquiries — AI that scales with your team without the overhead.',
    tag: null,
    href: null,
  },
]

export default function UseCases() {
  return (
    <section id="use-cases">
      <div className="section-header">
        <p className="section-label">Use Cases</p>
        <h2 className="section-title">One AI, Infinite Applications</h2>
        <p className="section-sub">
          Whether you&apos;re a seller, creator, or business — your AI adapts to you.
        </p>
      </div>

      <div className="use-cases-grid">
        {cases.map((c) => (
          <div key={c.title} className="use-case-card">
            <span className="use-case-icon">{c.icon}</span>
            <h3 className="use-case-title">{c.title}</h3>
            <p className="use-case-desc">{c.desc}</p>
            {c.tag && c.href && (
              <a href={c.href} className="use-case-link">{c.tag}</a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
