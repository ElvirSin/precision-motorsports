import Image from 'next/image'

interface VendorLogoProps {
  src: string
  alt: string
}

export default function VendorLogo({ src, alt }: VendorLogoProps) {
  return (
    <div className="vendor-logo">
      <Image
        src={src}
        alt={alt}
        width={120}
        height={80}
        style={{ objectFit: 'contain' }}
        loading="lazy"
        unoptimized={src.endsWith('.svg')}
      />
    </div>
  )
}
