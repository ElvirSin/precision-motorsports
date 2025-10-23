import React from 'react'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import '../styles.css'

export default function ContactPage() {
  return (
    <div className="homepage">
      <Navigation activePage="contact" />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <Image
            src="/hero-bg.jpg"
            alt="BMW M Power Engine"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="hero-content">
          <h3 className="hero-subtitle">GET IN TOUCH WITH US</h3>
          <h2 className="hero-title">READY TO SERVE YOUR AUTOMOTIVE NEEDS</h2>
        </div>
      </section>

      {/* Contact Section */}
      <section className="content-section">
        <div className="content-container">
          <div className="left-column">
            <div className="contact-info">
              <h2 className="section-title">CONTACT INFORMATION</h2>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h3>ADDRESS</h3>
                  <p>
                    123 Precision Drive
                    <br />
                    Automotive District
                    <br />
                    City, State 12345
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h3>PHONE</h3>
                  <p>
                    Main: (555) 123-4567
                    <br />
                    Service: (555) 123-4568
                    <br />
                    Emergency: (555) 123-4569
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <h3>EMAIL</h3>
                  <p>
                    info@precisionmotorsports.com
                    <br />
                    service@precisionmotorsports.com
                    <br />
                    parts@precisionmotorsports.com
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div className="contact-details">
                  <h3>HOURS</h3>
                  <p>
                    Monday - Friday: 8:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="contact-form">
              <h2 className="section-title">SEND US A MESSAGE</h2>
              <form className="form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone" className="form-input" />
                </div>
                <div className="form-group">
                  <select className="form-input">
                    <option>Select Service</option>
                    <option>Maintenance & Repair</option>
                    <option>Performance Upgrades</option>
                    <option>Detailing & Restoration</option>
                    <option>Inspection & Certification</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Your Message"
                    className="form-input form-textarea"
                    rows={5}
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
