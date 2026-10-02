import { useState } from 'react'

const faqs = [
  {
    question: 'What services does Xntrova provide?',
    answer:
      'Xntrova brings together digital marketing, performance marketing, SEO, social media, web development and digital strategy to help businesses grow online.',
  },
  {
    question: 'How do you decide which strategy a business needs?',
    answer:
      'We begin by understanding the business, audience, competition and objectives. The strategy is then built around the specific problems and opportunities we identify.',
  },
  {
    question: 'How do you measure campaign performance?',
    answer:
      'Performance is measured using relevant business and digital metrics. The focus is on understanding what is working, identifying opportunities and continuously improving results.',
  },
  {
    question: 'Can you work with an existing website or marketing team?',
    answer:
      'Yes. Digital initiatives can be approached as a complete engagement or alongside an existing internal team, depending on the business requirements.',
  },
  {
    question: 'How can I get started?',
    answer:
      'Use the contact form below or request a free audit. Share a little about your business and goals, and the team can determine the appropriate next step.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-heading">
          <div>
            <span className="section-eyebrow">FAQ</span>

            <h2>
              Questions?
              <br />
              <em>We've got answers.</em>
            </h2>
          </div>

          <p>
            Everything you need to know before starting a conversation with
            our team.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div className={`faq-item ${isOpen ? 'open' : ''}`} key={faq.question}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>
                    <small>0{index + 1}</small>
                    {faq.question}
                  </span>

                  <span className="faq-icon">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ