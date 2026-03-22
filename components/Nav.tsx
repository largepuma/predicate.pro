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
        <li><a href="#services">Services</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#why">Why Predicate</a></li>
      </ul>

      <a href="mailto:contact@predicate.pro" className="nav-cta">
        Get Started →
      </a>
    </nav>
  )
}
