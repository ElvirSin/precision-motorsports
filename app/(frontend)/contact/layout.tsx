import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Precision Motorsports | Farmington Hills, MI',
  description:
    'Get in touch with Precision Motorsports for expert European and exotic car services. Visit our Farmington Hills location or contact us today!',
  keywords:
    'Contact Precision Motorsports for expert service, repairs, and performance upgrades for European and exotic vehicles. Located in Farmington Hills, MI.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
