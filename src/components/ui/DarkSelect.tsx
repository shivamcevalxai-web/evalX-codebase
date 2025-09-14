'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export interface Option {
  label: string
  value: string
}

interface DarkSelectProps {
  name: string
  placeholder?: string
  options: Option[]
  required?: boolean
  className?: string
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
}

export default function DarkSelect({ name, placeholder = 'Select', options, required, className, defaultValue, value: controlledValue, onChange }: DarkSelectProps) {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number>(-1)
  const [internalValue, setInternalValue] = useState<Option | null>(() => {
    if (controlledValue) {
      return options.find(opt => opt.value === controlledValue) || null
    }
    if (defaultValue) {
      return options.find(opt => opt.value === defaultValue) || null
    }
    return null
  })

  // Use controlled value if provided, otherwise use internal value
  const value = controlledValue ? options.find(opt => opt.value === controlledValue) || null : internalValue
  const [dropdownPosition, setDropdownPosition] = useState<'top' | 'bottom'>('bottom')
  const ref = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLUListElement>(null)

  // Calculate dropdown position to prevent going outside screen
  useEffect(() => {
    if (open && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const dropdownHeight = 256 // max-h-64 = 16rem = 256px
      const spaceBelow = viewportHeight - buttonRect.bottom
      const spaceAbove = buttonRect.top

      if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
        setDropdownPosition('top')
      } else {
        setDropdownPosition('bottom')
      }
    }
  }, [open])

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  function onKeyDown(e: React.KeyboardEvent) {
    if (!open) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        setOpen(true)
        setActiveIndex(0)
      }
      return
    }
    if (e.key === 'Escape') setOpen(false)
    if (e.key === 'ArrowDown') setActiveIndex((i) => Math.min(options.length - 1, Math.max(0, i + 1)))
    if (e.key === 'ArrowUp') setActiveIndex((i) => Math.max(0, (i === -1 ? 0 : i - 1)))
    if (e.key === 'Enter') {
      const opt = options[activeIndex]
      if (opt) {
        if (onChange) {
          onChange(opt.value)
        } else {
          setInternalValue(opt)
        }
        setOpen(false)
      }
    }
  }

  // Scroll active item into view
  useEffect(() => {
    if (open && dropdownRef.current && activeIndex >= 0) {
      const activeElement = dropdownRef.current.children[activeIndex] as HTMLElement
      if (activeElement) {
        activeElement.scrollIntoView({
          block: 'nearest',
          behavior: 'smooth'
        })
      }
    }
  }, [activeIndex, open])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <input type="hidden" name={name} required={required} value={value?.value ?? ''} />
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onKeyDown}
        className="w-full rounded-xl border border-gray-600/50 bg-white/5 backdrop-blur-sm text-white px-4 py-3 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-evalx-blue/50 hover:bg-white/10 hover:border-evalx-blue/30 transition-all duration-200 shadow-sm"
      >
        <span className={value ? 'text-white font-medium' : 'text-gray-400'}>
          {value?.label ?? placeholder}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: dropdownPosition === 'top' ? 10 : -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: dropdownPosition === 'top' ? 10 : -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`absolute z-50 w-full ${
              dropdownPosition === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
            } left-0 right-0`}
          >
            <div className="relative">
              {/* Custom scrollbar container */}
              <div className="max-h-64 overflow-y-auto scrollbar-thin">
                <motion.ul
                  ref={dropdownRef}
                  role="listbox"
                  className="rounded-xl border border-gray-600/50 bg-gray-900/95 backdrop-blur-md shadow-2xl ring-1 ring-black/20"
                >
                  {options.map((opt, idx) => (
                    <motion.li
                      role="option"
                      aria-selected={value?.value === opt.value}
                      key={opt.value}
                      onMouseEnter={() => setActiveIndex(idx)}
                      onClick={() => {
                        if (onChange) {
                          onChange(opt.value)
                        } else {
                          setInternalValue(opt)
                        }
                        setOpen(false)
                      }}
                      className={`px-4 py-3 cursor-pointer transition-all duration-150 first:rounded-t-xl last:rounded-b-xl ${
                        idx === activeIndex ? 'bg-evalx-blue/20 text-evalx-blue' : ''
                      } ${
                        value?.value === opt.value 
                          ? 'text-evalx-blue font-semibold bg-evalx-blue/10' 
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                      whileHover={{ x: 2 }}
                    >
                      <span className="block truncate">{opt.label}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              
              {/* Dropdown arrow */}
              <div className={`absolute left-4 w-0 h-0 ${
                dropdownPosition === 'top' 
                  ? 'top-full border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-600/50' 
                  : 'bottom-full border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-600/50'
              }`} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
