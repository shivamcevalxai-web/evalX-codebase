'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DarkSelect from '@/components/ui/DarkSelect'
import { AlertCircle, CheckCircle } from 'lucide-react'

const services = [
  'Data Annotation',
  'LLM Evaluation',
  'Model Training & Fine-tuning',
  'UI/UX & Frontend',
  'Backend with GenAI',
  'Workflows Automation',
]

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [budgetAmount, setBudgetAmount] = useState('')
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const [projectDescription, setProjectDescription] = useState('')
  const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({})
  const [fieldTouched, setFieldTouched] = useState<{[key: string]: boolean}>({})
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [formData, setFormData] = useState<any>(null)

  const validateField = (name: string, value: string) => {
    let error = ''
    
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Please enter your full name'
        else if (value.trim().length < 2) error = 'Name must be at least 2 characters'
        break
      case 'company':
        if (!value.trim()) error = 'Please enter your company name'
        else if (value.trim().length < 2) error = 'Company name must be at least 2 characters'
        break
      case 'email':
        if (!value.trim()) error = 'Please enter your email address'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Please enter a valid email address'
        break
      case 'phone':
        if (value && !/^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/\s/g, ''))) {
          error = 'Please enter a valid phone number'
        }
        break
      case 'budget':
        if (!value.trim()) error = 'Please enter your budget amount'
        else if (!/^\d+$/.test(value.replace(/,/g, ''))) error = 'Please enter a valid number'
        break
      case 'timeline':
        if (!value) error = 'Please select a timeline'
        break
      case 'description':
        const charCount = value.trim().length
        if (!value.trim()) error = 'Please describe your project'
        else if (charCount < 150) error = 'Description must be at least 150 characters'
        break
      case 'stack':
        if (value && value.trim().toLowerCase() === 'n/a') {
          // N/A is valid
        } else if (value && value.trim().length < 2) {
          error = 'Please provide more details about your preferences'
        }
        break
      case 'industry':
        if (value && value.trim().length < 2) error = 'Please provide more details about your industry'
        break
    }
    
    return error
  }

  const handleFieldChange = (name: string, value: string) => {
    setFieldTouched(prev => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setFieldErrors(prev => ({ ...prev, [name]: error }))
  }

  const handleFieldBlur = (name: string, value: string) => {
    setFieldTouched(prev => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setFieldErrors(prev => ({ ...prev, [name]: error }))
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSuccess(null)
    setError(null)

    const form = e.currentTarget
    const data = new FormData(form)
    const payload = Object.fromEntries(data.entries())

    // Validate all fields
    const errors: {[key: string]: string} = {}
    Object.keys(payload).forEach(key => {
      const error = validateField(key, payload[key] as string)
      if (error) errors[key] = error
    })

    // Check if services are selected
    const selectedServices = data.getAll('services')
    if (selectedServices.length === 0) {
      errors['services'] = 'Please select at least one service'
    }

    setFieldErrors(errors)
    setFieldTouched(Object.keys(payload).reduce((acc, key) => ({ ...acc, [key]: true }), {}))

    if (Object.keys(errors).length > 0) {
      return
    }

    // Prepare the data for confirmation
    const preparedData = {
      name: payload.name as string,
      company: payload.company as string,
      email: payload.email as string,
      phone: payload.phone as string || '',
      services: selectedServices as string[],
      budget: payload.budget as string,
      currency: payload.currency as string,
      timeline: payload.timeline as string,
      description: payload.description as string,
      stack: payload.stack as string || '',
      industry: payload.industry as string || '',
      size: payload.size as string || '',
      nda: !!payload.nda
    }

    // Show confirmation dialog
    setFormData(preparedData)
    setShowConfirmation(true)
  }

  const handleConfirmSubmit = async () => {
    if (!formData) return

    setSubmitting(true)
    setShowConfirmation(false)
    setSuccess(null)
    setError(null)

    try {
      // Send the form data to our API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to send quote request')
      }

      setSuccess(result.message || 'Quote request sent successfully! We will get back to you within 24 hours.')
      
      // Reset form
      const form = document.querySelector('form') as HTMLFormElement
      if (form) {
        form.reset()
        setFieldErrors({})
        setFieldTouched({})
        setProjectDescription('')
        setBudgetAmount('')
      }
    } catch (err) {
      console.error('Error submitting form:', err)
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
      setFormData(null)
    }
  }

  const AlertMessage = ({ message, type = 'error' }: { message: string; type?: 'error' | 'success' }) => (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium ${
        type === 'error' 
          ? 'bg-red-500/10 border border-red-500/20 text-red-400' 
          : 'bg-green-500/10 border border-green-500/20 text-green-400'
      }`}
    >
      {type === 'error' ? (
        <AlertCircle className="w-4 h-4 flex-shrink-0" />
      ) : (
        <CheckCircle className="w-4 h-4 flex-shrink-0" />
      )}
      <span>{message}</span>
    </motion.div>
  )

  const ConfirmationDialog = () => {
    if (!showConfirmation || !formData) return null

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setShowConfirmation(false)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gray-900 border border-gray-700 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-evalx-blue/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-evalx-blue" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Confirm Quote Request</h3>
              <p className="text-gray-400 text-sm">Please review your information before sending</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-300">Name</label>
                <p className="text-white">{formData.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300">Company</label>
                <p className="text-white">{formData.company}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300">Email</label>
                <p className="text-white">{formData.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300">Phone</label>
                <p className="text-white">{formData.phone || 'Not provided'}</p>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-300">Services</label>
              <div className="flex flex-wrap gap-2 mt-1">
                {formData.services.map((service: string) => (
                  <span key={service} className="bg-evalx-blue/20 text-evalx-blue px-2 py-1 rounded text-sm">
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-300">Budget</label>
                <p className="text-white">{formData.currency} {formData.budget}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300">Timeline</label>
                <p className="text-white">{formData.timeline}</p>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-300">Project Description</label>
              <p className="text-white text-sm bg-gray-800/50 p-3 rounded-lg mt-1">
                {formData.description}
              </p>
            </div>

            {(formData.stack || formData.industry || formData.size) && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {formData.stack && (
                  <div>
                    <label className="text-sm font-medium text-gray-300">Tech Stack</label>
                    <p className="text-white text-sm">{formData.stack}</p>
                  </div>
                )}
                {formData.industry && (
                  <div>
                    <label className="text-sm font-medium text-gray-300">Industry</label>
                    <p className="text-white text-sm">{formData.industry}</p>
                  </div>
                )}
                {formData.size && (
                  <div>
                    <label className="text-sm font-medium text-gray-300">Company Size</label>
                    <p className="text-white text-sm">{formData.size}</p>
                  </div>
                )}
              </div>
            )}

            {formData.nda && (
              <div className="flex items-center gap-2 text-evalx-blue">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm">NDA Requested</span>
              </div>
            )}
          </div>

          <div className="flex gap-3 justify-end">
            <button
              onClick={() => setShowConfirmation(false)}
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmSubmit}
              disabled={submitting}
              className="button-primary"
            >
              {submitting ? 'Sending...' : 'Send Quote Request'}
            </button>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <>
      <ConfirmationDialog />
      <section id="contact" className="section-padding bg-black/20">
        <div className="container-responsive">
        <div className="text-center space-responsive">
          <h2 className="heading-lg text-white">Get a Quote</h2>
          <p className="text-responsive text-gray-300 max-w-3xl mx-auto">
            Tell us about your project and we'll prepare a tailored estimate.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={onSubmit}
          className="mx-auto mt-8 max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-600"
        >
          <div>
            <label className="block text-sm font-medium text-gray-300">Full Name *</label>
            <input 
              name="name" 
              required 
              placeholder="Jane Doe" 
              onChange={(e) => handleFieldChange('name', e.target.value)}
              onBlur={(e) => handleFieldBlur('name', e.target.value)}
              className={`mt-2 w-full rounded-lg border bg-white/10 text-white placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 ${
                fieldErrors.name && fieldTouched.name 
                  ? 'border-red-500 focus:ring-red-500/50' 
                  : 'border-gray-600 focus:ring-evalx-blue'
              }`} 
            />
            <AnimatePresence>
              {fieldErrors.name && fieldTouched.name && (
                <AlertMessage message={fieldErrors.name} />
              )}
            </AnimatePresence>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Company *</label>
            <input 
              name="company" 
              required 
              placeholder="Acme Inc." 
              onChange={(e) => handleFieldChange('company', e.target.value)}
              onBlur={(e) => handleFieldBlur('company', e.target.value)}
              className={`mt-2 w-full rounded-lg border bg-white/10 text-white placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 ${
                fieldErrors.company && fieldTouched.company 
                  ? 'border-red-500 focus:ring-red-500/50' 
                  : 'border-gray-600 focus:ring-evalx-blue'
              }`} 
            />
            <AnimatePresence>
              {fieldErrors.company && fieldTouched.company && (
                <AlertMessage message={fieldErrors.company} />
              )}
            </AnimatePresence>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Work Email *</label>
            <input 
              name="email" 
              type="email" 
              required 
              placeholder="you@company.com" 
              onChange={(e) => handleFieldChange('email', e.target.value)}
              onBlur={(e) => handleFieldBlur('email', e.target.value)}
              className={`mt-2 w-full rounded-lg border bg-white/10 text-white placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 ${
                fieldErrors.email && fieldTouched.email 
                  ? 'border-red-500 focus:ring-red-500/50' 
                  : 'border-gray-600 focus:ring-evalx-blue'
              }`} 
            />
            <AnimatePresence>
              {fieldErrors.email && fieldTouched.email && (
                <AlertMessage message={fieldErrors.email} />
              )}
            </AnimatePresence>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Phone</label>
            <input 
              name="phone" 
              type="tel" 
              placeholder="+1 555 000 0000" 
              onChange={(e) => handleFieldChange('phone', e.target.value)}
              onBlur={(e) => handleFieldBlur('phone', e.target.value)}
              className={`mt-2 w-full rounded-lg border bg-white/10 text-white placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 ${
                fieldErrors.phone && fieldTouched.phone 
                  ? 'border-red-500 focus:ring-red-500/50' 
                  : 'border-gray-600 focus:ring-evalx-blue'
              }`} 
            />
            <AnimatePresence>
              {fieldErrors.phone && fieldTouched.phone && (
                <AlertMessage message={fieldErrors.phone} />
              )}
            </AnimatePresence>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Service(s) *</label>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((s) => (
                <label key={s} className="flex items-center gap-3 rounded-lg border border-gray-600 bg-white/5 px-4 py-3 hover:border-evalx-blue cursor-pointer text-gray-300">
                  <input name="services" type="checkbox" value={s} className="accent-evalx-blue" />
                  <span>{s}</span>
                </label>
              ))}
            </div>
            <AnimatePresence>
              {fieldErrors.services && (
                <AlertMessage message={fieldErrors.services} />
              )}
            </AnimatePresence>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Estimated Budget *</label>
            <div className="mt-2 flex gap-2">
              <DarkSelect
                name="currency"
                placeholder="USD"
                defaultValue="USD"
                options={[
                  { label: 'USD', value: 'USD' },
                  { label: 'EUR', value: 'EUR' },
                  { label: 'GBP', value: 'GBP' },
                  { label: 'INR', value: 'INR' },
                  { label: 'CAD', value: 'CAD' },
                  { label: 'AUD', value: 'AUD' },
                ]}
                className="w-20"
              />
              <div className="flex-1">
                <input 
                  name="budget" 
                  required 
                  type="text"
                  value={budgetAmount}
                  onChange={(e) => {
                    setBudgetAmount(e.target.value)
                    handleFieldChange('budget', e.target.value)
                  }}
                  onBlur={(e) => handleFieldBlur('budget', e.target.value)}
                  placeholder="Enter amount (e.g., 10,000)" 
                  className={`w-full rounded-lg border bg-white/10 text-white placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 ${
                    fieldErrors.budget && fieldTouched.budget 
                      ? 'border-red-500 focus:ring-red-500/50' 
                      : 'border-gray-600 focus:ring-evalx-blue'
                  }`} 
                />
                <AnimatePresence>
                  {fieldErrors.budget && fieldTouched.budget && (
                    <AlertMessage message={fieldErrors.budget} />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Timeline *</label>
            <div className="mt-2">
              <DarkSelect
                name="timeline"
                required
                placeholder="Select timeline"
                options={[
                  { label: '🚀 As soon as possible', value: 'ASAP' },
                  { label: '⚡ 1-2 weeks', value: '1-2 weeks' },
                  { label: '📅 2-4 weeks', value: '2-4 weeks' },
                  { label: '📆 1-2 months', value: '1-2 months' },
                  { label: '🗓️ 2-3 months', value: '2-3 months' },
                  { label: '📊 3-6 months', value: '3-6 months' },
                  { label: '🔮 6+ months', value: '6+ months' },
                  { label: '🔄 Flexible', value: 'Flexible' },
                ]}
              />
              <AnimatePresence>
                {fieldErrors.timeline && fieldTouched.timeline && (
                  <AlertMessage message={fieldErrors.timeline} />
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Project Description *</label>
            <div className="mt-2">
              <textarea 
                name="description" 
                required 
                rows={5} 
                value={projectDescription}
                onChange={(e) => {
                  setProjectDescription(e.target.value)
                  handleFieldChange('description', e.target.value)
                }}
                onBlur={(e) => handleFieldBlur('description', e.target.value)}
                placeholder="What are you building? Goals, constraints, datasets, integrations..." 
                className={`w-full rounded-lg border bg-white/10 text-white placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 ${
                  fieldErrors.description && fieldTouched.description 
                    ? 'border-red-500 focus:ring-red-500/50' 
                    : 'border-gray-600 focus:ring-evalx-blue'
                }`} 
              />
              <div className="mt-2 flex justify-between items-center text-sm">
                <div className="text-gray-400">
                  Character count: {projectDescription.trim().length}/150 minimum
                </div>
                <div className={`text-xs ${
                  projectDescription.trim().length >= 150 
                    ? 'text-green-400' 
                    : 'text-gray-500'
                }`}>
                  {projectDescription.trim().length >= 150 ? '✓' : '⚠️'}
                </div>
              </div>
              <AnimatePresence>
                {fieldErrors.description && fieldTouched.description && (
                  <AlertMessage message={fieldErrors.description} />
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">Model/Tech Preferences</label>
              <input 
                name="stack" 
                placeholder="OpenAI, Claude, Llama, Next.js, etc." 
                onChange={(e) => handleFieldChange('stack', e.target.value)}
                onBlur={(e) => handleFieldBlur('stack', e.target.value)}
                className={`mt-2 w-full rounded-lg border bg-white/10 text-white placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 ${
                  fieldErrors.stack && fieldTouched.stack 
                    ? 'border-red-500 focus:ring-red-500/50' 
                    : 'border-gray-600 focus:ring-evalx-blue'
                }`} 
              />
              <p className="mt-1 text-xs text-gray-400">
                💡 If you prefer a specific model, provide your subscription. If no preference, enter "N/A"
              </p>
              <AnimatePresence>
                {fieldErrors.stack && fieldTouched.stack && (
                  <AlertMessage message={fieldErrors.stack} />
                )}
              </AnimatePresence>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Industry</label>
              <input 
                name="industry" 
                placeholder="Healthcare, fintech, edtech, etc." 
                onChange={(e) => handleFieldChange('industry', e.target.value)}
                onBlur={(e) => handleFieldBlur('industry', e.target.value)}
                className={`mt-2 w-full rounded-lg border bg-white/10 text-white placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 ${
                  fieldErrors.industry && fieldTouched.industry 
                    ? 'border-red-500 focus:ring-red-500/50' 
                    : 'border-gray-600 focus:ring-evalx-blue'
                }`} 
              />
              <AnimatePresence>
                {fieldErrors.industry && fieldTouched.industry && (
                  <AlertMessage message={fieldErrors.industry} />
                )}
              </AnimatePresence>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Company Size</label>
              <select 
                name="size" 
                className="mt-2 w-full rounded-lg border border-gray-600 bg-white/10 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-evalx-blue appearance-none"
                style={{ 
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 12px center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '16px'
                }}
              >
                <option value="">Select size</option>
                <option value="1-10">👥 1-10 employees</option>
                <option value="11-50">🏢 11-50 employees</option>
                <option value="51-200">🏭 51-200 employees</option>
                <option value="200+">🏢 200+ employees</option>
              </select>
            </div>
          </div>

          {success && <div className="md:col-span-2 text-green-600">{success}</div>}
          {error && <div className="md:col-span-2 text-red-600">{error}</div>}

          <div className="md:col-span-2 flex items-center justify-between gap-4">
            <label className="flex items-center gap-3 text-sm text-gray-300">
              <input name="nda" type="checkbox" className="accent-evalx-blue" />
              Request NDA
            </label>
            <button disabled={submitting} className="button-primary">
              {submitting ? 'Sending...' : 'Request Quote'}
            </button>
          </div>
        </motion.form>
        </div>
      </section>
    </>
  )
}
