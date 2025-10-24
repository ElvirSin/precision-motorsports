// Google Analytics configuration and utilities
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    console.log('Google Analytics: Tracking pageview for:', url)
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  } else {
    console.warn('Google Analytics: gtag not available for pageview:', url)
  }
}

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    console.log('Google Analytics: Tracking event:', { action, category, label, value })
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  } else {
    console.warn('Google Analytics: gtag not available for event:', {
      action,
      category,
      label,
      value,
    })
  }
}

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (command: 'config' | 'event', targetId: string, config?: Record<string, any>) => void
  }
}
