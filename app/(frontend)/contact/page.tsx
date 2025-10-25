import React from 'react'
import Image from 'next/image'
import '../styles.css'

export default function ContactPage() {
  return (
    <div className="homepage">
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
      <section className="contact-page-section">
        <div className="contact-page-container">
          <div className="contact-page-grid">
            <div className="contact-info-column">
              <div className="contact-info">
                <div className="emergency-contact">
                  <p>Emergency: (555) 123-4569</p>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                        fill="white"
                      />
                    </svg>
                  </div>
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
                  <div className="contact-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h3>HOURS</h3>
                    <p>
                      Monday - Friday: 8:00 AM – 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-column">
              <div className="contact-form">
                <h2 className="contact-form-title">SEND US A MESSAGE</h2>
                <form className="contact-form-element">
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
                    <select className="form-input form-select">
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
                  <button type="submit" className="contact-submit-button">
                    INQUIRE NOW
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
