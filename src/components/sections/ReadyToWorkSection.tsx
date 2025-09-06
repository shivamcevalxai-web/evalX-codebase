'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Users, Clock, Shield, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function ReadyToWorkSection() {
  const [emailCopied, setEmailCopied] = useState(false)


  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('evalx.aiofficial@gmail.com')
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const features = [
    {
      icon: CheckCircle,
      text: 'Free consultation and project assessment'
    },
    {
      icon: Clock,
      text: 'Fast turnaround times with regular updates'
    },
    {
      icon: Users,
      text: 'Dedicated team of expert annotators'
    },
    {
      icon: Shield,
      text: 'Secure data handling and confidentiality'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-evalx-blue/10 via-evalx-purple/5 to-evalx-cyan/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      
      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-16 h-16 bg-evalx-blue/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-24 h-24 bg-evalx-purple/20 rounded-full blur-xl"
      />

      <div className="container-responsive relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="heading-lg text-white">
              Ready to <span className="bg-gradient-to-r from-evalx-blue via-evalx-purple to-evalx-cyan bg-clip-text text-transparent animate-gradient-text">Work Together</span>?
            </h2>
            
            <p className="text-responsive text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your AI data needs and create a solution that scales with your business. 
              Our team is ready to help you build reliable AI systems.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-white/5 backdrop-blur-md rounded-lg p-4 border border-gray-600/50"
                >
                  <div className="w-8 h-8 bg-evalx-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-evalx-blue" />
                  </div>
                  <span className="text-gray-300 text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Email Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center items-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={copyEmailToClipboard}
                className="relative flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-evalx-blue to-evalx-purple text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-evalx-purple/25 cursor-pointer"
              >
                <span>evalx.aiofficial@gmail.com</span>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: emailCopied ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {emailCopied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </motion.div>
                
                {/* Copied! Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ 
                    opacity: emailCopied ? 1 : 0, 
                    y: emailCopied ? 0 : 10,
                    scale: emailCopied ? 1 : 0.8
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg whitespace-nowrap"
                >
                  Copied!
                </motion.div>
              </motion.button>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
