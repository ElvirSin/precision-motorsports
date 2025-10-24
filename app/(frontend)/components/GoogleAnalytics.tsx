'use client'

import Script from 'next/script'
import { GA_TRACKING_ID } from '../../../lib/analytics'

export default function GoogleAnalytics() {
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
              send_page_view: false
            });
            console.log('Google Analytics initialized for:', window.location.pathname);
          `,
        }}
      />
    </>
  )
}
