'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface CyclingHeroProps {
  className?: string
}

const heroVideo1 = '/home-page/hero_video.mp4'
const heroVideo2 = '/home-page/hero2_video.mp4'
const heroImages = [
  '/home-page/hero1.jpg',
  '/home-page/hero2.jpg',
  '/home-page/hero3.jpg',
  '/home-page/hero4.jpg',
]

export default function CyclingHero({ className = '' }: CyclingHeroProps) {
  const [currentMediaType, setCurrentMediaType] = useState<'video1' | 'video2' | 'image'>('video1')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const preloadRef = useRef<HTMLImageElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

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
        const nextIndex = prev + 1

        // If we've cycled through all images, go back to video 1
        if (nextIndex >= heroImages.length) {
          // Clear the interval - video will handle its own transition
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
          }
          setCurrentMediaType('video1')
          // Preload first image for when video cycle completes again
          loadImage(0)
          preloadNextImage(0)
          return 0 // Reset index but video will be shown
        } else {
          loadImage(nextIndex)
          // Preload next image, or if it's the last one, preload first for after video
          if (nextIndex + 1 < heroImages.length) {
            preloadNextImage(nextIndex + 1)
          } else {
            preloadNextImage(0)
          }
        }

        setTimeout(() => {
          setIsTransitioning(false)
        }, 100)

        return nextIndex
      })
    }, 300)
  }

  // Handle video 1 end - transition to video 2
  const handleVideo1End = () => {
    setIsTransitioning(true)

    setTimeout(() => {
      setCurrentMediaType('video2')
      setTimeout(() => {
        setIsTransitioning(false)
      }, 100)
    }, 300)
  }

  // Handle video 2 end - transition to first image
  const handleVideo2End = () => {
    setIsTransitioning(true)

    setTimeout(() => {
      setCurrentMediaType('image')
      setCurrentImageIndex(0)
      loadImage(0)
      preloadNextImage(1)

      setTimeout(() => {
        setIsTransitioning(false)
      }, 100)
    }, 300)

    // Start cycling through images after video 2 ends
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(cycleToNext, 10000) // 10 seconds per image
  }

  // Start cycling on mount
  useEffect(() => {
    // Preload first image for when video cycle completes
    loadImage(0)
    preloadNextImage(1)

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // Handle video remounting - ensure it plays when media type changes to video
  useEffect(() => {
    if ((currentMediaType === 'video1' || currentMediaType === 'video2') && videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch((error) => {
        // Handle autoplay restrictions
        console.log('Video autoplay prevented:', error)
      })
    }
  }, [currentMediaType])

  // Pause cycling on hover
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    if (videoRef.current && (currentMediaType === 'video1' || currentMediaType === 'video2')) {
      videoRef.current.pause()
    }
  }

  const handleMouseLeave = () => {
    if (currentMediaType === 'image') {
      intervalRef.current = setInterval(cycleToNext, 10000)
    } else if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const getCurrentVideoSrc = () => {
    if (currentMediaType === 'video1') return heroVideo1
    if (currentMediaType === 'video2') return heroVideo2
    return heroVideo1 // fallback
  }

  const getCurrentVideoHandler = () => {
    if (currentMediaType === 'video1') return handleVideo1End
    if (currentMediaType === 'video2') return handleVideo2End
    return handleVideo1End // fallback
  }

  return (
    <div
      className={`hero-background ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hidden preload image */}
      <img ref={preloadRef} style={{ display: 'none' }} alt="" />

      {/* Video - shown for video1 or video2 */}
      {(currentMediaType === 'video1' || currentMediaType === 'video2') && (
        <video
          ref={videoRef}
          src={getCurrentVideoSrc()}
          autoPlay
          muted
          playsInline
          onEnded={getCurrentVideoHandler()}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isTransitioning ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
          }}
        />
      )}

      {/* Current image - shown after video 2 */}
      {currentMediaType === 'image' && loadedImages.has(currentImageIndex) && (
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
