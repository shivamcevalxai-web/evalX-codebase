'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export interface Option {
  label: string
  value: string
}

interface SelectProps {
  name: string
  placeholder?: string
  options: Option[]
  required?: boolean
  className?: string
}

export default function Select({ name, placeholder = 'Select', options, required, className }: SelectProps) {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number>(-1)
  const [value, setValue] = useState<Option | null>(null)
  const ref = useRef<HTMLDivElement>(null)

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
        setValue(opt)
        setOpen(false)
      }
    }
  }

  return (
    <div ref={ref} className={className}>
      <input type="hidden" name={name} required={required} value={value?.value ?? ''} />
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onKeyDown}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-evalx-blue bg-white"
      >
        <span className={value ? 'text-gray-900' : 'text-gray-500'}>
          {value?.label ?? placeholder}
        </span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="mt-2 max-h-64 overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg focus:outline-none"
          >
            {options.map((opt, idx) => (
              <li
                role="option"
                aria-selected={value?.value === opt.value}
                key={opt.value}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => {
                  setValue(opt)
                  setOpen(false)
                }}
                className={`px-4 py-2 cursor-pointer ${
                  idx === activeIndex ? 'bg-gray-100' : ''
                } ${value?.value === opt.value ? 'text-evalx-blue font-medium' : 'text-gray-700'}`}
              >
                {opt.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}









