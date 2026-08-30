export interface ProjectCase {
  id: string
  number: string
  title: string
  subtitle: string
  client: string
  year: string
  role: string
  category: 'WEBGL & 3D' | 'AI PRODUCT' | 'IMMERSIVE BRAND' | 'SPATIAL XR' | 'LUXURY MOTION'
  tags: string[]
  awards: string[]
  metrics: { label: string; value: string }[]
  thumbnail: string
  accentColor: string
  description: string
  challenge: string
  solution: string
  techStack: string[]
  link?: string
}

export interface ServiceItem {
  id: string
  number: string
  title: string
  tagline: string
  description: string
  features: string[]
  icon: string
  badge: string
}

export interface AwardItem {
  id: string
  year: string
  title: string
  organization: string
  project: string
  badge: string
}

export interface ShaderUniforms {
  uTime: { value: number }
  uMouse: { value: { x: number; y: number } }
  uDispersion: { value: number }
  uRoughness: { value: number }
  uTransmission: { value: number }
  uColorTheme: { value: number }
  uResolution: { value: { x: number; y: number } }
  uScrollVelocity: { value: number }
}

export type CursorState = 'DEFAULT' | 'HOVER' | 'VIEW_CASE' | 'DRAG' | 'TWEAK' | 'MAGNETIC'
