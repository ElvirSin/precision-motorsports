export interface ServiceData {
  title: string
  description: string
  examples: string[]
}

export const serviceDataMap: Record<string, ServiceData> = {
  PERFORMANCE: {
    title: 'UNLEASH PEAK PERFORMANCE',
    description:
      'Maximize your vehicle’s power, speed, and handling with precision tuning and upgrades.',
    examples: [
      'ECU Tuning',
      'Engine Builds',
      'TURBOCHARGERS',
      'Dyno Testing',
      'EXHAUST SYSTEMS',
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
      'Fluid Replacements',
      'Brake Servicing',
      'Tire Rotations',
      'Battery',
      'Air Filter',
      'Belt Inspections',
      'Spark Plugs',
      'Other',
    ],
  },
  REPAIR: {
    title: 'EXPERT REPAIR SERVICES',
    description:
      'Trust our skilled technicians to diagnose and repair any issue with precision and care.',
    examples: [
      'Engine Repairs',
      'Transmission Repairs',
      'Electrical Diagnostics',
      'Suspension Repairs',
      'Exhaust System Repairs',
      'Cooling System Repairs',
      'Steering Repairs',
      'Fuel System Repairs',
      'Other',
    ],
  },
  RESTORATION: {
    title: 'CLASSIC RESTORATION',
    description:
      'Restore your classic or exotic vehicle to its original glory with meticulous attention to detail.',
    examples: [
      'Exterior Restoration',
      'Interior Refinishing',
      'Drivetrain Rebuilds',
      'Concours Restoration',
      'Factory-Correct Restoration',
      'Restomod',
      'Mechanical Restoration',
      'Chrome Refinishing',
      'Other',
    ],
  },
  COSMETICS: {
    title: 'COSMETIC ENHANCEMENTS',
    description:
      'Enhance your vehicle’s appearance with premium cosmetic upgrades and refinements.',
    examples: [
      'Paint Protection Film',
      'Vinyl Wraps',
      'Ceramic Coating',
      'Custom Paint Jobs',
      'Detailing Services',
      'Headlight Restoration',
      'Window Tinting',
      'Wheel Polishing',
      'Other',
    ],
  },
  AUDIO: {
    title: 'PREMIUM AUDIO SYSTEMS',
    description:
      'Experience superior sound quality with our custom audio system installations and upgrades.',
    examples: [
      'Speaker Installations',
      'Subwoofers',
      'Soundproofing',
      'Amplifier Setups',
      'Custom Audio Systems',
      'Bluetooth Integration',
      'Navigation Systems',
      'Rear-Seat Entertainment',
      'Other',
    ],
  },
  WHEELS: {
    title: 'WHEEL & TIRE SERVICES',
    description: 'Upgrade your wheels and tires for enhanced performance, style, and handling.',
    examples: [
      'Custom Wheels',
      'Tire Installations',
      'Alignment',
      'Balancing',
      'Wheel Refinishing',
      'Wheel Spacers',
      'Winter Tire Setups',
      'Performance Tires',
      'Other',
    ],
  },
  AERODYNAMICS: {
    title: 'AERODYNAMIC ENHANCEMENTS',
    description:
      'Improve performance and aesthetics with precision-engineered aerodynamic components.',
    examples: [
      'Spoilers',
      'Diffusers',
      'Splitters',
      'Canards',
      'Full Aero Kits',
      'Hood Vents',
      'Side Skirts',
      'Active Aerodynamics',
      'Other',
    ],
  },
}
