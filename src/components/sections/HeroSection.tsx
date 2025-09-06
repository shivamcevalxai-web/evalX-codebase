'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Clock, Users } from 'lucide-react'

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToServices = () => {
    const element = document.querySelector('#services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-28 md:pt-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-evalx-blue/10 via-evalx-purple/5 to-evalx-cyan/10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      {/* Aurora animated blobs */}
      <div className="aurora">
        <div className="a1" />
        <div className="a2" />
        <div className="a3" />
      </div>
      
      {/* Floating elements - hidden on mobile for better performance */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-16 h-16 sm:w-20 sm:h-20 bg-evalx-blue/20 rounded-full blur-xl hidden sm:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-24 h-24 sm:w-32 sm:h-32 bg-evalx-purple/20 rounded-full blur-xl hidden sm:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="heading-xl leading-snug md:leading-tight"
          >
            <span className="animate-gradient-text">Reliable AI</span>
            <br />
            <span className="text-white">Data Annotation &</span>
            <br />
            <span className="animate-gradient-text">Model Evaluation</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-responsive text-gray-300 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4"
          >
            We help startups, research labs, and enterprises with high-quality data labeling, 
            model testing, and evaluation at scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="button-primary flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>Hire Us</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToServices}
              className="button-secondary w-full sm:w-auto"
            >
              View Our Services
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto pt-6 sm:pt-8 px-4"
          >
            <div className="flex items-center justify-center space-x-3">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-evalx-blue" />
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold text-white">4</div>
                <div className="text-xs sm:text-sm text-gray-300">Dedicated Team</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-evalx-purple" />
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold text-white">24/7</div>
                <div className="text-xs sm:text-sm text-gray-300">Availability</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-evalx-cyan" />
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold text-white">99%</div>
                <div className="text-xs sm:text-sm text-gray-300">Quality Rate</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 right-6 hidden sm:block pointer-events-none opacity-70"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-9 border-2 border-gray-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-300 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
