const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We understand your business, audience, competitors and the problems that need to be solved.',
  },
  {
    number: '02',
    title: 'Strategize',
    description:
      'We turn insights into a focused digital strategy with clear priorities and measurable objectives.',
  },
  {
    number: '03',
    title: 'Execute',
    description:
      'Our team brings the strategy to life through campaigns, content, technology and creative execution.',
  },
  {
    number: '04',
    title: 'Optimize',
    description:
      'We measure performance, learn from the data and continuously improve what we build.',
  },
]

function Process() {
  return (
    <section id="process" className="process-section">
      <div className="container">
        <div className="process-heading">
          <div>
            <span className="section-eyebrow">HOW WE WORK</span>

            <h2>
              From idea
              <br />
              to <em>impact.</em>
            </h2>
          </div>

          <p>
            A simple process keeps strategy, execution and business goals
            connected from beginning to end.
          </p>
        </div>

        <div className="process-list">
          {steps.map((step, index) => (
            <article className="process-step" key={step.number}>
              <div className="process-number">{step.number}</div>

              <div className="process-line">
                <span />
              </div>

              <div className="process-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

              <span className="process-index">
                {String(index + 1).padStart(2, '0')}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process