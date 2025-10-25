'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface CyclingHeroProps {
  className?: string
}

const heroImages = [
  '/home-page/hero1.jpg',
  '/home-page/hero2.jpg',
  '/home-page/hero3.jpg',
  '/home-page/hero4.jpg',
]

export default function CyclingHero({ className = '' }: CyclingHeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]))
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const preloadRef = useRef<HTMLImageElement | null>(null)

  // Preload next image
  const preloadNextImage = (nextIndex: number) => {
    if (preloadRef.current) {
      preloadRef.current.src = heroImages[nextIndex]
    }
  }

  // Load image when needed
  const loadImage = (index: number) => {
    if (!loadedImages.has(index)) {
      setLoadedImages((prev) => new Set([...prev, index]))
    }
  }

  // Cycle to next image
  const cycleToNext = () => {
    setIsTransitioning(true)

    setTimeout(() => {
      setCurrentImageIndex((prev) => {
        const nextIndex = (prev + 1) % heroImages.length
        loadImage(nextIndex)
        preloadNextImage((nextIndex + 1) % heroImages.length)
        return nextIndex
      })

      setTimeout(() => {
        setIsTransitioning(false)
      }, 100)
    }, 300)
  }

  // Start cycling on mount
  useEffect(() => {
    // Preload the second image
    preloadNextImage(1)

    // Start the cycling interval
    intervalRef.current = setInterval(cycleToNext, 10000) // 10 seconds

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // Pause cycling on hover
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(cycleToNext, 10000)
  }

  return (
    <div
      className={`hero-background ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hidden preload image */}
      <img ref={preloadRef} style={{ display: 'none' }} alt="" />

      {/* Current image */}
      {loadedImages.has(currentImageIndex) && (
        <Image
          src={heroImages[currentImageIndex]}
          alt={`Hero Image ${currentImageIndex + 1}`}
          fill
          style={{
            objectFit: 'cover',
            opacity: isTransitioning ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
          }}
          priority={currentImageIndex === 0}
          quality={90}
        />
      )}

      {/* Dark overlay */}
      <div
        className="hero-overlay"
        style={{
          opacity: isTransitioning ? 0.6 : 0.4,
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
    </div>
  )
}
