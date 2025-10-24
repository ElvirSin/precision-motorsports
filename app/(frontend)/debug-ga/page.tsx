'use client'

import { useEffect, useState } from 'react'

export default function DebugGA() {
  const [debugInfo, setDebugInfo] = useState({
    gaId: '',
    gtagExists: false,
    dataLayerExists: false,
    scriptsLoaded: false,
  })

  useEffect(() => {
    const checkGA = () => {
      setDebugInfo({
        gaId: process.env.NEXT_PUBLIC_GA_ID || 'NOT SET',
        gtagExists: typeof window !== 'undefined' && typeof window.gtag === 'function',
        dataLayerExists: typeof window !== 'undefined' && Array.isArray(window.dataLayer),
        scriptsLoaded:
          typeof window !== 'undefined' &&
          document.querySelector('script[src*="googletagmanager.com"]') !== null,
      })
    }

    checkGA()
    const timer = setTimeout(checkGA, 2000)
    return () => clearTimeout(timer)
  }, [])

  const testEvent = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'test_click', {
        event_category: 'debug',
        event_label: 'test_button',
      })
      alert('Test Event gesendet!')
    } else {
      alert('Google Analytics ist nicht geladen!')
    }
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Google Analytics Debug</h1>

      <div
        style={{
          marginBottom: '2rem',
          padding: '1rem',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
          border: '1px solid #ccc',
        }}
      >
        <h2>Status Check:</h2>
        <p>
          <strong>GA Tracking ID:</strong> {debugInfo.gaId}
        </p>
        <p>
          <strong>gtag Funktion verfügbar:</strong> {debugInfo.gtagExists ? '✅ Ja' : '❌ Nein'}
        </p>
        <p>
          <strong>dataLayer verfügbar:</strong> {debugInfo.dataLayerExists ? '✅ Ja' : '❌ Nein'}
        </p>
        <p>
          <strong>GA Scripts geladen:</strong> {debugInfo.scriptsLoaded ? '✅ Ja' : '❌ Nein'}
        </p>
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
        Test Event senden
      </button>

      <div style={{ fontSize: '0.9rem', color: '#666' }}>
        <h3>So überprüfst du es:</h3>
        <ol>
          <li>Öffne die Browser-Entwicklertools (F12)</li>
          <li>Gehe zum "Network" Tab</li>
          <li>Lade diese Seite neu</li>
          <li>Suche nach Anfragen an "googletagmanager.com" oder "google-analytics.com"</li>
          <li>Gehe zu Google Analytics → Echtzeitberichte</li>
          <li>Klicke auf den Test-Button oben</li>
        </ol>
      </div>
    </div>
  )
}
