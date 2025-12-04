import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project Gallery | Precision European & Exotic Builds',
  description:
    'Explore our gallery of European, exotic, and custom car builds. See how Precision Motorsports transforms performance and style in every project.',
  keywords:
    "Discover Precision Motorsports' gallery featuring custom builds, performance upgrades, and styling for European and exotic vehicles. Serving Farmington Hills, Novi, Northville, West Bloomfield and the surrounding areas.",
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
