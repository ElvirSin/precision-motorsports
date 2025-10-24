'use client'

import Script from 'next/script'

export default function GoogleAnalytics() {
  // Try environment variable first, fallback to hardcoded ID
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-H969BSXKZS'

  // Debug: Log the GA_TRACKING_ID to console in production
  if (typeof window !== 'undefined') {
    console.log('GA_TRACKING_ID in production:', GA_TRACKING_ID)
    console.log('Environment variable available:', !!process.env.NEXT_PUBLIC_GA_ID)
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
