function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#" className="brand">
              XNTROVA<span>.</span>
            </a>

            <p>
              Strategy, technology and performance marketing built around
              business growth.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <span>Explore</span>

              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#process">Process</a>
              <a href="#work">Work</a>
            </div>

            <div>
              <span>Connect</span>

              <a href="#contact">Contact</a>
              <a href="mailto:info@xntrova.com">Email</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} Xntrova Technologies</span>

          <span>Digital growth. Built with purpose.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer