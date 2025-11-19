import { NextResponse } from 'next/server'
import { readdir } from 'fs/promises'
import { join } from 'path'

export async function GET() {
  try {
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
    if (imageFiles.length > 0) {
      return NextResponse.json({
        hasPromotion: true,
        imageUrl: `/current-promotion/${imageFiles[0]}`,
      })
    }

    return NextResponse.json({ hasPromotion: false })
  } catch (error) {
    console.error('Error reading promotion folder:', error)
    return NextResponse.json({ hasPromotion: false })
  }
}
