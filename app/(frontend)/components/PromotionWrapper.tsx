'use client'

import React, { useEffect, useState } from 'react'
import PromotionPopup from './PromotionPopup'

export default function PromotionWrapper() {
  const [promotionData, setPromotionData] = useState<{
    hasPromotion: boolean
    imageUrl?: string
  } | null>(null)

  useEffect(() => {
    const fetchPromotion = async () => {
      try {
        const response = await fetch('/api/promotion')
        const data = await response.json()
        setPromotionData(data)
      } catch (error) {
        console.error('Error fetching promotion:', error)
        setPromotionData({ hasPromotion: false })
      }
    }

    fetchPromotion()
  }, [])

  if (!promotionData || !promotionData.hasPromotion || !promotionData.imageUrl) {
    return null
  }

  return <PromotionPopup imageUrl={promotionData.imageUrl} />
}
