import { NextResponse } from 'next/server'
import { list } from '@vercel/blob'

// Cache promotion data for 5 minutes
let cachedPromotionData: { hasPromotion: boolean; imageUrl?: string; timestamp: number } | null =
  null
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes in milliseconds

export async function GET() {
  try {
    // Check cache first
    if (cachedPromotionData && Date.now() - cachedPromotionData.timestamp < CACHE_DURATION) {
      return NextResponse.json(
        {
          hasPromotion: cachedPromotionData.hasPromotion,
          ...(cachedPromotionData.imageUrl && { imageUrl: cachedPromotionData.imageUrl }),
        },
        {
          headers: {
            'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
          },
        },
      )
    }

    const token = process.env.GALLERY_READ_WRITE_TOKEN
    if (!token) {
      console.error('GALLERY_READ_WRITE_TOKEN is not set')
      return NextResponse.json({ error: 'Gallery token not configured' }, { status: 500 })
    }

    // List all blobs in the current-promotions folder
    const { blobs } = await list({
      token,
      prefix: 'current-promotions/',
    })

    // Filter for image files (common formats)
    const imageBlobs = blobs.filter(
      (blob) =>
        blob.pathname.toLowerCase().endsWith('.png') ||
        blob.pathname.toLowerCase().endsWith('.jpg') ||
        blob.pathname.toLowerCase().endsWith('.jpeg') ||
        blob.pathname.toLowerCase().endsWith('.webp') ||
        blob.pathname.toLowerCase().endsWith('.gif'),
    )

    // Randomly select one promotion if there are multiple
    const result =
      imageBlobs.length > 0
        ? {
            hasPromotion: true,
            imageUrl: imageBlobs[Math.floor(Math.random() * imageBlobs.length)].url,
          }
        : { hasPromotion: false }

    // Update cache
    cachedPromotionData = {
      ...result,
      timestamp: Date.now(),
    }

    return NextResponse.json(result, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    })
  } catch (error) {
    console.error('Error reading promotion from blob storage:', error)
    return NextResponse.json(
      { hasPromotion: false },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
        },
      },
    )
  }
}
