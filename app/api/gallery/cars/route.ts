import { NextResponse } from 'next/server'
import { readdir } from 'fs/promises'
import { join } from 'path'

// Cache cars gallery data for 1 hour
let cachedCarsData: { brands: any[]; timestamp: number } | null = null
const CACHE_DURATION = 60 * 60 * 1000 // 1 hour in milliseconds

// Helper function to sort brands alphabetically
function sortBrands(brands: any[]): any[] {
  return brands.sort((a, b) => a.brandName.toLowerCase().localeCompare(b.brandName.toLowerCase()))
}

// Helper function to sort models alphabetically
function sortModels(models: any[]): any[] {
  return models.sort((a, b) => a.modelName.toLowerCase().localeCompare(b.modelName.toLowerCase()))
}

export async function GET() {
  try {
    // Check cache first
    if (cachedCarsData && Date.now() - cachedCarsData.timestamp < CACHE_DURATION) {
      // Ensure cached data is sorted
      const sortedBrands = sortBrands([...cachedCarsData.brands]).map((brand) => ({
        ...brand,
        models: sortModels([...brand.models]),
      }))
      return NextResponse.json(
        { brands: sortedBrands },
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
            const brandFiles = await readdir(brandPath)

            // Check if brand folder has a thumbnail.webp
            // Use /cars/ path for Vercel compatibility
            const brandThumbnail = brandFiles.some(
              (file) => file.toLowerCase() === 'thumbnail.webp',
            )
              ? `/cars/${brandDirent.name}/thumbnail.webp`
              : null

            const modelDirs = await readdir(brandPath, { withFileTypes: true })

            const models = await Promise.all(
              modelDirs
                .filter((dirent) => dirent.isDirectory())
                .map(async (modelDirent) => {
                  const modelPath = join(brandPath, modelDirent.name)
                  const files = await readdir(modelPath)

                  // Check if model folder has a thumbnail.webp
                  const hasThumbnail = files.some((file) => file.toLowerCase() === 'thumbnail.webp')

                  // Filter for image files (webp, jpg, jpeg, png), excluding thumbnail.webp
                  const images = files
                    .filter(
                      (file) =>
                        (file.toLowerCase().endsWith('.webp') ||
                          file.toLowerCase().endsWith('.jpg') ||
                          file.toLowerCase().endsWith('.jpeg') ||
                          file.toLowerCase().endsWith('.png')) &&
                        file.toLowerCase() !== 'thumbnail.webp',
                    )
                    .sort()

                  // Use thumbnail.webp if it exists, otherwise use first image
                  // Use /cars/ path for Vercel compatibility
                  let thumbnail: string | null = null
                  if (hasThumbnail) {
                    thumbnail = `/cars/${brandDirent.name}/${modelDirent.name}/thumbnail.webp`
                  } else if (images.length > 0) {
                    thumbnail = `/cars/${brandDirent.name}/${modelDirent.name}/${images[0]}`
                  }

                  return {
                    modelName: modelDirent.name,
                    thumbnail,
                    images: images.map(
                      (img) => `/cars/${brandDirent.name}/${modelDirent.name}/${img}`,
                    ),
                    imageCount: images.length,
                  }
                }),
            )

            // Filter out models with no images
            const validModels = models.filter((model) => model.imageCount > 0)

            // Sort models alphabetically by modelName
            sortModels(validModels)

            // Determine brand thumbnail: use brand thumbnail if exists, otherwise use first model's thumbnail
            let finalBrandThumbnail = brandThumbnail
            if (!finalBrandThumbnail && validModels.length > 0 && validModels[0].thumbnail) {
              finalBrandThumbnail = validModels[0].thumbnail
            }

            return {
              brandName: brandDirent.name,
              thumbnail: finalBrandThumbnail,
              models: validModels,
            }
          }),
      )

      // Filter out brands with no valid models
      brands = brands.filter((brand) => brand.models.length > 0)

      // Sort brands alphabetically by brandName
      brands = sortBrands(brands)
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
