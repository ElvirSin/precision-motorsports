import React from 'react'
import '../styles.css'

export default function TermsAndConditionsPage() {
  return (
    <div className="homepage">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h3 className="hero-subtitle">TERMS & CONDITIONS</h3>
          <h2 className="hero-title">SERVICE TERMS</h2>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="content-container">
          <div className="text-center">
            <h2 className="section-title">TERMS & CONDITIONS COMING SOON</h2>
            <p className="section-description">
              We are currently working on our terms and conditions. Please check back soon for
              detailed information about our service terms, conditions, and policies.
            </p>
            <p className="section-description">
              If you have any questions about our terms of service, please contact us at
              support@precision-motorsports.com or call (248) 381-8200.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
