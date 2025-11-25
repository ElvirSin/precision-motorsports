'use client'

import React, { useState, useEffect, useRef } from 'react'

interface CyclingHeroProps {
  className?: string
}

const heroVideos = [
  '/home-page/hero_video.mp4',
  '/home-page/hero2_video.mp4',
  '/home-page/hero3_video.mp4',
]

export default function CyclingHero({ className = '' }: CyclingHeroProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  // Handle video end - transition to next video
  const handleVideoEnd = () => {
    setIsTransitioning(true)

    setTimeout(() => {
      setCurrentVideoIndex((prev) => {
        const nextIndex = (prev + 1) % heroVideos.length
        return nextIndex
      })
      setTimeout(() => {
        setIsTransitioning(false)
      }, 100)
    }, 300)
  }

  // Handle video remounting - ensure it plays when video index changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch((error) => {
        // Handle autoplay restrictions
        console.log('Video autoplay prevented:', error)
      })
    }
  }, [currentVideoIndex])

  // Pause video on hover
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  return (
    <div
      className={`hero-background ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={heroVideos[currentVideoIndex]}
        autoPlay
        muted
        playsInline
        preload="metadata"
        onEnded={handleVideoEnd}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: isTransitioning ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
        }}
      />

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
