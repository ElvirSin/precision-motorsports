import React from 'react'
import Image from 'next/image'

export default function ContactSection() {
  const handleCallClick = () => {
    window.location.href = 'tel:+12483818200'
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Call to Action Section */}
        <div className="cta-section">
          <h2 className="cta-title">SCHEDULE YOUR APPOINTMENT TODAY</h2>
          <p className="cta-subtitle">
            Your premier alternative to dealerships for European and exotic vehicles.
          </p>

          <div className="cta-buttons">
            <button className="cta-button call-button" onClick={handleCallClick}>
              <span className="button-icon">📞</span>
              (248) 381-8200
            </button>
            <span className="button-separator">OR</span>
            <button className="cta-button inquire-button">INQUIRE NOW</button>
          </div>
        </div>

        {/* Business Info and Map Section */}
        <div className="info-map-section">
          <div className="business-info">
            <div className="business-logo">
              <Image
                src="/about-us/big-logo.webp"
                alt="Precision Motorsports"
                width={450}
                height={135}
                style={{ objectFit: 'contain' }}
              />
            </div>

            <div className="address-info">
              <span className="address-icon">📍</span>
              <span className="address-text">
                38410 GRAND RIVER AVE SUITE G, FARMINGTON, MI 48335
              </span>
            </div>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.1234567890!2d-83.3762345!3d42.4856789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824c8b8c9d0e1f2%3A0x1234567890abcdef!2s38410%20Grand%20River%20Ave%20Suite%20G%2C%20Farmington%2C%20MI%2048335!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Precision Motorsports Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
