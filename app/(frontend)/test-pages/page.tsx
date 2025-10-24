'use client'

import { useEffect, useState } from 'react'
import { event } from '../../../lib/analytics'

export default function TestPages() {
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [])

  const testEvent = () => {
    event({
      action: 'click',
      category: 'test',
      label: 'test_pages_button',
    })
    alert('Test Event gesendet!')
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Page View Tracking Test</h1>

      <div
        style={{
          marginBottom: '2rem',
          padding: '1rem',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
        }}
      >
        <h2>Current Page Info:</h2>
        <p>
          <strong>Path:</strong> {currentPath}
        </p>
        <p>
          <strong>Title:</strong> {typeof document !== 'undefined' ? document.title : 'Loading...'}
        </p>
        <p>
          <strong>URL:</strong>{' '}
          {typeof window !== 'undefined' ? window.location.href : 'Loading...'}
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3>Test Navigation:</h3>
        <p>Navigate to different pages and check Google Analytics Real-time reports:</p>
        <ul>
          <li>
            <a href="/about">About Page</a>
          </li>
          <li>
            <a href="/contact">Contact Page</a>
          </li>
          <li>
            <a href="/services">Services Page</a>
          </li>
          <li>
            <a href="/manufacturers/bmw">BMW Page</a>
          </li>
          <li>
            <a href="/manufacturers/ferrari">Ferrari Page</a>
          </li>
        </ul>
      </div>

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
          marginBottom: '2rem',
        }}
      >
        Test Event
      </button>

      <div style={{ fontSize: '0.9rem', color: '#666' }}>
        <h3>So testest du das Page-View-Tracking:</h3>
        <ol>
          <li>Öffne Google Analytics → Echtzeitberichte → Seiten</li>
          <li>Klicke auf die Links oben, um zu verschiedenen Seiten zu navigieren</li>
          <li>Du solltest jede Seite in den Echtzeitberichten sehen</li>
          <li>Überprüfe die Browser-Konsole für Debug-Logs</li>
        </ol>
      </div>
    </div>
  )
}
