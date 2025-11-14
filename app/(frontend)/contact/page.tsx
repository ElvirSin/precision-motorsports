'use client'

import Image from 'next/image'
import { useState, FormEvent } from 'react'
import '../styles.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message:
            'Thank you! Your message has been sent successfully. We will get back to you soon.',
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again later.',
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <Image
            src="/home-page/hero1.jpg"
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
          <div className="contact-page-header">
            <h2 className="contact-section-title">CONTACT US</h2>
            <p className="contact-section-subtitle">
              We're here to help with all your automotive needs. Reach out to us through any of the
              methods below.
            </p>
          </div>

          <div className="contact-page-content">
            {/* Contact Form - First */}
            <div className="contact-form-wrapper">
              <div className="contact-form-card">
                <h2 className="contact-form-title">SEND US A MESSAGE</h2>
                <p className="contact-form-subtitle">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                {submitStatus.type && (
                  <div
                    className={`form-message ${
                      submitStatus.type === 'success'
                        ? 'form-message-success'
                        : 'form-message-error'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
                <form className="contact-form-element" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className="form-input"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your.email@example.com"
                        className="form-input"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="(555) 123-4567"
                        className="form-input"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service" className="form-label">
                        Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="form-input form-select"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      >
                        <option value="">Select Service</option>
                        <option value="Maintenance & Repair">Maintenance & Repair</option>
                        <option value="Performance Upgrades">Performance Upgrades</option>
                        <option value="Detailing & Restoration">Detailing & Restoration</option>
                        <option value="Inspection & Certification">
                          Inspection & Certification
                        </option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your needs..."
                      className="form-input form-textarea"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  <button type="submit" className="contact-submit-button" disabled={isSubmitting}>
                    <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                    {!isSubmitting && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z"
                          fill="currentColor"
                        />
                      </svg>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Combined Contact Info Box - Below Form */}
            <div className="contact-info-combined">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="contact-info-text">
                  <h4>LOCATION</h4>
                  <p>
                    38410 Grand River Ave Suite G
                    <br />
                    Farmington, MI 48335
                    <br />
                    Vereinigte Staaten
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="contact-info-text">
                  <h4>PHONE</h4>
                  <p>
                    <a href="tel:+12483818200" className="contact-link">
                      (248) 381-8200
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="contact-info-text">
                  <h4>EMAIL</h4>
                  <p>
                    <a href="mailto:support@precision-motorsports.com" className="contact-link">
                      support@precision-motorsports.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="contact-info-text">
                  <h4>HOURS</h4>
                  <div className="hours-list-compact">
                    <div className="hours-item-compact">
                      <span className="hours-day">Monday - Friday</span>
                      <span className="hours-time">08:00 - 17:00</span>
                    </div>
                    <div className="hours-item-compact">
                      <span className="hours-day">Saturday & Sunday</span>
                      <span className="hours-time closed">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
