import { NextResponse } from 'next/server'
import { readdir } from 'fs/promises'
import { join } from 'path'

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

    const promotionPath = join(process.cwd(), 'public', 'current-promotion')
    const files = await readdir(promotionPath)

    // Filter for image files (common formats)
    const imageFiles = files.filter(
      (file) =>
        file.endsWith('.png') ||
        file.endsWith('.jpg') ||
        file.endsWith('.jpeg') ||
        file.endsWith('.webp') ||
        file.endsWith('.gif'),
    )

    // Return the first image found (there should be at most 1)
    const result =
      imageFiles.length > 0
        ? {
            hasPromotion: true,
            imageUrl: `/current-promotion/${imageFiles[0]}`,
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
    console.error('Error reading promotion folder:', error)
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
