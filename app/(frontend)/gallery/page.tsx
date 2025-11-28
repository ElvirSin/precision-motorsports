'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import '../styles.css'

interface GalleryCollection {
  folderName: string
  thumbnail: string
  images: string[]
  imageCount: number
}

// Convert camelCase to Title Case with spaces
function formatFolderName(folderName: string): string {
  return folderName
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim()
}

export default function GalleryPage() {
  const [collections, setCollections] = useState<GalleryCollection[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCollection, setSelectedCollection] = useState<GalleryCollection | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const [imagesReadyToLoad, setImagesReadyToLoad] = useState<Set<number>>(new Set())

  // Fetch gallery collections
  useEffect(() => {
    async function fetchCollections() {
      try {
        const response = await fetch('/api/gallery')
        const data = await response.json()
        setCollections(data.collections || [])
      } catch (error) {
        console.error('Error fetching gallery:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchCollections()
  }, [])

  // Load initial 5 images when a collection is opened
  useEffect(() => {
    if (selectedCollection) {
      const initialImages = new Set<number>()
      const count = Math.min(5, selectedCollection.images.length)
      for (let i = 0; i < count; i++) {
        initialImages.add(i)
      }
      setLoadedImages(initialImages)
      setImagesReadyToLoad(new Set())
      setCurrentImageIndex(0)
    }
  }, [selectedCollection])

  // Automatically load remaining images sequentially after initial 5 are loaded
  useEffect(() => {
    if (!selectedCollection) return

    const initialCount = Math.min(5, selectedCollection.images.length)

    // Check if all initial images (first 5) are ready
    let allInitialReady = true
    for (let i = 0; i < initialCount; i++) {
      if (!imagesReadyToLoad.has(i)) {
        allInitialReady = false
        break
      }
    }

    // If initial images are ready, start loading the rest sequentially
    if (allInitialReady) {
      // Find the next unloaded image index
      for (let i = initialCount; i < selectedCollection.images.length; i++) {
        if (!loadedImages.has(i)) {
          // Load the next image
          setLoadedImages((prev) => new Set([...prev, i]))
          break // Only load one at a time
        }
      }
    }
  }, [selectedCollection, loadedImages, imagesReadyToLoad])

  // Handle image load completion
  const handleImageLoad = useCallback((index: number) => {
    setImagesReadyToLoad((prev) => new Set([...prev, index]))
  }, [])

  // Lazy load images as user navigates
  const loadImageIfNeeded = useCallback(
    (index: number) => {
      if (!selectedCollection) return
      if (!loadedImages.has(index)) {
        setLoadedImages((prev) => new Set([...prev, index]))
      }
    },
    [selectedCollection, loadedImages],
  )

  const openCollection = useCallback((collection: GalleryCollection) => {
    setSelectedCollection(collection)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeModal = useCallback(() => {
    setSelectedCollection(null)
    setLoadedImages(new Set())
    setImagesReadyToLoad(new Set())
    document.body.style.overflow = 'unset'
  }, [])

  const goToPrevious = useCallback(() => {
    if (!selectedCollection) return
    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? selectedCollection.images.length - 1 : prevIndex - 1
      loadImageIfNeeded(newIndex)
      // Preload adjacent images
      const prevIdx = newIndex === 0 ? selectedCollection.images.length - 1 : newIndex - 1
      const nextIdx = (newIndex + 1) % selectedCollection.images.length
      loadImageIfNeeded(prevIdx)
      loadImageIfNeeded(nextIdx)
      return newIndex
    })
  }, [selectedCollection, loadImageIfNeeded])

  const goToNext = useCallback(() => {
    if (!selectedCollection) return
    setCurrentImageIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % selectedCollection.images.length
      loadImageIfNeeded(newIndex)
      // Preload adjacent images
      const prevIdx = newIndex === 0 ? selectedCollection.images.length - 1 : newIndex - 1
      const nextIdx = (newIndex + 1) % selectedCollection.images.length
      loadImageIfNeeded(prevIdx)
      loadImageIfNeeded(nextIdx)
      return newIndex
    })
  }, [selectedCollection, loadImageIfNeeded])

  useEffect(() => {
    if (!selectedCollection) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      } else if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedCollection, goToPrevious, goToNext, closeModal])

  return (
    <div className="gallery-page">
      {/* Gallery Header */}
      <section className="gallery-header">
        <div className="gallery-header-content">
          <h3 className="gallery-header-subtitle">OUR WORK & ACHIEVEMENTS</h3>
          <h2 className="gallery-header-title">VISUAL EXCELLENCE IN EVERY PROJECT</h2>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-content-section">
        {loading ? (
          <div className="gallery-loading">
            <div className="gallery-loading-spinner"></div>
            <p>Loading gallery...</p>
          </div>
        ) : collections.length === 0 ? (
          <div className="gallery-empty">
            <p>No gallery collections available</p>
          </div>
        ) : (
          <div className="gallery-grid">
            {collections.map((collection) => (
              <div
                key={collection.folderName}
                className="gallery-item"
                onClick={() => openCollection(collection)}
              >
                <div className="gallery-thumbnail-wrapper">
                  <Image
                    src={collection.thumbnail}
                    alt={formatFolderName(collection.folderName)}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="gallery-thumbnail-overlay">
                    <div className="gallery-thumbnail-info">
                      <span className="gallery-image-count">{collection.imageCount} photos</span>
                    </div>
                  </div>
                </div>
                <div className="gallery-item-title">
                  <p>{formatFolderName(collection.folderName)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Photo Viewer Modal */}
      {selectedCollection && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={closeModal} aria-label="Close">
              ×
            </button>

            <div className="gallery-modal-header">
              <h2>{formatFolderName(selectedCollection.folderName)}</h2>
              <span className="gallery-modal-counter">
                {currentImageIndex + 1} / {selectedCollection.images.length}
              </span>
            </div>

            <div className="gallery-modal-image-container">
              <button
                className="gallery-modal-nav gallery-modal-nav-prev"
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                ‹
              </button>

              <div className="gallery-modal-image-wrapper">
                {loadedImages.has(currentImageIndex) ? (
                  <Image
                    src={selectedCollection.images[currentImageIndex]}
                    alt={`${formatFolderName(selectedCollection.folderName)} - Image ${
                      currentImageIndex + 1
                    }`}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="90vw"
                    priority={currentImageIndex < 5}
                    onLoad={() => handleImageLoad(currentImageIndex)}
                    onLoadingComplete={() => handleImageLoad(currentImageIndex)}
                  />
                ) : (
                  <div className="gallery-modal-image-loading">
                    <div className="gallery-loading-spinner"></div>
                  </div>
                )}
              </div>

              <button
                className="gallery-modal-nav gallery-modal-nav-next"
                onClick={goToNext}
                aria-label="Next image"
              >
                ›
              </button>
            </div>

            <div className="gallery-modal-thumbnails">
              {selectedCollection.images.map((image, index) => (
                <div
                  key={index}
                  className={`gallery-modal-thumbnail ${
                    index === currentImageIndex ? 'active' : ''
                  }`}
                  onClick={() => {
                    setCurrentImageIndex(index)
                    loadImageIfNeeded(index)
                  }}
                >
                  {loadedImages.has(index) ? (
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="80px"
                      onLoad={() => handleImageLoad(index)}
                      onLoadingComplete={() => handleImageLoad(index)}
                    />
                  ) : (
                    <div className="gallery-thumbnail-placeholder"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Hidden images for preloading */}
            <div style={{ display: 'none' }}>
              {selectedCollection.images.map((image, index) => {
                if (loadedImages.has(index) && index !== currentImageIndex) {
                  return (
                    <Image
                      key={index}
                      src={image}
                      alt={`Preload ${index + 1}`}
                      width={1}
                      height={1}
                      onLoad={() => handleImageLoad(index)}
                      onLoadingComplete={() => handleImageLoad(index)}
                    />
                  )
                }
                return null
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
