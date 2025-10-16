import React from 'react'
import Navigation from '../components/Navigation'
import '../styles.css'

export default function BookAppointmentPage() {
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
          <div className="text-center">
            <h2 className="section-title">BOOKING SYSTEM COMING SOON</h2>
            <p className="section-description">
              We're currently setting up our online booking system. In the meantime, please call us
              at (248) 381-8200 to schedule your appointment.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
