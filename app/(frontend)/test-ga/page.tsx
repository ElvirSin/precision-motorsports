'use client'

import { useEffect, useState } from 'react'
import { event } from '../../../lib/gtag'

export default function TestGA() {
  const [gaLoaded, setGaLoaded] = useState(false)
  const [trackingId, setTrackingId] = useState('')

  useEffect(() => {
    // Check if gtag is loaded
    const checkGA = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        setGaLoaded(true)
      }
    }

    // Check immediately and after a delay
    checkGA()
    const timer = setTimeout(checkGA, 2000)

    // Get tracking ID from environment
    setTrackingId(process.env.NEXT_PUBLIC_GA_ID || 'Not set')

    return () => clearTimeout(timer)
  }, [])

  const testEvent = () => {
    event({
      action: 'click',
      category: 'test',
      label: 'test_button_click',
    })
    alert('Test event sent! Check Google Analytics Real-time reports.')
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Google Analytics Test Page</h1>

      <div
        style={{
          marginBottom: '2rem',
          padding: '1rem',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
        }}
      >
        <h2>Status Check:</h2>
        <p>
          <strong>Tracking ID:</strong> {trackingId}
        </p>
        <p>
          <strong>GA Script Loaded:</strong> {gaLoaded ? '✅ Yes' : '❌ No'}
        </p>
        <p>
          <strong>Window.gtag Available:</strong>{' '}
          {typeof window !== 'undefined' && window.gtag ? '✅ Yes' : '❌ No'}
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
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
      </div>

      <div style={{ fontSize: '0.9rem', color: '#666' }}>
        <h3>How to verify:</h3>
        <ol>
          <li>Open Google Analytics dashboard</li>
          <li>Go to Reports → Realtime</li>
          <li>Click the test button above</li>
          <li>You should see the event in Real-time reports</li>
        </ol>

        <h3>Browser DevTools Check:</h3>
        <ol>
          <li>Open Developer Tools (F12)</li>
          <li>Go to Network tab</li>
          <li>Refresh this page</li>
          <li>Look for requests to googletagmanager.com or google-analytics.com</li>
        </ol>
      </div>
    </div>
  )
}
