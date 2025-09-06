'use client'

import { motion } from 'framer-motion'
import ResponsiveSection from '@/components/ui/ResponsiveSection'

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-black/10">
      <div className="container-responsive">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-responsive mb-16"
        >
          <h2 className="heading-lg text-white mb-6">
            About <span className="bg-gradient-to-r from-evalx-blue via-evalx-purple to-evalx-cyan bg-clip-text text-transparent animate-gradient-text">EvalX AI</span>
          </h2>
          <p className="text-responsive text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a team of AI experts, data scientists, and engineers dedicated to 
            providing high-quality data annotation and model evaluation services that 
            help organizations build reliable AI systems.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-evalx-blue mb-2">50+</div>
            <div className="text-gray-300">Projects Completed</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-evalx-purple mb-2">99.5%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-evalx-cyan mb-2">4</div>
            <div className="text-gray-300">Team Members</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Our Mission
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We believe that high-quality data is the foundation of successful AI systems. 
              Our mission is to provide accurate, reliable, and scalable data annotation 
              services that help organizations build AI models they can trust.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-evalx-blue rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">
                  Rigorous quality control processes ensure 99.5% accuracy
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-evalx-purple rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">
                  Expert annotators with domain-specific knowledge
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-evalx-cyan rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">
                  Scalable solutions for projects of any size
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-evalx-blue/20 to-evalx-purple/20 rounded-2xl p-8 backdrop-blur-md border border-gray-600">
              <h4 className="text-xl font-semibold text-white mb-4">Why Choose Us?</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-evalx-blue/20 rounded-lg flex items-center justify-center">
                    <span className="text-evalx-blue text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">Fast turnaround times</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-evalx-purple/20 rounded-lg flex items-center justify-center">
                    <span className="text-evalx-purple text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">Competitive pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-evalx-cyan/20 rounded-lg flex items-center justify-center">
                    <span className="text-evalx-cyan text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">Secure data handling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">24/7 customer support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
