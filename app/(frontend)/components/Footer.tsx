import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RiFacebookCircleLine } from 'react-icons/ri'
import { FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-background">
        <Image
          src="/footer-bg.webp"
          alt="Footer background"
          fill
          className="footer-bg-image"
          priority={false}
        />
      </div>
      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-columns">
            {/* Left Column - Contact Information */}
            <div className="footer-left">
              <h3 className="footer-heading">GET IN TOUCH</h3>
              <div className="contact-info">
                <p className="contact-item">
                  <span className="contact-label">PHONE:</span> (248) 381-8200
                </p>
                <p className="contact-item">
                  <span className="contact-label">EMAIL:</span> SUPPORT@PRECISION-MOTORSPORTS.COM
                </p>
              </div>
              <div className="social-section">
                <p className="follow-text">FOLLOW US</p>
                <div className="social-icons">
                  <a
                    href="https://www.facebook.com/precisionmotorsportsfb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Facebook"
                  >
                    <RiFacebookCircleLine className="social-icon facebook-icon" />
                  </a>
                  <a
                    href="https://www.instagram.com/precision_motorsports/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="social-icon instagram-icon" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Service Areas & Legal Links */}
            <div className="footer-right">
              <div className="service-areas">
                <p className="service-text">
                  Proudly serving Farmington Hills, Novi, Bloomfield Hills, West Bloomfield, Troy,
                  and surrounding Metro Detroit areas.
                </p>
                <p className="cta-text">Have an idea for us? Send us a message here!</p>
                <Link href="/contact" className="footer-cta-button">
                  Contact Us
                </Link>
              </div>
              <div className="legal-links">
                <Link href="/privacy-policy" className="legal-link">
                  Privacy Policy
                </Link>
                <span className="legal-separator">|</span>
                <Link href="/terms-and-conditions" className="legal-link">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section - Specialization & Copyright */}
          <div className="footer-bottom">
            <div className="specialization">
              <p className="specialization-text">
                WE SPECIALIZE IN EUROPEAN AND EXOTIC VEHICLES, INCLUDING BRANDS LIKE FERRARI,
                LAMBORGHINI, PORSCHE, AND MORE.
              </p>
            </div>
            <div className="copyright">
              <p className="copyright-text">Copyright © 2025 Precision Motorsports</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
