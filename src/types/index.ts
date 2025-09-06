export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  bio: string
  expertise: string[]
  linkedin?: string
  github?: string
  availability: 'full-time' | 'part-time' | 'available'
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  pricing?: {
    hourly?: number
    project?: number
    description: string
  }
  examples?: string[]
}

export interface PortfolioItem {
  id: string
  title: string
  description: string
  category: 'annotation' | 'evaluation' | 'qa' | 'custom'
  image: string
  technologies: string[]
  results?: string[]
  client?: string
  duration?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  image: string
  content: string
  rating: number
  date: string
}

export interface ContactForm {
  name: string
  email: string
  company?: string
  service: string
  message: string
  budget?: string
  timeline?: string
}

export interface NavItem {
  title: string
  href: string
  external?: boolean
}

export interface SocialLink {
  name: string
  href: string
  icon: string
}
