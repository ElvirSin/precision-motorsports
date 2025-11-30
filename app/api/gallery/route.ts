import { NextResponse } from 'next/server'
import { list } from '@vercel/blob'

// Cache gallery data for 1 hour
let cachedGalleryData: { collections: any[]; timestamp: number } | null = null
const CACHE_DURATION = 60 * 60 * 1000 // 1 hour in milliseconds

export async function GET() {
  try {
    // Check cache first
    if (cachedGalleryData && Date.now() - cachedGalleryData.timestamp < CACHE_DURATION) {
      return NextResponse.json(
        { collections: cachedGalleryData.collections },
        {
          headers: {
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        },
      )
    }

    const token = process.env.GALLERY_READ_WRITE_TOKEN
    if (!token) {
      console.error('GALLERY_READ_WRITE_TOKEN is not set')
      return NextResponse.json({ error: 'Gallery token not configured' }, { status: 500 })
    }

    // List all blobs in the events folder
    const { blobs } = await list({
      token,
      prefix: 'events/',
    })

    // Group blobs by collection folder name
    const collectionsMap = new Map<string, { images: string[]; thumbnail: string | null }>()

    for (const blob of blobs) {
      // Extract collection name from path: events/{collectionName}/{fileName}
      const pathParts = blob.pathname.split('/')
      if (pathParts.length >= 3 && pathParts[0] === 'events') {
        const collectionName = pathParts[1]
        const fileName = pathParts.slice(2).join('/')

        if (!collectionsMap.has(collectionName)) {
          collectionsMap.set(collectionName, { images: [], thumbnail: null })
        }

        const collection = collectionsMap.get(collectionName)!

        // Check if it's a thumbnail
        if (fileName.toLowerCase() === 'thumbnail.webp') {
          collection.thumbnail = blob.url
        } else if (
          fileName.toLowerCase().endsWith('.webp') ||
          fileName.toLowerCase().endsWith('.jpg') ||
          fileName.toLowerCase().endsWith('.jpeg') ||
          fileName.toLowerCase().endsWith('.png')
        ) {
          collection.images.push(blob.url)
        }
      }
    }

    // Convert map to array and format response
    const galleryCollections = Array.from(collectionsMap.entries())
      .map(([folderName, data]) => {
        // Sort images
        data.images.sort()

        // If no thumbnail found, use first image as thumbnail
        const thumbnail = data.thumbnail || (data.images.length > 0 ? data.images[0] : null)

        return {
          folderName,
          thumbnail,
          images: data.images,
          imageCount: data.images.length,
        }
      })
      .filter((collection) => collection.imageCount > 0) // Only include collections with images

    // Update cache
    cachedGalleryData = {
      collections: galleryCollections,
      timestamp: Date.now(),
    }

    return NextResponse.json(
      { collections: galleryCollections },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      },
    )
  } catch (error) {
    console.error('Error reading gallery from blob storage:', error)
    return NextResponse.json({ error: 'Failed to load gallery' }, { status: 500 })
  }
}
