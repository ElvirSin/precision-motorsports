import { NextResponse } from 'next/server'
import { readdir, readFile } from 'fs/promises'
import { join } from 'path'

export async function GET() {
  try {
    const galleryPath = join(process.cwd(), 'public', 'gallery')
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
            thumbnail: `/gallery/${dirent.name}/thumbnail.webp`,
            images: images.map((img) => `/gallery/${dirent.name}/${img}`),
            imageCount: images.length,
          }
        }),
    )

    return NextResponse.json({ collections: galleryCollections })
  } catch (error) {
    console.error('Error reading gallery:', error)
    return NextResponse.json({ error: 'Failed to load gallery' }, { status: 500 })
  }
}
