'use client'

import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import Image from 'next/image'
import '../styles.css'

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

const BATCH_SIZE = 5
const BATCH_DELAY = 50
const INITIAL_LOAD_DELAY = 100
const PRELOAD_RADIUS = 5 // Preload 5 images ahead and behind current

function formatName(name: string): string {
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
  const loadingRef = useRef<{
    timeoutId: NodeJS.Timeout | null
    images: string[] | null
  }>({
    timeoutId: null,
    images: null,
  })

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
    if (activeTab !== 'cars' || carsData.length > 0) return

    let cancelled = false

    async function fetchCarsData() {
      setCarsLoading(true)
      try {
        const response = await fetch('/api/gallery/cars')
        const data = await response.json()
        if (cancelled) return

        const sortedBrands = (data.brands || [])
          .map((brand: CarBrand) => ({
            ...brand,
            models: [...brand.models].sort((a, b) =>
              a.modelName.toLowerCase().localeCompare(b.modelName.toLowerCase()),
            ),
          }))
          .sort((a: CarBrand, b: CarBrand) =>
            a.brandName.toLowerCase().localeCompare(b.brandName.toLowerCase()),
          )
        setCarsData(sortedBrands)
      } catch (error) {
        console.error('Error fetching cars gallery:', error)
      } finally {
        if (!cancelled) setCarsLoading(false)
      }
    }

    fetchCarsData()

    return () => {
      cancelled = true
    }
  }, [activeTab, carsData.length])

  // Initialize: Load first image immediately when modal opens, then start batch loading
  useEffect(() => {
    const currentImages = selectedCollection?.images || selectedModel?.images
    const isModalOpen = !!(selectedCollection || selectedModel)

    if (!isModalOpen) {
      if (loadingRef.current.timeoutId) {
        clearTimeout(loadingRef.current.timeoutId)
        loadingRef.current.timeoutId = null
      }
      loadingRef.current.images = null
      return
    }

    if (!currentImages?.length) return

    // Stop any existing loading process
    if (loadingRef.current.timeoutId) {
      clearTimeout(loadingRef.current.timeoutId)
      loadingRef.current.timeoutId = null
    }

    // Reset state and immediately mark first image for loading
    setLoadedImages(new Set([0]))
    setCurrentImageIndex(0)
    loadingRef.current.images = currentImages

    const totalImages = currentImages.length

    // Function to load next batch of images
    const loadNextBatch = () => {
      if (!isModalOpen || !loadingRef.current.images) return

      setLoadedImages((prevLoaded) => {
        // Find the next unloaded image index
        let nextIndexToLoad = -1
        for (let i = 0; i < totalImages; i++) {
          if (!prevLoaded.has(i)) {
            nextIndexToLoad = i
            break
          }
        }

        // If all images are loaded, stop
        if (nextIndexToLoad === -1) return prevLoaded

        // Mark images in batch for loading (avoid duplicates)
        const batchIndices: number[] = []
        for (let i = 0; i < BATCH_SIZE && nextIndexToLoad + i < totalImages; i++) {
          const index = nextIndexToLoad + i
          if (!prevLoaded.has(index)) {
            batchIndices.push(index)
          }
        }

        if (batchIndices.length > 0) {
          // Preload images into browser cache using native Image objects
          batchIndices.forEach((index) => {
            const img = new window.Image()
            img.src = currentImages[index]
          })

          // Create updated set with new loaded images
          const updated = new Set(prevLoaded)
          batchIndices.forEach((idx) => updated.add(idx))

          // Schedule next batch
          loadingRef.current.timeoutId = setTimeout(loadNextBatch, BATCH_DELAY)

          return updated
        }

        return prevLoaded
      })
    }

    // Start loading batches after a short delay
    loadingRef.current.timeoutId = setTimeout(loadNextBatch, INITIAL_LOAD_DELAY)

    return () => {
      if (loadingRef.current.timeoutId) {
        clearTimeout(loadingRef.current.timeoutId)
        loadingRef.current.timeoutId = null
      }
    }
  }, [selectedCollection, selectedModel])

  // Memoize computed values
  const currentBrand = useMemo(
    () => carsData.find((brand) => brand.brandName === selectedBrand),
    [carsData, selectedBrand],
  )

  const currentImages = useMemo(
    () => selectedCollection?.images || selectedModel?.images,
    [selectedCollection, selectedModel],
  )

  const currentTitle = useMemo(() => {
    if (selectedCollection) return selectedCollection.folderName
    if (selectedModel && selectedBrand) {
      return `${formatName(selectedBrand)} ${formatName(selectedModel.modelName)}`
    }
    return ''
  }, [selectedCollection, selectedModel, selectedBrand])

  // Aggressively preload images around current index for instant navigation
  useEffect(() => {
    if (!currentImages?.length) return
    if (!selectedCollection && !selectedModel) return

    const totalImages = currentImages.length
    const indicesToPreload: number[] = []

    // Use functional update to check current state without dependency
    setLoadedImages((prevLoaded) => {
      // Preload images around current index (circular)
      for (let i = -PRELOAD_RADIUS; i <= PRELOAD_RADIUS; i++) {
        let index = currentImageIndex + i
        if (index < 0) index = totalImages + index
        if (index >= totalImages) index = index - totalImages

        if (index >= 0 && index < totalImages && !prevLoaded.has(index)) {
          indicesToPreload.push(index)
        }
      }

      if (indicesToPreload.length > 0) {
        // Immediately preload these images
        indicesToPreload.forEach((index) => {
          const img = new window.Image()
          img.src = currentImages[index]
        })

        // Create updated set with new loaded images
        const updated = new Set(prevLoaded)
        indicesToPreload.forEach((idx) => updated.add(idx))
        return updated
      }

      return prevLoaded
    })
  }, [currentImageIndex, currentImages, selectedCollection, selectedModel])

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
    document.body.style.overflow = 'unset'
  }, [])

  const goToPrevious = useCallback(() => {
    if (!currentImages?.length) return
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1,
    )
  }, [currentImages])

  const goToNext = useCallback(() => {
    if (!currentImages?.length) return
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentImages.length)
  }, [currentImages])

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
                  key={currentImageIndex}
                  src={currentImages[currentImageIndex]}
                  alt={`${currentTitle} - Image ${currentImageIndex + 1}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="90vw"
                  priority={currentImageIndex === 0}
                  unoptimized={true}
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
                  onClick={() => setCurrentImageIndex(index)}
                >
                  {loadedImages.has(index) ? (
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="80px"
                      unoptimized={true}
                    />
                  ) : (
                    <div className="gallery-thumbnail-placeholder" />
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
