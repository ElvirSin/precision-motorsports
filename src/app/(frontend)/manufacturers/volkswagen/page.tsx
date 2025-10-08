import React from 'react'
import Navigation from '../../components/Navigation'
import '../../styles.css'

export default function VolkswagenPage() {
  return (
    <div className="homepage">
      <Navigation activePage="manufacturers" />

      <section className="manufacturer-page">
        <div className="manufacturer-container">
          <h1 className="manufacturer-title">VOLKSWAGEN</h1>
          <p className="manufacturer-subtitle">Coming Soon</p>
        </div>
      </section>
    </div>
  )
}
