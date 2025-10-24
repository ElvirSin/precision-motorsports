'use client'

import Script from 'next/script'

export default function GoogleAnalytics() {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

  // Don't render anything if GA_TRACKING_ID is not set
  if (!GA_TRACKING_ID) {
    console.warn('Google Analytics: NEXT_PUBLIC_GA_ID is not set')
    return null
  }

  console.log('Google Analytics: Loading with ID:', GA_TRACKING_ID)

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        onLoad={() => {
          console.log('Google Analytics: Script loaded successfully')
        }}
        onError={() => {
          console.error('Google Analytics: Failed to load script')
        }}
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
            console.log('Google Analytics: Initialized with ID ${GA_TRACKING_ID}');
          `,
        }}
      />
    </>
  )
}
