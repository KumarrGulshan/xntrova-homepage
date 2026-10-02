const projects = [
  {
    number: '01',
    category: 'SEO / E-COMMERCE',
    title: 'Building stronger organic visibility',
    description:
      'A search-focused growth strategy combining technical optimization, content and conversion improvements.',
  },
  {
    number: '02',
    category: 'PERFORMANCE MARKETING',
    title: 'Turning campaigns into growth',
    description:
      'A performance-led digital strategy designed around audience targeting, creative testing and measurable outcomes.',
  },
  {
    number: '03',
    category: 'WEB DEVELOPMENT',
    title: 'Creating a better digital experience',
    description:
      'A responsive web experience designed to make the customer journey clearer, faster and easier to convert.',
  },
]

function Portfolio() {
  return (
    <section id="work" className="portfolio-section">
      <div className="container">
        <div className="portfolio-heading">
          <div>
            <span className="section-eyebrow">SELECTED WORK</span>

            <h2>
              Work that
              <br />
              <em>moves businesses.</em>
            </h2>
          </div>

          <p>
            A selection of digital challenges we've approached through
            strategy, technology and performance.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-visual">
                <div className="project-pattern">
                  <span />
                  <span />
                  <span />
                </div>

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-open">↗</span>
              </div>

              <div className="project-info">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <button type="button" className="project-link">
                  Explore project
                  <span>↗</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio