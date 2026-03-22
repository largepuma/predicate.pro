const steps = [
  {
    num: '01',
    title: 'We Deploy',
    desc: 'We spin up your OpenClaw instance on secure infrastructure in minutes — fully configured and ready to go. No setup required on your end.',
    icon: '🚀',
  },
  {
    num: '02',
    title: 'You Connect',
    desc: 'Link WhatsApp, Telegram, Discord, or any chat app you already use. Your AI meets you where you are — no new apps to learn.',
    icon: '🔗',
  },
  {
    num: '03',
    title: 'It Works for You',
    desc: 'Your AI runs 24/7 — handles tasks, answers questions, builds memory, and gets smarter over time. Even while you sleep.',
    icon: '⚡',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works">
      <div className="section-header">
        <p className="section-label">How It Works</p>
        <h2 className="section-title">Your Personal AI in Three Steps</h2>
        <p className="section-sub">
          From zero to a 24/7 intelligent assistant — without writing a single line of code.
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
