// Enhanced Google Analytics tracking for Next.js App Router

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-H969BSXKZS'

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })

    // Also send a page_view event for better tracking
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: url,
    })

    console.log('Analytics: Page view tracked for:', url)
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
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
    console.log('Analytics: Event tracked:', { action, category, label, value })
  }
}

// Declare gtag function and dataLayer for TypeScript
declare global {
  interface Window {
    gtag: (command: 'config' | 'event', targetId: string, config?: Record<string, any>) => void
    dataLayer: any[]
  }
}
