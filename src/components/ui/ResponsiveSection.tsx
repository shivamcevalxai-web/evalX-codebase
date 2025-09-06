import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ResponsiveSectionProps {
  children: ReactNode
  className?: string
  id?: string
  background?: 'white' | 'gray' | 'gradient'
}

export default function ResponsiveSection({ 
  children, 
  className,
  id,
  background = 'white'
}: ResponsiveSectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-evalx-blue/5 via-evalx-purple/5 to-evalx-cyan/5'
  }

  return (
    <section 
      id={id}
      className={cn(
        'section-padding',
        backgroundClasses[background],
        className
      )}
    >
      <div className="container-responsive">
        {children}
      </div>
    </section>
  )
}
