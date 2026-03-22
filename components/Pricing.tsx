const plans = [
  {
    name: 'Starter',
    price: 'From $29',
    period: '/mo',
    desc: 'For individuals who want a personal AI without the technical setup.',
    features: [
      'OpenClaw instance, fully managed',
      '1 chat app connected (WhatsApp / Telegram)',
      'Persistent memory across sessions',
      'Basic email support',
    ],
    cta: 'Get Started',
    href: 'mailto:contact@predicate.pro',
    featured: false,
  },
  {
    name: 'Pro',
    price: 'From $79',
    period: '/mo',
    desc: 'For power users and small teams who need more flexibility and control.',
    features: [
      'Everything in Starter',
      'Multiple chat apps connected',
      'Custom Skills & automations',
      'Priority support',
      'Usage analytics dashboard',
    ],
    cta: 'Get Pro',
    href: 'mailto:contact@predicate.pro',
    featured: true,
  },
  {
    name: 'Business',
    price: 'Custom',
    period: '',
    desc: 'For teams and businesses with advanced requirements and scale.',
    features: [
      'Multiple OpenClaw instances',
      'Dedicated infrastructure',
      'Custom integrations',
      'SLA & dedicated support',
      'Team management',
    ],
    cta: 'Contact Us',
    href: 'mailto:contact@predicate.pro',
    featured: false,
  },
]

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="section-header">
        <p className="section-label">Pricing</p>
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-sub">
          Pay for what you use. API costs (Claude, OpenAI, etc.) are billed separately at cost — no markup.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div key={plan.name} className={`pricing-card${plan.featured ? ' pricing-featured' : ''}`}>
            {plan.featured && <div className="pricing-popular">Most Popular</div>}
            <h3 className="pricing-name">{plan.name}</h3>
            <div className="pricing-price">
              {plan.price}<span className="pricing-period">{plan.period}</span>
            </div>
            <p className="pricing-desc">{plan.desc}</p>
            <ul className="pricing-features">
              {plan.features.map((f) => (
                <li key={f}>
                  <CheckIcon />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={plan.href}
              className={plan.featured ? 'product-cta' : 'pricing-link'}
            >
              {plan.cta}
              {plan.featured && <ArrowIcon />}
            </a>
          </div>
        ))}
      </div>

      <p className="pricing-note">
        * API usage (Claude, OpenAI, or local models) billed separately at cost. We pass through with zero markup.
      </p>
    </section>
  )
}
