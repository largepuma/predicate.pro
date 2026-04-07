const productTracks = [
  {
    eyebrow: 'Private Chat',
    title: 'A Chinese-first Venice alternative',
    description:
      'Stable access to Chinese and global models with localized payments, a cleaner Chinese UX, and privacy boundaries designed around less retention.',
    points: ['Qwen and DeepSeek first', 'Global model fallback', 'User-controlled memory'],
  },
  {
    eyebrow: 'Creative SaaS',
    title: 'Long-memory characters for writing and roleplay',
    description:
      'Bilingual character libraries, worldbuilding state, voice input and output, and workflows for fiction, RPGs, and interactive storytelling.',
    points: ['Role memory', 'Bilingual character cards', 'Fiction and tabletop workflows'],
  },
  {
    eyebrow: 'Developer API',
    title: 'Privacy API Gateway',
    description:
      'An OpenAI-compatible inference proxy for teams that need model routing, project isolation, cost attribution, and minimal prompt retention.',
    points: ['OpenRouter fallback', 'Project-level keys', 'Transparent data handling'],
  },
]

const trustPrinciples = [
  {
    title: 'Minimal retention',
    copy:
      'Prompt and response storage should be off by default wherever the product can support it. When metadata is required for billing or abuse prevention, we document what is stored and why.',
  },
  {
    title: 'Chinese-first routing',
    copy:
      'Qwen and DeepSeek sit close to the default path, while global models remain available for users and teams that need broader capability or fallback coverage.',
  },
  {
    title: 'Stable access layer',
    copy:
      'The product direction centers on multi-provider routing, fallback behavior, and access reliability instead of exposing users to raw model and network complexity.',
  },
  {
    title: 'Built for builders',
    copy:
      'The same infrastructure that powers consumer products becomes a gateway for developers who need API keys, project isolation, usage reports, and private model options.',
  },
]

const useCases = [
  'Private AI chat for Chinese-speaking users',
  'Unfiltered creative writing and roleplay',
  'AI apps handling sensitive user input',
  'Security research and experimental tooling',
  'Regulated internal AI workflows',
]

const roadmap = [
  {
    phase: '01',
    title: 'Gateway core',
    copy: 'OpenAI-compatible API, Qwen and DeepSeek routing, OpenRouter fallback, API keys, and usage attribution.',
  },
  {
    phase: '02',
    title: 'Chinese chat MVP',
    copy: 'A simple English-facing landing page with early access, then a Chinese-first chat surface powered by the gateway.',
  },
  {
    phase: '03',
    title: 'Creative vertical',
    copy: 'One focused writing or roleplay workflow with role memory, templates, and a small set of high-quality bilingual characters.',
  },
  {
    phase: '04',
    title: 'Enterprise privacy',
    copy: 'High-touch pilots for private deployment, auditability, and verifiable privacy where a real customer use case exists.',
  },
]

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Predicate home">
          <span className="brand-mark">P</span>
          <span>Predicate</span>
        </a>
        <div className="nav-links">
          <a href="#products">Products</a>
          <a href="#trust">Privacy</a>
          <a href="#roadmap">Roadmap</a>
        </div>
        <a className="nav-cta" href="mailto:contact@predicate.pro">
          Early access
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="kicker">Privacy-first AI access for Chinese-speaking creators and builders</p>
            <h1>Private AI access, built around Chinese context.</h1>
            <p className="hero-sub">
              Predicate provides stable access to powerful Chinese and global AI models, with less data retention,
              clearer privacy boundaries, and developer-ready inference infrastructure.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="mailto:contact@predicate.pro?subject=Predicate%20early%20access">
                Join the waitlist
                <Arrow />
              </a>
              <a className="btn-secondary" href="mailto:contact@predicate.pro?subject=Predicate%20API%20access">
                Contact for API access
              </a>
            </div>
          </div>

          <div className="signal-panel" aria-label="Predicate infrastructure summary">
            <div className="panel-header">
              <span>Predicate routing layer</span>
              <span>early access</span>
            </div>
            <div className="routing-stack">
              <div className="route-row active">
                <span>Chinese models</span>
                <strong>Qwen / DeepSeek</strong>
              </div>
              <div className="route-row">
                <span>Fallback</span>
                <strong>OpenRouter / global models</strong>
              </div>
              <div className="route-row">
                <span>Data posture</span>
                <strong>Minimal retention by design</strong>
              </div>
              <div className="route-row">
                <span>Developer layer</span>
                <strong>OpenAI-compatible gateway</strong>
              </div>
            </div>
            <div className="panel-note">
              Consumer products and developer APIs share the same privacy-first inference foundation.
            </div>
          </div>
        </div>
      </section>

      <section className="problem-section" aria-labelledby="problem-title">
        <div>
          <p className="section-label">The gap</p>
          <h2 id="problem-title">Most AI products are not built for this market.</h2>
        </div>
        <div className="problem-copy">
          <p>
            Chinese-speaking users need stable access, localized payment paths, Chinese-first model choices, and
            a different privacy story: less platform storage, less opaque routing, and less dependence on tools that
            do not understand the context.
          </p>
          <p>
            Developers face a parallel problem. They can call model APIs directly, but they still need fallback,
            project isolation, cost attribution, and data handling that can be explained to users.
          </p>
        </div>
      </section>

      <section className="product-section" id="products" aria-labelledby="products-title">
        <div className="section-heading">
          <p className="section-label">What we build</p>
          <h2 id="products-title">One landing page, three product tracks.</h2>
          <p>
            The public story stays focused: private AI access for Chinese-speaking creators and builders. The product
            surface can expand as demand becomes clearer.
          </p>
        </div>

        <div className="track-grid">
          {productTracks.map((track) => (
            <article className="track-card" key={track.title}>
              <p className="track-eyebrow">{track.eyebrow}</p>
              <h3>{track.title}</h3>
              <p>{track.description}</p>
              <ul>
                {track.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="trust-section" id="trust" aria-labelledby="trust-title">
        <div className="section-heading compact">
          <p className="section-label">Why Predicate</p>
          <h2 id="trust-title">Privacy claims should be specific.</h2>
          <p>
            We avoid absolute claims until the underlying system supports them. The product direction is minimal
            retention, transparent routing, and user-controlled memory.
          </p>
        </div>

        <div className="principle-grid">
          {trustPrinciples.map((principle) => (
            <article className="principle-card" key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="use-case-band" aria-label="Use cases">
        <p className="section-label">Use cases</p>
        <div className="use-case-list">
          {useCases.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="roadmap-section" id="roadmap" aria-labelledby="roadmap-title">
        <div className="section-heading">
          <p className="section-label">Build order</p>
          <h2 id="roadmap-title">Start with the gateway, validate the surfaces.</h2>
          <p>
            The gateway is the reusable layer. Chat and creative tools validate demand and distribution. Enterprise
            privacy stays high-touch until a concrete customer use case exists.
          </p>
        </div>

        <div className="roadmap-grid">
          {roadmap.map((item) => (
            <article className="roadmap-card" key={item.phase}>
              <p>{item.phase}</p>
              <h3>{item.title}</h3>
              <span>{item.copy}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta" aria-label="Contact Predicate">
        <p className="section-label">Early access</p>
        <h2>Building with private AI?</h2>
        <p>
          Join the early access list for Predicate Chat and the Privacy API Gateway. Tell us whether you are building
          for Chinese users, creative workflows, or developer infrastructure.
        </p>
        <div className="hero-actions">
          <a className="btn-primary" href="mailto:contact@predicate.pro?subject=Predicate%20early%20access">
            Join the waitlist
            <Arrow />
          </a>
          <a className="btn-secondary" href="mailto:contact@predicate.pro">
            contact@predicate.pro
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>Predicate LLC</span>
        <span>Privacy-first AI access and inference tools.</span>
      </footer>
    </main>
  )
}
