'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaTimes } from 'react-icons/fa'

interface PromotionPopupProps {
  imageUrl: string
}

export default function PromotionPopup({ imageUrl }: PromotionPopupProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has seen the promotion in the last 4 hours
    const checkPromotionStatus = () => {
      const lastSeen = localStorage.getItem('promotionLastSeen')
      const now = Date.now()
      const fourHoursInMs = 4 * 60 * 60 * 1000 // 4 hours in milliseconds

      if (!lastSeen || now - parseInt(lastSeen) > fourHoursInMs) {
        setIsOpen(true)
      }
    }

    // Small delay to ensure page is loaded
    const timer = setTimeout(checkPromotionStatus, 500)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // Store the current timestamp
    localStorage.setItem('promotionLastSeen', Date.now().toString())
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="promotion-popup-overlay" onClick={handleClose}>
      <div className="promotion-popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="promotion-popup-header">
          <h2 className="promotion-popup-title">SPECIAL PROMOTION</h2>
          <button
            className="promotion-popup-close"
            onClick={handleClose}
            aria-label="Close promotion"
          >
            <FaTimes />
          </button>
        </div>
        <div className="promotion-popup-image-wrapper">
          <Image
            src={imageUrl}
            alt="Current Promotion"
            width={500}
            height={700}
            className="promotion-popup-image"
            style={{
              objectFit: 'contain',
            }}
            priority
            unoptimized
          />
        </div>
        <div className="promotion-popup-footer">
          <Link href="/book-now" onClick={handleClose}>
            <button className="promotion-popup-inquire-button">
              INQUIRE NOW
              <span className="button-arrow">→</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
