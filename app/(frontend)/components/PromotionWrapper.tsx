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
          // Add cache control for faster subsequent loads
          cache: 'no-store',
        })
        const data = await response.json()
        setPromotionData(data)

        // If there's a promotion image, preload it immediately with high priority
        if (data.hasPromotion && data.imageUrl) {
          const link = document.createElement('link')
          link.rel = 'preload'
          link.as = 'image'
          link.href = data.imageUrl
          link.fetchPriority = 'high'
          document.head.appendChild(link)
        }
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
