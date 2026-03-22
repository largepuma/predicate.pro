const items = [
  {
    icon: '🌉',
    cls: 'why-icon-1',
    title: 'We Are the Bridge',
    desc: 'You shouldn\'t need an engineering team to benefit from AI. We sit between you and the complexity — handling setup, maintenance, and updates.',
  },
  {
    icon: '⚡',
    cls: 'why-icon-2',
    title: 'Zero Setup, Full Power',
    desc: 'Most AI tools require configuration. Ours don\'t. We deploy, connect, and configure everything — you just start talking.',
  },
  {
    icon: '🧠',
    cls: 'why-icon-3',
    title: 'Built to Last',
    desc: 'Unlike chatbots that forget you the moment you close the tab, your OpenClaw instance maintains persistent memory and runs around the clock.',
  },
  {
    icon: '🔒',
    cls: 'why-icon-4',
    title: 'Privacy by Design',
    desc: 'Your data stays where it belongs. We support self-hosted and privacy-first configurations for users who need full control.',
  },
]

export default function Why() {
  return (
    <div id="why">
      <p className="section-label">Why Predicate</p>
      <h2 className="section-title">The smarter way to get AI working for you</h2>
      <p className="section-sub">
        AI is powerful — but only if you can actually use it. We remove every barrier between
        you and the intelligence you need.
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
