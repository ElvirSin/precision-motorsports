import React from 'react'
import Navigation from '../components/Navigation'
import '../styles.css'

export default function PrivacyPolicyPage() {
  return (
    <div className="homepage">
      <Navigation activePage="privacy-policy" />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h3 className="hero-subtitle">PRIVACY POLICY</h3>
          <h2 className="hero-title">YOUR PRIVACY MATTERS</h2>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="content-container">
          <div className="text-center">
            <h2 className="section-title">PRIVACY POLICY COMING SOON</h2>
            <p className="section-description">
              We are currently working on our privacy policy. Please check back soon for detailed
              information about how we collect, use, and protect your personal information.
            </p>
            <p className="section-description">
              If you have any questions about our privacy practices, please contact us at
              support@precision-motorsports.com or call (248) 381-8200.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
