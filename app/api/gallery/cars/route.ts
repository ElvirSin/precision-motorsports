import { NextResponse } from 'next/server'
import { list } from '@vercel/blob'

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

    const token = process.env.GALLERY_READ_WRITE_TOKEN
    if (!token) {
      console.error('GALLERY_READ_WRITE_TOKEN is not set')
      return NextResponse.json({ error: 'Gallery token not configured' }, { status: 500 })
    }

    // List all blobs in the cars folder
    const { blobs } = await list({
      token,
      prefix: 'cars/',
    })

    // Group blobs by brand and model: cars/{brandName}/{modelName}/{fileName}
    const brandsMap = new Map<
      string,
      {
        thumbnail: string | null
        models: Map<
          string,
          {
            thumbnail: string | null
            images: string[]
          }
        >
      }
    >()

    for (const blob of blobs) {
      // Extract brand, model, and filename from path
      // Structure: cars/{brandName}/thumbnail.webp OR cars/{brandName}/{modelName}/{fileName}
      const pathParts = blob.pathname.split('/')
      if (pathParts.length < 3 || pathParts[0] !== 'cars') continue

      const brandName = pathParts[1]

      if (!brandsMap.has(brandName)) {
        brandsMap.set(brandName, {
          thumbnail: null,
          models: new Map(),
        })
      }

      const brand = brandsMap.get(brandName)!

      // Check if it's a brand thumbnail: cars/{brandName}/thumbnail.webp
      if (pathParts.length === 3 && pathParts[2].toLowerCase() === 'thumbnail.webp') {
        brand.thumbnail = blob.url
        continue
      }

      // Handle model images: cars/{brandName}/{modelName}/{fileName}
      if (pathParts.length >= 4) {
        const modelName = pathParts[2]
        const fileName = pathParts.slice(3).join('/')

        if (!brand.models.has(modelName)) {
          brand.models.set(modelName, {
            thumbnail: null,
            images: [],
          })
        }

        const model = brand.models.get(modelName)!

        // Check if it's a model thumbnail
        if (fileName.toLowerCase() === 'thumbnail.webp') {
          model.thumbnail = blob.url
        } else if (
          fileName.toLowerCase().endsWith('.webp') ||
          fileName.toLowerCase().endsWith('.jpg') ||
          fileName.toLowerCase().endsWith('.jpeg') ||
          fileName.toLowerCase().endsWith('.png')
        ) {
          model.images.push(blob.url)
        }
      }
    }

    // Convert map to array and format response
    const brands = Array.from(brandsMap.entries())
      .map(([brandName, brandData]) => {
        const models = Array.from(brandData.models.entries())
          .map(([modelName, modelData]) => {
            // Sort images
            modelData.images.sort()

            // Use thumbnail if exists, otherwise use first image
            const thumbnail =
              modelData.thumbnail || (modelData.images.length > 0 ? modelData.images[0] : null)

            return {
              modelName,
              thumbnail,
              images: modelData.images,
              imageCount: modelData.images.length,
            }
          })
          .filter((model) => model.imageCount > 0) // Only include models with images

        // Sort models alphabetically
        sortModels(models)

        // Determine brand thumbnail: use brand thumbnail if exists, otherwise use first model's thumbnail
        let finalBrandThumbnail = brandData.thumbnail
        if (!finalBrandThumbnail && models.length > 0 && models[0].thumbnail) {
          finalBrandThumbnail = models[0].thumbnail
        }

        return {
          brandName,
          thumbnail: finalBrandThumbnail,
          models,
        }
      })
      .filter((brand) => brand.models.length > 0) // Only include brands with valid models

    // Sort brands alphabetically
    const sortedBrands = sortBrands(brands)

    // Update cache
    cachedCarsData = {
      brands: sortedBrands,
      timestamp: Date.now(),
    }

    return NextResponse.json(
      { brands: sortedBrands },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      },
    )
  } catch (error) {
    console.error('Error reading cars gallery from blob storage:', error)
    return NextResponse.json({ error: 'Failed to load cars gallery' }, { status: 500 })
  }
}
