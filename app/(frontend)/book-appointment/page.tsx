'use client'

import React from 'react'
import Navigation from '../components/Navigation'
import '../styles.css'

export default function BookAppointmentPage() {
  const handleCallClick = () => {
    window.location.href = 'tel:+12483818200'
  }

  return (
    <div className="homepage">
      <Navigation activePage="book-appointment" />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h3 className="hero-subtitle">BOOK YOUR APPOINTMENT</h3>
          <h2 className="hero-title">SCHEDULE YOUR SERVICE</h2>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="content-container">
          <div className="booking-coming-soon">
            <div className="booking-icon">📅</div>
            <h2 className="section-title">BOOKING SYSTEM COMING SOON</h2>
            <p className="section-description">
              We're currently setting up our online booking system to make scheduling your service
              even more convenient. In the meantime, please call us directly to schedule your
              appointment.
            </p>

            <div className="booking-actions">
              <button className="cta-button call-button" onClick={handleCallClick}>
                <span className="button-icon">📞</span>
                Call (248) 381-8200
              </button>

              <div className="booking-info">
                <h3>Business Hours</h3>
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
