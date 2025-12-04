import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Car Maintenance, Repairs & Performance Upgrades | Farmington Hills',
  description:
    'Explore our expert services for European and exotic cars, including maintenance, repairs, and performance upgrades. Serving Farmington Hills, MI.',
  keywords:
    'Precision Motorsports offers specialized services for European and exotic vehicles, including maintenance, repairs, and performance enhancements. Serving Farmington Hills, MI, and surrounding areas.',
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
