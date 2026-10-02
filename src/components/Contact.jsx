import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-intro">
            <span className="section-eyebrow">LET'S TALK</span>

            <h2>
              Have a project
              <br />
              in <em>mind?</em>
            </h2>

            <p>
              Tell us a little about your business, your goals and what
              you're trying to solve. We'll take it from there.
            </p>

            <div className="contact-details">
              <div>
                <span>Email</span>
                <a href="mailto:info@xntrova.com">
                  info@xntrova.com
                </a>
              </div>

              <div>
                <span>Availability</span>
                <strong>Open for new projects</strong>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="form-success">
                <span className="success-icon">✓</span>

                <h3>Thanks for reaching out.</h3>

                <p>
                  Your enquiry has been received. We'll get back to you
                  soon.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>
                    Name
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </label>

                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      required
                    />
                  </label>
                </div>

                <label>
                  Company
                  <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                  />
                </label>

                <label>
                  What can we help with?
                  <select name="service" defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="seo">Search & SEO</option>
                    <option value="performance">
                      Performance Marketing
                    </option>
                    <option value="social">
                      Social & Content
                    </option>
                    <option value="web">Web Development</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="strategy">Digital Strategy</option>
                  </select>
                </label>

                <label>
                  Tell us about your project
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="A short description of your goals..."
                    required
                  />
                </label>

                <button type="submit" className="form-submit">
                  Send Enquiry
                  <span>↗</span>
                </button>

                <small className="form-note">
                  This demo form validates on the client side. Connect it
                  to your preferred backend or form service for production.
                </small>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact