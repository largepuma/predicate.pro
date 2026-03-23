const steps = [
  {
    num: '01',
    title: 'We Set You Up',
    desc: 'Tell us your use case. We configure your AI agent, connect your channels, and have everything running — typically within 24 hours. Nothing to install on your end.',
    icon: '🚀',
  },
  {
    num: '02',
    title: 'You Connect',
    desc: 'Your agent lives wherever you already work: WhatsApp, Telegram, Discord, or a web interface. No new apps, no new logins. It meets you where you are.',
    icon: '🔗',
  },
  {
    num: '03',
    title: 'It Works. Continuously.',
    desc: 'Your agent runs around the clock — completing tasks, answering questions, building context. Even at 3am on a Sunday. That\'s what earns its keep.',
    icon: '⚡',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works">
      <div className="section-header">
        <p className="section-label">How It Works</p>
        <h2 className="section-title">From zero to a working AI agent — in three steps</h2>
        <p className="section-sub">
          No engineering. No configuration. No waiting weeks. Just AI that gets to work.
        </p>
      </div>

      <div className="steps-grid">
        {steps.map((step) => (
          <div key={step.num} className="step-card">
            <div className="step-num">{step.num}</div>
            <span className="step-icon">{step.icon}</span>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
