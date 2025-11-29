import { NextResponse } from 'next/server'
import { readdir } from 'fs/promises'
import { join } from 'path'

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

    const galleryPath = join(process.cwd(), 'public', 'gallery', 'events')
    const collections = await readdir(galleryPath, { withFileTypes: true })

    const galleryCollections = await Promise.all(
      collections
        .filter((dirent) => dirent.isDirectory())
        .map(async (dirent) => {
          const collectionPath = join(galleryPath, dirent.name)
          const files = await readdir(collectionPath)

          // Filter out non-webp files and get all images except thumbnail
          const images = files
            .filter((file) => file.endsWith('.webp') && file !== 'thumbnail.webp')
            .sort()

          return {
            folderName: dirent.name,
            thumbnail: `/gallery/events/${dirent.name}/thumbnail.webp`,
            images: images.map((img) => `/gallery/events/${dirent.name}/${img}`),
            imageCount: images.length,
          }
        }),
    )

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
    console.error('Error reading gallery:', error)
    return NextResponse.json({ error: 'Failed to load gallery' }, { status: 500 })
  }
}
