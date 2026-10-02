import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="brand" onClick={closeMenu}>
          XNTROVA<span>.</span>
        </a>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#process" onClick={closeMenu}>
            Process
          </a>

          <a href="#work" onClick={closeMenu}>
            Work
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a
            href="#contact"
            className="nav-cta mobile-cta"
            onClick={closeMenu}
          >
            Get a Free Audit
          </a>
        </nav>

        <a href="#contact" className="nav-cta desktop-cta">
          Get a Free Audit
        </a>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar