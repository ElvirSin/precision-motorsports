import React from 'react'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import '../styles.css'

export default function ServicesPage() {
  return (
    <div className="homepage">
      <Navigation activePage="services" />

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
          <h3 className="hero-subtitle">COMPREHENSIVE AUTOMOTIVE SERVICES</h3>
          <h2 className="hero-title">EXPERT CARE FOR YOUR PRECISION MACHINE</h2>
        </div>
      </section>

      {/* Services Section */}
      <section className="content-section">
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🔧</div>
            <h3>MAINTENANCE & REPAIR</h3>
            <p>
              Complete maintenance services for European and exotic vehicles. From routine oil
              changes to complex engine repairs, our certified technicians ensure your vehicle
              performs at its peak.
            </p>
            <ul>
              <li>Oil Changes & Fluid Services</li>
              <li>Brake System Maintenance</li>
              <li>Engine Diagnostics & Repair</li>
              <li>Transmission Services</li>
              <li>Electrical System Repair</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">⚡</div>
            <h3>PERFORMANCE UPGRADES</h3>
            <p>
              Unlock your vehicle's true potential with our performance enhancement services. From
              ECU tuning to exhaust systems, we specialize in maximizing power and efficiency.
            </p>
            <ul>
              <li>ECU Tuning & Remapping</li>
              <li>Exhaust System Installation</li>
              <li>Cold Air Intake Systems</li>
              <li>Turbo & Supercharger Upgrades</li>
              <li>Suspension Modifications</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">🎨</div>
            <h3>DETAILING & RESTORATION</h3>
            <p>
              Restore your vehicle to showroom condition with our premium detailing and restoration
              services. We treat every vehicle as a work of art.
            </p>
            <ul>
              <li>Paint Correction & Protection</li>
              <li>Interior Deep Cleaning</li>
              <li>Ceramic Coating Application</li>
              <li>Leather Restoration</li>
              <li>Classic Car Restoration</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">🛡️</div>
            <h3>INSPECTION & CERTIFICATION</h3>
            <p>
              Comprehensive vehicle inspections and certifications to ensure safety, compliance, and
              optimal performance. Trust our expertise for accurate assessments.
            </p>
            <ul>
              <li>Pre-Purchase Inspections</li>
              <li>Safety Certifications</li>
              <li>Emissions Testing</li>
              <li>Insurance Assessments</li>
              <li>Warranty Evaluations</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
