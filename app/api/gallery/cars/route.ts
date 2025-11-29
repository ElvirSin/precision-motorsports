import { NextResponse } from 'next/server'
import { readdir } from 'fs/promises'
import { join } from 'path'

// Cache cars gallery data for 1 hour
let cachedCarsData: { brands: any[]; timestamp: number } | null = null
const CACHE_DURATION = 60 * 60 * 1000 // 1 hour in milliseconds

export async function GET() {
  try {
    // Check cache first
    if (cachedCarsData && Date.now() - cachedCarsData.timestamp < CACHE_DURATION) {
      return NextResponse.json(
        { brands: cachedCarsData.brands },
        {
          headers: {
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        },
      )
    }

    const carsPath = join(process.cwd(), 'public', 'gallery', 'cars')

    // Check if cars directory exists
    let brands: any[] = []
    try {
      const brandDirs = await readdir(carsPath, { withFileTypes: true })

      brands = await Promise.all(
        brandDirs
          .filter((dirent) => dirent.isDirectory())
          .map(async (brandDirent) => {
            const brandPath = join(carsPath, brandDirent.name)
            const modelDirs = await readdir(brandPath, { withFileTypes: true })

            const models = await Promise.all(
              modelDirs
                .filter((dirent) => dirent.isDirectory())
                .map(async (modelDirent) => {
                  const modelPath = join(brandPath, modelDirent.name)
                  const files = await readdir(modelPath)

                  // Filter for image files (webp, jpg, jpeg, png)
                  const images = files
                    .filter(
                      (file) =>
                        file.toLowerCase().endsWith('.webp') ||
                        file.toLowerCase().endsWith('.jpg') ||
                        file.toLowerCase().endsWith('.jpeg') ||
                        file.toLowerCase().endsWith('.png'),
                    )
                    .sort()

                  // Use first image as thumbnail, or null if no images
                  const thumbnail =
                    images.length > 0
                      ? `/gallery/cars/${brandDirent.name}/${modelDirent.name}/${images[0]}`
                      : null

                  return {
                    modelName: modelDirent.name,
                    thumbnail,
                    images: images.map(
                      (img) => `/gallery/cars/${brandDirent.name}/${modelDirent.name}/${img}`,
                    ),
                    imageCount: images.length,
                  }
                }),
            )

            // Filter out models with no images
            const validModels = models.filter((model) => model.imageCount > 0)

            return {
              brandName: brandDirent.name,
              models: validModels,
            }
          }),
      )

      // Filter out brands with no valid models
      brands = brands.filter((brand) => brand.models.length > 0)
    } catch (error) {
      // If cars directory doesn't exist, return empty array
      console.log('Cars gallery directory not found or empty')
    }

    // Update cache
    cachedCarsData = {
      brands,
      timestamp: Date.now(),
    }

    return NextResponse.json(
      { brands },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      },
    )
  } catch (error) {
    console.error('Error reading cars gallery:', error)
    return NextResponse.json({ error: 'Failed to load cars gallery' }, { status: 500 })
  }
}
