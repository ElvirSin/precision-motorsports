import React from 'react'
import '../styles.css'

export default function ThankYouPage() {
  return (
    <div className="homepage">
      {/* Main Content */}
      <section className="thank-you-section">
        <div className="thank-you-container">
          <div className="thank-you-content">
            <div className="success-icon">
              <span className="checkmark">✓</span>
            </div>

            <h1 className="thank-you-title">Thank You!</h1>

            <p className="thank-you-message">
              Your quote request has been successfully submitted. Our team will review your
              information and get back to you with a detailed estimate within 24 hours.
            </p>

            <div className="next-steps">
              <h2 className="next-steps-title">What happens next?</h2>
              <ul className="next-steps-list">
                <li>We'll review your vehicle and service requirements</li>
                <li>Our experts will prepare a detailed quote</li>
                <li>You'll receive an email with your personalized estimate</li>
                <li>We'll follow up to answer any questions you may have</li>
              </ul>
            </div>

            <div className="thank-you-actions">
              <a href="/" className="btn btn-primary">
                Return to Home
              </a>
              <a href="tel:+12483818200" className="btn btn-secondary">
                Call Us: (248) 381-8200
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
