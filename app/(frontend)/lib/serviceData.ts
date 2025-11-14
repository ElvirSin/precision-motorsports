export interface ServiceData {
  title: string
  description: string
  examples: string[]
}

export const serviceDataMap: Record<string, ServiceData> = {
  PERFORMANCE: {
    title: 'UNLEASH PEAK PERFORMANCE',
    description:
      "Maximize your vehicle's power, speed, and handling with precision tuning and upgrades.",
    examples: [
      'ECU Tuning',
      'Engine Builds',
      'Turbo And Supercharger Installations',
      'Dyno Testing',
      'Performance Exhaust Systems',
      'Cold Air Intakes',
      'Suspension Tuning',
      'Fuel System Upgrades',
      'Other',
    ],
  },
  SERVICE: {
    title: 'COMPREHENSIVE MAINTENANCE SERVICE',
    description:
      'Keep your vehicle running at peak condition with our expert maintenance and service programs.',
    examples: [
      'Oil Changes',
      'Fluid Flushes',
      'Brake Service',
      'Battery Replacement',
      'Filter Replacements',
      'Scheduled Maintenance',
      'Pre-Purchase Inspections',
      'Diagnostic Services',
      'Other',
    ],
  },
  REPAIR: {
    title: 'EXPERT REPAIR SERVICES',
    description:
      'Trust our skilled technicians to diagnose and repair any issue with precision and care.',
    examples: [
      'Engine Repairs',
      'Transmission Service',
      'Electrical Diagnostics',
      'Cooling System Repairs',
      'Suspension Repairs',
      'Brake System Repairs',
      'AC System Service',
      'Exhaust Repairs',
      'Other',
    ],
  },
  RESTORATION: {
    title: 'CLASSIC RESTORATION',
    description:
      'Restore your classic or exotic vehicle to its original glory with meticulous attention to detail.',
    examples: [
      'Full Restoration',
      'Paint Restoration',
      'Interior Restoration',
      'Engine Rebuild',
      'Chassis Restoration',
      'Trim Restoration',
      'Period-Correct Modifications',
      'Documentation Services',
      'Other',
    ],
  },
  COSMETICS: {
    title: 'COSMETIC ENHANCEMENTS',
    description:
      'Enhance your vehicle’s appearance with premium cosmetic upgrades and refinements.',
    examples: [
      'Paint Protection Film',
      'Ceramic Coating',
      'Custom Paint',
      'Vinyl Wraps',
      'Carbon Fiber Parts',
      'Chrome Delete',
      'Badge Customization',
      'Interior Upgrades',
      'Other',
    ],
  },
  AUDIO: {
    title: 'PREMIUM AUDIO SYSTEMS',
    description:
      'Experience superior sound quality with our custom audio system installations and upgrades.',
    examples: [
      'Premium Speaker Installation',
      'Subwoofer Systems',
      'Amplifier Upgrades',
      'Head Unit Replacement',
      'Sound Deadening',
      'Custom Enclosures',
      'Bluetooth Integration',
      'Audio Tuning',
      'Other',
    ],
  },
  WHEELS: {
    title: 'WHEEL & TIRE SERVICES',
    description: 'Upgrade your wheels and tires for enhanced performance, style, and handling.',
    examples: [
      'Custom Wheel Installation',
      'Tire Selection & Mounting',
      'Wheel Refinishing',
      'TPMS Installation',
      'Wheel Alignment',
      'Spacers & Adapters',
      'Lug Nut Upgrades',
      'Wheel Protection',
      'Other',
    ],
  },
  AERODYNAMICS: {
    title: 'AERODYNAMIC ENHANCEMENTS',
    description:
      'Improve performance and aesthetics with precision-engineered aerodynamic components.',
    examples: [
      'Front Splitters',
      'Rear Wings',
      'Side Skirts',
      'Diffusers',
      'Canards',
      'Hood Vents',
      'Roof Spoilers',
      'Aero Testing',
      'Other',
    ],
  },
}
