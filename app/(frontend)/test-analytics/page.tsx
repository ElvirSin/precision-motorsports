'use client'

import { event } from '../../../lib/gtag'

export default function TestAnalytics() {
  const testEvent = () => {
    event({
      action: 'click',
      category: 'test',
      label: 'analytics_test_button',
    })
    alert('Event sent! Check Google Analytics Real-time reports.')
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Google Analytics Test Page</h1>
      <p>This page is for testing Google Analytics integration.</p>
      <button
        onClick={testEvent}
        style={{
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Test Analytics Event
      </button>
      <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
        Click the button above and check your Google Analytics Real-time reports to see if the event
        appears.
      </p>
    </div>
  )
}
