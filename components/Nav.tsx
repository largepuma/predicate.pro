export default function Nav() {
  return (
    <nav>
      <a href="#" className="nav-logo">
        <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="28" height="28" rx="7" fill="#7c6cfc" />
          <path d="M8 8h7a5 5 0 0 1 0 10H8V8Z" fill="white" opacity="0.9" />
          <circle cx="19" cy="20" r="3" fill="white" opacity="0.5" />
        </svg>
        Predicate
      </a>

      <ul className="nav-links">
        <li><a href="#products">Products</a></li>
        <li><a href="#why">Why Predicate</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
      </ul>

      <a
        href="https://chromewebstore.google.com/detail/replywise-ai-%E2%80%93-amazon-rev/aciobakkpieiophenjlakofponihfloe"
        className="nav-cta"
        target="_blank"
        rel="noopener noreferrer"
      >
        Try ReplyWise →
      </a>
    </nav>
  )
}
