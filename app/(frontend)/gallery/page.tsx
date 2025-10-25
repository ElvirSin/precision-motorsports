import React from 'react'
import Image from 'next/image'
import '../styles.css'

export default function GalleryPage() {
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
          <h3 className="hero-subtitle">OUR WORK & ACHIEVEMENTS</h3>
          <h2 className="hero-title">VISUAL EXCELLENCE IN EVERY PROJECT</h2>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="content-section">
        <div className="gallery-grid">
          <div className="gallery-item">
            <div className="gallery-placeholder">
              <span className="gallery-icon">🚗</span>
              <p>BMW M3 Restoration</p>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder">
              <span className="gallery-icon">🏎️</span>
              <p>Ferrari 488 Service</p>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder">
              <span className="gallery-icon">⚡</span>
              <p>Porsche 911 Tuning</p>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder">
              <span className="gallery-icon">🔧</span>
              <p>Mercedes AMG Repair</p>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder">
              <span className="gallery-icon">🎨</span>
              <p>Lamborghini Detail</p>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder">
              <span className="gallery-icon">🛡️</span>
              <p>Audi RS Inspection</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
