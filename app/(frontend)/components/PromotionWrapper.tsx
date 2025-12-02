'use client'

import React, { useEffect, useState } from 'react'
import PromotionPopup from './PromotionPopup'

export default function PromotionWrapper() {
  const [promotionData, setPromotionData] = useState<{
    hasPromotion: boolean
    imageUrl?: string
  } | null>(null)

  useEffect(() => {
    // Fetch promotion data immediately for LCP optimization
    const fetchPromotion = async () => {
      try {
        const response = await fetch('/api/promotion', {
          // Use cache for faster loads, but revalidate
          cache: 'default',
        })
        const data = await response.json()

        // If there's a promotion image, preload it IMMEDIATELY with high priority
        // Do this before setting state to start loading as early as possible
        if (data.hasPromotion && data.imageUrl) {
          // Add preload link with high priority
          const link = document.createElement('link')
          link.rel = 'preload'
          link.as = 'image'
          link.href = data.imageUrl
          link.fetchPriority = 'high'
          // Insert at the beginning of head for maximum priority
          document.head.insertBefore(link, document.head.firstChild)

          // Also start loading the image immediately in the background
          const img = new Image()
          img.fetchPriority = 'high'
          img.src = data.imageUrl
        }

        setPromotionData(data)
      } catch (error) {
        console.error('Error fetching promotion:', error)
        setPromotionData({ hasPromotion: false })
      }
    }

    // Start fetching immediately - no delay
    fetchPromotion()
  }, [])

  if (!promotionData || !promotionData.hasPromotion || !promotionData.imageUrl) {
    return null
  }

  return <PromotionPopup imageUrl={promotionData.imageUrl} />
}
