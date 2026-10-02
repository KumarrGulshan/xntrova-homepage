const services = [
  {
    number: '01',
    title: 'Search & SEO',
    description:
      'Build sustainable organic visibility with technical SEO, content strategy and search optimization.',
    tags: ['Technical SEO', 'Content', 'Local SEO'],
  },
  {
    number: '02',
    title: 'Performance Marketing',
    description:
      'Turn advertising budgets into measurable business results through data-driven paid campaigns.',
    tags: ['Google Ads', 'Meta Ads', 'PPC'],
  },
  {
    number: '03',
    title: 'Social & Content',
    description:
      'Create content systems that build attention, engagement and a recognizable digital presence.',
    tags: ['Social Media', 'Content', 'Branding'],
  },
  {
    number: '04',
    title: 'Web Development',
    description:
      'Design and develop fast, responsive digital experiences focused on usability and conversion.',
    tags: ['Web Apps', 'React', 'UX/UI'],
  },
  {
    number: '05',
    title: 'E-commerce',
    description:
      'Improve product discovery, customer journeys and digital performance across e-commerce channels.',
    tags: ['E-commerce', 'Amazon', 'Conversion'],
  },
  {
    number: '06',
    title: 'Email Marketing',
    description:
      'Build stronger customer relationships with targeted email campaigns, automation and content designed to drive engagement and conversions.',
    tags: ['Campaigns', 'Automation', 'Conversion'],
  },
]

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">WHAT WE DO</span>

            <h2>
              Services built around
              <br />
              <em>growth.</em>
            </h2>
          </div>

          <p>
            From visibility to conversion, we combine strategy, creativity
            and technology to solve real business problems.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-arrow">
                  ↗
                </span>
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services