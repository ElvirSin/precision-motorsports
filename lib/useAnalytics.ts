'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { pageview } from './gtag'

export function useAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname) {
      // Use window.location.search to get search params on client side
      const searchParams = typeof window !== 'undefined' ? window.location.search : ''
      const url = pathname + searchParams
      pageview(url)
    }
  }, [pathname])
}
