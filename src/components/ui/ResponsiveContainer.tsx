import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ResponsiveContainerProps {
  children: ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export default function ResponsiveContainer({ 
  children, 
  className,
  as: Component = 'div'
}: ResponsiveContainerProps) {
  return (
    <Component className={cn('container-responsive', className)}>
      {children}
    </Component>
  )
}
