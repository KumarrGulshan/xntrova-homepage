const principles = [
  {
    number: '01',
    title: 'Strategy before execution',
    description:
      'We start by understanding the business, audience and goals before choosing the right digital channels.',
  },
  {
    number: '02',
    title: 'Data behind decisions',
    description:
      'Performance data helps us understand what is working, what is not and where the next opportunity lies.',
  },
  {
    number: '03',
    title: 'Built around your business',
    description:
      'Every strategy is shaped around your market, customers and business objectives instead of a fixed template.',
  },
  {
    number: '04',
    title: 'Continuous optimization',
    description:
      'Digital growth is an ongoing process. We measure, learn and improve campaigns and experiences continuously.',
  },
]

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-intro">
          <div>
            <span className="section-eyebrow">WHY XNTROVA</span>

            <h2>
              More than
              <br />
              <em>marketing.</em>
            </h2>
          </div>

          <div className="about-copy">
            <p className="about-lead">
              We bring strategy, technology and creativity together to build
              digital experiences that move businesses forward.
            </p>

            <p>
              Instead of chasing isolated metrics, we focus on the connection
              between visibility, engagement and business growth.
            </p>
          </div>
        </div>

        <div className="principles-grid">
          {principles.map((principle) => (
            <article className="principle" key={principle.number}>
              <span className="principle-number">{principle.number}</span>

              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About