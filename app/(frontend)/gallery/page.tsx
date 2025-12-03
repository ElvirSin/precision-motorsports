'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import '../styles.css'
import { imageConfigDefault } from 'next/dist/shared/lib/image-config'

interface GalleryCollection {
  folderName: string
  thumbnail: string
  images: string[]
  imageCount: number
}

interface CarModel {
  modelName: string
  thumbnail: string | null
  images: string[]
  imageCount: number
}

interface CarBrand {
  brandName: string
  thumbnail: string | null
  models: CarModel[]
}

// Format brand/model names for display
function formatName(name: string): string {
  // Convert to title case
  return name
    .split(/[-_\s]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

type TabType = 'events' | 'cars'

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<TabType>('events')
  const [collections, setCollections] = useState<GalleryCollection[]>([])
  const [carsData, setCarsData] = useState<CarBrand[]>([])
  const [loading, setLoading] = useState(true)
  const [carsLoading, setCarsLoading] = useState(false)
  const [selectedCollection, setSelectedCollection] = useState<GalleryCollection | null>(null)
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
  const [selectedModel, setSelectedModel] = useState<CarModel | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

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

  // Fetch cars gallery data
  useEffect(() => {
    async function fetchCarsData() {
      if (activeTab === 'cars' && carsData.length === 0) {
        setCarsLoading(true)
        try {
          const response = await fetch('/api/gallery/cars')
          const data = await response.json()
          setCarsData(data.brands)
        } catch (error) {
          console.error('Error fetching cars gallery:', error)
        } finally {
          setCarsLoading(false)
        }
      }
    }
    fetchCarsData()
  }, [activeTab, carsData.length])

  /*
  // Load initial 5 images when a collection or model is opened
  useEffect(() => {
    if (selectedCollection) {
      const initialImages = new Set<number>()
      const count = Math.min(5, selectedCollection.images.length)
      for (let i = 0; i < count; i++) {
        initialImages.add(i)
      }
      setLoadedImages(initialImages)
      setCurrentImageIndex(0)
    } else if (selectedModel) {
      const initialImages = new Set<number>()
      const count = Math.min(5, selectedModel.images.length)
      for (let i = 0; i < count; i++) {
        initialImages.add(i)
      }
      setLoadedImages(initialImages)
      setCurrentImageIndex(0)
    }
  }, [selectedCollection, selectedModel])

  // Lazy load images as user navigates
  const loadImageIfNeeded = useCallback(
    (index: number) => {
      if (!selectedCollection && !selectedModel) return
      if (!loadedImages.has(index)) {
        setLoadedImages((prev) => new Set([...prev, index]))
      }
    },
    [selectedCollection, selectedModel, loadedImages],
  )

  // Automatically preload images around the current image (for thumbnails)
  // This ensures the main image can reuse the cached version from thumbnails
  useEffect(() => {
    const currentImages = selectedCollection?.images || selectedModel?.images
    if (!currentImages) return

    const totalImages = currentImages.length
    const preloadCount = 3 // Preload 3 images ahead and behind

    // Ensure current image is loaded (for thumbnail)
    loadImageIfNeeded(currentImageIndex)

    // Preload next images
    for (let i = 1; i <= preloadCount; i++) {
      const nextIndex = (currentImageIndex + i) % totalImages
      loadImageIfNeeded(nextIndex)
    }

    // Preload previous images
    for (let i = 1; i <= preloadCount; i++) {
      const prevIndex =
        currentImageIndex - i < 0 ? totalImages + (currentImageIndex - i) : currentImageIndex - i
      loadImageIfNeeded(prevIndex)
    }
  }, [selectedCollection, selectedModel, currentImageIndex, loadImageIfNeeded])
  */

  const openCollection = useCallback((collection: GalleryCollection) => {
    setSelectedCollection(collection)
    setSelectedModel(null)
    document.body.style.overflow = 'hidden'
  }, [])

  const openModel = useCallback((model: CarModel) => {
    setSelectedModel(model)
    setSelectedCollection(null)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeModal = useCallback(() => {
    setSelectedCollection(null)
    setSelectedModel(null)
    setLoadedImages(new Set())
    setCurrentImageIndex(0)
    document.body.style.overflow = 'unset'
  }, [])

  const goToPrevious = useCallback(() => {
    const currentImages = selectedCollection?.images || selectedModel?.images
    if (!currentImages) return
    setCurrentImageIndex((prevIndex) => {
      return prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
    })
  }, [selectedCollection, selectedModel])

  const goToNext = useCallback(() => {
    const currentImages = selectedCollection?.images || selectedModel?.images
    if (!currentImages) return
    setCurrentImageIndex((prevIndex) => {
      return (prevIndex + 1) % currentImages.length
    })
  }, [selectedCollection, selectedModel])

  useEffect(() => {
    if (!selectedCollection && !selectedModel) return

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
  }, [selectedCollection, selectedModel, goToPrevious, goToNext, closeModal])

  // Get current brand's models
  const currentBrand = carsData.find((brand) => brand.brandName === selectedBrand)
  const currentImages = selectedCollection?.images || selectedModel?.images
  const currentTitle = selectedCollection
    ? selectedCollection.folderName
    : selectedModel && selectedBrand
    ? `${formatName(selectedBrand)} ${formatName(selectedModel.modelName)}`
    : ''

  return (
    <div className="gallery-page">
      {/* Gallery Header */}
      <section className="gallery-header">
        <div className="gallery-header-content">
          <h3 className="gallery-header-subtitle">OUR WORK & ACHIEVEMENTS</h3>
          <h2 className="gallery-header-title">VISUAL EXCELLENCE IN EVERY PROJECT</h2>
        </div>
      </section>

      {/* Tabs */}
      <section className="gallery-tabs-section">
        <div className="gallery-tabs">
          <button
            className={`gallery-tab ${activeTab === 'events' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('events')
              setSelectedBrand(null)
            }}
          >
            Events
          </button>
          <button
            className={`gallery-tab ${activeTab === 'cars' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('cars')
              setSelectedBrand(null)
            }}
          >
            Cars
          </button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-content-section">
        {activeTab === 'events' ? (
          <>
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
                        alt={collection.folderName}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="gallery-thumbnail-overlay">
                        <div className="gallery-thumbnail-info">
                          <span className="gallery-image-count">
                            {collection.imageCount} photos
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="gallery-item-title">
                      <p>{collection.folderName}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            {carsLoading ? (
              <div className="gallery-loading">
                <div className="gallery-loading-spinner"></div>
                <p>Loading cars gallery...</p>
              </div>
            ) : selectedBrand === null ? (
              // Brand selection view
              <div className="gallery-grid">
                {carsData.length === 0 ? (
                  <div className="gallery-empty">
                    <p>No car brands available</p>
                  </div>
                ) : (
                  carsData.map((brand) => (
                    <div
                      key={brand.brandName}
                      className="gallery-item"
                      onClick={() => setSelectedBrand(brand.brandName)}
                    >
                      <div className="gallery-thumbnail-wrapper">
                        {brand.thumbnail ? (
                          <Image
                            src={brand.thumbnail}
                            alt={formatName(brand.brandName)}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="gallery-thumbnail-placeholder"></div>
                        )}
                        <div className="gallery-thumbnail-overlay">
                          <div className="gallery-thumbnail-info">
                            <span className="gallery-image-count">
                              {brand.models.reduce((sum, model) => sum + model.imageCount, 0)}{' '}
                              photos
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="gallery-item-title">
                        <p>{formatName(brand.brandName)}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            ) : currentBrand ? (
              // Model selection view
              <div className="gallery-grid">
                <div className="gallery-breadcrumb">
                  <button
                    className="gallery-breadcrumb-link"
                    onClick={() => setSelectedBrand(null)}
                  >
                    ← Back to Brands
                  </button>
                </div>
                {currentBrand.models.map((model) => (
                  <div
                    key={model.modelName}
                    className="gallery-item"
                    onClick={() => openModel(model)}
                  >
                    <div className="gallery-thumbnail-wrapper">
                      {model.thumbnail ? (
                        <Image
                          src={model.thumbnail}
                          alt={formatName(model.modelName)}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="gallery-thumbnail-placeholder"></div>
                      )}
                      <div className="gallery-thumbnail-overlay">
                        <div className="gallery-thumbnail-info">
                          <span className="gallery-image-count">{model.imageCount} photos</span>
                        </div>
                      </div>
                    </div>
                    <div className="gallery-item-title">
                      <p>{formatName(model.modelName)}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </>
        )}
      </section>

      {/* Photo Viewer Modal */}
      {(selectedCollection || selectedModel) && currentImages && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={closeModal} aria-label="Close">
              ×
            </button>

            <div className="gallery-modal-header">
              <h2>{currentTitle}</h2>
              <span className="gallery-modal-counter">
                {currentImageIndex + 1} / {currentImages.length}
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
                <Image
                  src={currentImages[currentImageIndex]}
                  alt={`${currentTitle} - Image ${currentImageIndex + 1}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="90vw"
                  priority={currentImageIndex < 8}
                />
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
              {currentImages.map((image, index) => (
                <div
                  key={index}
                  className={`gallery-modal-thumbnail ${
                    index === currentImageIndex ? 'active' : ''
                  }`}
                  onClick={() => {
                    setCurrentImageIndex(index)
                  }}
                >
                  {image ? (
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="80px"
                    />
                  ) : (
                    <div className="gallery-thumbnail-placeholder"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
