const testimonials = [
  {
    quote:
      'What impressed us most about Xntrova was their strategic mindset. They created customised strategies for our business, and their proactive communication and data-driven approach gave us confidence in every decision.',
    name: 'Amit Verma',
    role: 'Founder',
  },
  {
    quote:
      'Xntrova brought fresh ideas and clear direction for our business. They listened to our concerns and created strategies accordingly, delivering results beyond expectations.',
    name: 'Neha Kapoor',
    role: 'Director',
  },
  {
    quote:
      'What sets Xntrova apart is the way they combine expertise with a human touch. They celebrate your wins, tackle challenges alongside you, and remain focused on creating long-term value.',
    name: 'Rahul Sharma',
    role: 'CEO',
  },
]

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-heading">
          <span className="section-eyebrow">CLIENT PERSPECTIVE</span>

          <h2>
            Words from
            <br />
            <em>our clients.</em>
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <article className="testimonial-card" key={testimonial.name}>
              <div className="testimonial-top">
                <span className="quote-mark">“</span>
                <span className="testimonial-number">
                  0{index + 1}
                </span>
              </div>

              <blockquote>{testimonial.quote}</blockquote>

              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials