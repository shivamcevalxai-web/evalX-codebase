'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/layout/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import ResponsiveSection from '@/components/ui/ResponsiveSection'
import ServicesSection from '@/components/sections/ServicesSection'
import AboutSection from '@/components/sections/AboutSection'
import ReadyToWorkSection from '@/components/sections/ReadyToWorkSection'
import ContactSection from '@/components/sections/ContactSection'
import LoadingScreen from '@/components/ui/LoadingScreen'
import { Play, Github, ExternalLink, X } from 'lucide-react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isContentReady, setIsContentReady] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [videoModal, setVideoModal] = useState<{isOpen: boolean, src: string, title: string}>({
    isOpen: false,
    src: '',
    title: ''
  })
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  // Wait for content to be fully rendered
  useEffect(() => {
    if (!isLoading) {
      // Give time for content to render
      const renderTimer = setTimeout(() => {
        setIsContentReady(true)
        // Wait for DOM to be fully ready
        setTimeout(() => {
          if (contentRef.current) {
            // Force a reflow to ensure everything is rendered
            contentRef.current.offsetHeight
            // Check if all major sections are present
            const navigation = contentRef.current.querySelector('nav')
            const hero = contentRef.current.querySelector('#hero')
            const services = contentRef.current.querySelector('#services')
            const about = contentRef.current.querySelector('#about')
            const contact = contentRef.current.querySelector('#contact')
            
            if (navigation && hero && services && about && contact) {
              // All sections are present, wait a bit more for animations
              setTimeout(() => {
                setShowContent(true)
              }, 800)
            } else {
              // Fallback if sections aren't found
              setTimeout(() => {
                setShowContent(true)
              }, 1000)
            }
          } else {
            setShowContent(true)
          }
        }, 300)
      }, 1200) // Wait 1.2 seconds after loading completes

      return () => clearTimeout(renderTimer)
    }
  }, [isLoading])

  // Video modal handlers
  const openVideoModal = (src: string, title: string) => {
    setVideoModal({ isOpen: true, src, title })
    document.body.style.overflow = 'hidden'
  }

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, src: '', title: '' })
    document.body.style.overflow = 'unset'
  }

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && videoModal.isOpen) {
        closeVideoModal()
      }
    }

    if (videoModal.isOpen) {
      document.addEventListener('keydown', handleEscKey)
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [videoModal.isOpen])

  // Pre-render content but keep it hidden
  const mainContent = (
    <motion.main 
      ref={contentRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: showContent ? 1 : 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="curved-bg min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #0a0a1a 0%, #0f1419 25%, #0d1b2a 50%, #0a0a1a 75%, #0f1419 100%)',
        backgroundSize: '400% 400%',
        animation: 'backgroundShift 8s ease infinite'
      }}
    >
      {/* AI Grid Pattern */}
      <div className="ai-grid"></div>
      
      {/* Circuit Pattern */}
      <div className="circuit-pattern"></div>
      
      {/* Holographic Effects */}
      <div className="hologram"></div>
      
      {/* Neural Network */}
      <div className="neural-network">
        {/* Neural Nodes */}
        <div className="neural-node" style={{top: '20%', left: '15%', animationDelay: '0s'}}></div>
        <div className="neural-node" style={{top: '30%', left: '45%', animationDelay: '0.5s'}}></div>
        <div className="neural-node" style={{top: '50%', left: '25%', animationDelay: '1s'}}></div>
        <div className="neural-node" style={{top: '60%', left: '65%', animationDelay: '1.5s'}}></div>
        <div className="neural-node" style={{top: '80%', left: '35%', animationDelay: '2s'}}></div>
        <div className="neural-node" style={{top: '70%', left: '75%', animationDelay: '2.5s'}}></div>
        
        {/* Neural Connections */}
        <div className="neural-connection" style={{top: '25%', left: '20%', width: '200px', transform: 'rotate(15deg)', animationDelay: '0s'}}></div>
        <div className="neural-connection" style={{top: '40%', left: '35%', width: '150px', transform: 'rotate(-20deg)', animationDelay: '1s'}}></div>
        <div className="neural-connection" style={{top: '55%', left: '45%', width: '180px', transform: 'rotate(30deg)', animationDelay: '2s'}}></div>
        <div className="neural-connection" style={{top: '75%', left: '50%', width: '120px', transform: 'rotate(-15deg)', animationDelay: '3s'}}></div>
      </div>
      
      {/* Energy Waves */}
      <div className="energy-wave" style={{top: '20%', left: '0%', animationDelay: '0s'}}></div>
      <div className="energy-wave" style={{top: '40%', left: '0%', animationDelay: '2s'}}></div>
      <div className="energy-wave" style={{top: '60%', left: '0%', animationDelay: '4s'}}></div>
      <div className="energy-wave" style={{top: '80%', left: '0%', animationDelay: '6s'}}></div>
      
      {/* Floating Hexagons */}
      <div className="floating-hex" style={{top: '10%', left: '20%', animationDelay: '0s'}}></div>
      <div className="floating-hex" style={{top: '30%', left: '70%', animationDelay: '1s'}}></div>
      <div className="floating-hex" style={{top: '50%', left: '15%', animationDelay: '2s'}}></div>
      <div className="floating-hex" style={{top: '70%', left: '85%', animationDelay: '3s'}}></div>
      <div className="floating-hex" style={{top: '90%', left: '50%', animationDelay: '4s'}}></div>
      
      {/* Pulsing Rings */}
      <div className="pulse-ring" style={{top: '25%', left: '30%', animationDelay: '0s'}}></div>
      <div className="pulse-ring" style={{top: '45%', left: '60%', animationDelay: '1.5s'}}></div>
      <div className="pulse-ring" style={{top: '65%', left: '20%', animationDelay: '3s'}}></div>
      <div className="pulse-ring" style={{top: '85%', left: '80%', animationDelay: '4.5s'}}></div>
      
      {/* Digital Rain Effect */}
      <div className="digital-rain" style={{left: '5%', animationDelay: '0s'}}></div>
      <div className="digital-rain" style={{left: '25%', animationDelay: '1s'}}></div>
      <div className="digital-rain" style={{left: '45%', animationDelay: '2s'}}></div>
      <div className="digital-rain" style={{left: '65%', animationDelay: '0.5s'}}></div>
      <div className="digital-rain" style={{left: '85%', animationDelay: '1.5s'}}></div>
      
      {/* Floating Triangles */}
      <div className="floating-triangle" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
      <div className="floating-triangle" style={{top: '40%', left: '80%', animationDelay: '2s'}}></div>
      <div className="floating-triangle" style={{top: '60%', left: '25%', animationDelay: '4s'}}></div>
      <div className="floating-triangle" style={{top: '80%', left: '70%', animationDelay: '6s'}}></div>
      
      {/* Glowing Particles */}
      <div className="glow-particle" style={{top: '15%', left: '20%', animationDelay: '0s'}}></div>
      <div className="glow-particle" style={{top: '25%', left: '60%', animationDelay: '1s'}}></div>
      <div className="glow-particle" style={{top: '45%', left: '10%', animationDelay: '2s'}}></div>
      <div className="glow-particle" style={{top: '65%', left: '80%', animationDelay: '3s'}}></div>
      <div className="glow-particle" style={{top: '85%', left: '40%', animationDelay: '4s'}}></div>
      <div className="glow-particle" style={{top: '35%', left: '90%', animationDelay: '5s'}}></div>
      <div className="glow-particle" style={{top: '55%', left: '30%', animationDelay: '6s'}}></div>
      <div className="glow-particle" style={{top: '75%', left: '70%', animationDelay: '7s'}}></div>
      
      {/* Floating curved elements */}
      <div className="floating-curves">
        <div className="curve-element curve-1"></div>
        <div className="curve-element curve-2"></div>
        <div className="curve-element curve-3"></div>
        <div className="curve-element curve-4"></div>
        <div className="curve-element curve-5"></div>
        
        {/* Gradient orbs */}
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Content with relative positioning to appear above background */}
      <div className="relative z-10">
      <Navigation />
      <HeroSection />
      
      <ServicesSection />

      <section id="portfolio" className="section-padding bg-black/10">
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
              Our <span className="bg-gradient-to-r from-evalx-blue via-evalx-purple to-evalx-cyan bg-clip-text text-transparent animate-gradient-text">Portfolio</span>
          </h2>
            <p className="text-responsive text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our latest AI projects, data solutions, and innovative applications 
              that showcase our expertise in cutting-edge technology.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 - AI Code Analysis System */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl border border-gray-600 hover:border-evalx-blue/50 transition-all duration-300 overflow-hidden hover:bg-white/10 hover:shadow-2xl hover:shadow-evalx-blue/20 cursor-pointer"
              onClick={() => openVideoModal('/Portfolio_data/habit_neural_network.mp4', 'Habit Neural Network Website')}
            >
              <div className="relative h-48 overflow-hidden">
                <video
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  poster="/Portfolio_data/optimized/recording-1-placeholder.jpg"
                  preload="auto"
                  muted
                  loop
                  playsInline
                  autoPlay
                  controls={false}
                  onMouseEnter={(e) => {
                    e.currentTarget.play().catch(console.error)
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause()
                  }}
                  onError={(e) => {
                    console.error('Video failed to load:', e.currentTarget.src)
                    // Fallback to image
                    const img = e.currentTarget.nextElementSibling as HTMLImageElement
                    if (img) img.style.display = 'block'
                    e.currentTarget.style.display = 'none'
                  }}
                >
                  <source src="/Portfolio_data/habit_neural_network.mp4" type="video/mp4" />
                </video>
                <img
                  src="/Portfolio_data/optimized/screenshot-2-optimized.png"
                  alt="Habit Neural Network Website Demo"
                  className="w-full h-full object-cover absolute inset-0"
                  style={{ display: 'none' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-evalx-blue bg-evalx-blue/20 px-3 py-1 rounded-full">
                    AI/ML
                  </span>
                  <div className="flex space-x-2">
                    <a href="https://github.com/yourusername/ai-code-analysis" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Habit Neural Network Website</h3>
                <p className="text-gray-300 text-sm mb-4">Interactive habit formation visualizer with neural network-style connections, strength indicators, and WebGL particle effects for desktop browsers.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">HTML5</span>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">WebGL</span>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">JavaScript</span>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">CSS3</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="text-xs">
                    <div className="text-evalx-blue font-semibold">Interactive</div>
                    <div className="text-gray-400">Node Graph</div>
                  </div>
                  <div className="text-xs">
                    <div className="text-evalx-blue font-semibold">Streak</div>
                    <div className="text-gray-400">Tracking</div>
                  </div>
                  <div className="text-xs">
                    <div className="text-evalx-blue font-semibold">WebGL</div>
                    <div className="text-gray-400">Effects</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2 - Trading Backtesting Engine */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl border border-gray-600 hover:border-evalx-purple/50 transition-all duration-300 overflow-hidden hover:bg-white/10 cursor-pointer"
              onClick={() => openVideoModal('/Portfolio_data/social_media_dashboard.mp4', 'Social Media Analytics Dashboard')}
            >
              <div className="relative h-48 overflow-hidden">
                <video
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  poster="/Portfolio_data/optimized/recording-2-placeholder.jpg"
                  preload="auto"
                  muted
                  loop
                  playsInline
                  autoPlay
                >
                  <source src="/Portfolio_data/social_media_dashboard.mp4" type="video/mp4" />
                  <img
                    src="/Portfolio_data/optimized/screenshot-3-optimized.png"
                    alt="Social Media Analytics Dashboard Demo"
                    className="w-full h-full object-cover"
                  />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-evalx-purple bg-evalx-purple/20 px-3 py-1 rounded-full">
                    Finance
                  </span>
                  <div className="flex space-x-2">
                    <a href="https://github.com/yourusername/trading-backtest" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Social Media Analytics Dashboard</h3>
                <p className="text-gray-300 text-sm mb-4">Multi-platform social media engagement tracker with real-time data updates, temporal sentiment analysis, and responsive hybrid layout.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">Next.js</span>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">WebSocket</span>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">D3.js</span>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">TypeScript</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="text-xs">
                    <div className="text-evalx-purple font-semibold">Multi-Platform</div>
                    <div className="text-gray-400">Integration</div>
                  </div>
                  <div className="text-xs">
                    <div className="text-evalx-purple font-semibold">Real-time</div>
                    <div className="text-gray-400">Updates</div>
                  </div>
                  <div className="text-xs">
                    <div className="text-evalx-purple font-semibold">Sentiment</div>
                    <div className="text-gray-400">Analysis</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 3 - Autonomous Driving DRL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl border border-gray-600 hover:border-evalx-cyan/50 transition-all duration-300 overflow-hidden hover:bg-white/10 cursor-pointer"
              onClick={() => openVideoModal('/Portfolio_data/button_interface.mp4', 'Test Button Micro-interaction Interface')}
            >
              <div className="relative h-48 overflow-hidden">
                <video
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  poster="/Portfolio_data/optimized/recording-3-placeholder.jpg"
                  preload="auto"
                  muted
                  loop
                  playsInline
                  autoPlay
                >
                  <source src="/Portfolio_data/button_interface.mp4" type="video/mp4" />
                  <img
                    src="/Portfolio_data/optimized/screenshot-4-optimized.png"
                    alt="Test Button Micro-interaction Interface Demo"
                    className="w-full h-full object-cover"
                  />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-evalx-cyan bg-evalx-cyan/20 px-3 py-1 rounded-full">
                    Deep RL
                  </span>
                  <div className="flex space-x-2">
                    <a href="https://github.com/yourusername/autonomous-driving" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Test Button Micro-interaction Interface</h3>
                <p className="text-gray-300 text-sm mb-4">Next.js desktop application featuring 10+ unique button styles with parallax effects, border animations, and live preview controls.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">Next.js</span>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">Framer Motion</span>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">CSS3</span>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">TypeScript</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="text-xs">
                    <div className="text-evalx-cyan font-semibold">10+ Styles</div>
                    <div className="text-gray-400">Buttons</div>
                  </div>
                  <div className="text-xs">
                    <div className="text-evalx-cyan font-semibold">Parallax</div>
                    <div className="text-gray-400">Effects</div>
                  </div>
                  <div className="text-xs">
                    <div className="text-evalx-cyan font-semibold">Live</div>
                    <div className="text-gray-400">Preview</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 4 - Data Labeling Platform */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl border border-gray-600 hover:border-evalx-blue/50 transition-all duration-300 overflow-hidden hover:bg-white/10 hover:shadow-2xl hover:shadow-evalx-blue/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/Portfolio_data/optimized/label1-optimized.jpg"
                  alt="Data Labeling Platform"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/Portfolio_data/optimized/label2-optimized.webp"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-evalx-blue bg-evalx-blue/20 px-3 py-1 rounded-full">
                    Data
                  </span>
                  <div className="flex space-x-2">
                    <a href="https://github.com/yourusername/data-labeling" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Data Labeling Platform</h3>
                <p className="text-gray-300 text-sm mb-4">Advanced data annotation platform for vision, NLP, and multimodal datasets with rigorous QA processes.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">React</span>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">Python</span>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">Django</span>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">PostgreSQL</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="text-xs">
                    <div className="text-evalx-blue font-semibold">Multi-modal</div>
                    <div className="text-gray-400">Support</div>
                  </div>
                  <div className="text-xs">
                    <div className="text-evalx-blue font-semibold">QA</div>
                    <div className="text-gray-400">Process</div>
                  </div>
                  <div className="text-xs">
                    <div className="text-evalx-blue font-semibold">99.5%</div>
                    <div className="text-gray-400">Accuracy</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 5 - Model Training Pipeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl border border-gray-600 hover:border-evalx-purple/50 transition-all duration-300 overflow-hidden hover:bg-white/10 cursor-pointer"
              onClick={() => openVideoModal('/Portfolio_data/education_platform.mp4', 'Educational Learning Platform')}
            >
              <div className="relative h-48 overflow-hidden">
                <video
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  poster="/Portfolio_data/optimized/recording-4-placeholder.jpg"
                  preload="auto"
                  muted
                  loop
                  playsInline
                  autoPlay
                >
                  <source src="/Portfolio_data/education_platform.mp4" type="video/mp4" />
                  <img
                    src="/Portfolio_data/optimized/screenshot-1-optimized.png"
                    alt="Educational Learning Platform Demo"
                    className="w-full h-full object-cover"
                  />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-evalx-purple bg-evalx-purple/20 px-3 py-1 rounded-full">
                    ML
                  </span>
                  <div className="flex space-x-2">
                    <a href="https://github.com/yourusername/model-training" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Educational Learning Platform</h3>
                <p className="text-gray-300 text-sm mb-4">Responsive educational platform homepage with course catalog, video previews, testimonials, and interactive elements for student engagement.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">Next.js</span>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">TypeScript</span>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">Tailwind</span>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">Framer Motion</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="text-xs">
                    <div className="text-evalx-purple font-semibold">Course</div>
                    <div className="text-gray-400">Catalog</div>
                  </div>
                  <div className="text-xs">
                    <div className="text-evalx-purple font-semibold">Video</div>
                    <div className="text-gray-400">Previews</div>
                  </div>
                  <div className="text-xs">
                    <div className="text-evalx-purple font-semibold">Interactive</div>
                    <div className="text-gray-400">Elements</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 6 - AI Website Development */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl border border-gray-600 hover:border-evalx-cyan/50 transition-all duration-300 overflow-hidden hover:bg-white/10 cursor-pointer"
              onClick={() => openVideoModal('/Portfolio_data/toc.mp4', 'Physiotherapist Website')}
            >
              <div className="relative h-48 overflow-hidden">
                <video
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  poster="/Portfolio_data/optimized/toc-placeholder.jpg"
                  preload="auto"
                  muted
                  loop
                  playsInline
                  autoPlay
                >
                  <source src="/Portfolio_data/toc.mp4" type="video/mp4" />
                  <img
                    src="/Portfolio_data/optimized/screenshot-1-optimized.png"
                    alt="Physiotherapist Website Demo"
                    className="w-full h-full object-cover"
                  />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-evalx-cyan bg-evalx-cyan/20 px-3 py-1 rounded-full">
                    AI
                  </span>
                  <div className="flex space-x-2">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Physiotherapist Website</h3>
                <p className="text-gray-300 text-sm mb-4">Professional physiotherapy practice website built with Django, featuring appointment booking, patient management, and service information.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">Django</span>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">Python</span>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">PostgreSQL</span>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">Bootstrap</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="text-xs">
                    <div className="text-evalx-cyan font-semibold">Appointment</div>
                    <div className="text-gray-400">Booking</div>
                  </div>
                  <div className="text-xs">
                    <div className="text-evalx-cyan font-semibold">Patient</div>
                    <div className="text-gray-400">Management</div>
                  </div>
                  <div className="text-xs">
                    <div className="text-evalx-cyan font-semibold">Professional</div>
                    <div className="text-gray-400">Design</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 7 - Medical F&Q Chatbot */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl border border-gray-600 hover:border-evalx-blue/50 transition-all duration-300 overflow-hidden hover:bg-white/10 hover:shadow-2xl hover:shadow-evalx-blue/20 cursor-pointer"
              onClick={() => openVideoModal('/Portfolio_data/medical_faq_chatbot.mp4', 'Medical F&Q Chatbot')}
            >
              <div className="relative h-48 overflow-hidden">
                <video
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  poster="/Portfolio_data/optimized/recording-1-placeholder.jpg"
                  preload="auto"
                  muted
                  loop
                  playsInline
                  autoPlay
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                  onError={(e) => {
                    console.error('Video failed to load:', e.currentTarget.src)
                    // Show fallback image
                    const video = e.currentTarget
                    const parent = video.parentElement
                    if (parent) {
                      const fallbackImg = parent.querySelector('img') as HTMLImageElement
                      if (fallbackImg) {
                        fallbackImg.style.display = 'block'
                        video.style.display = 'none'
                      }
                    }
                  }}
                  onLoadStart={() => console.log('Video loading started')}
                  onCanPlay={() => console.log('Video can play')}
                >
                  <source src="/Portfolio_data/medical_faq_chatbot.mp4" type="video/mp4" />
                  <img
                    src="/Portfolio_data/optimized/screenshot-2-optimized.png"
                    alt="Medical F&Q Chatbot Demo"
                    className="w-full h-full object-cover"
                  />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-evalx-blue bg-evalx-blue/20 px-3 py-1 rounded-full">
                    AI/ML
                  </span>
                  <div className="flex space-x-2">
                    <a href="https://github.com/yourusername/medical-chatbot" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Medical F&Q Chatbot</h3>
                <p className="text-gray-300 text-sm mb-4">A Retrieval-Augmented Generation (RAG) based chatbot that answers medical questions using a curated dataset of medical FAQs. The system combines semantic search with AI-powered text generation to provide accurate and contextual medical information.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">Python</span>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">Streamlit</span>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">FAISS</span>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">OpenAI</span>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">RAG</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="text-xs">
                    <div className="text-evalx-blue font-semibold">Semantic</div>
                    <div className="text-gray-400">Search</div>
                  </div>
                  <div className="text-xs">
                    <div className="text-evalx-blue font-semibold">AI-Powered</div>
                    <div className="text-gray-400">Responses</div>
                  </div>
                  <div className="text-xs">
                    <div className="text-evalx-blue font-semibold">100+</div>
                    <div className="text-gray-400">FAQs</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prompt Templates Section */}
      <section className="section-padding bg-black/20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Advanced <span className="animate-gradient-text">Prompt Templates</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover our collection of sophisticated prompt engineering templates 
              designed for complex AI applications and problem-solving scenarios.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Template 1 - Code Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl border border-gray-600 p-6 hover:border-evalx-blue/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-evalx-blue/20 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-evalx-blue text-lg">🔍</span>
                </div>
                <h4 className="text-xl font-semibold text-white">Code Analysis</h4>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                AI-driven system for detecting syntactical, logical, and structural errors 
                in source code using AST parsing and LLMs.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-xs text-gray-400">
                  <span className="w-2 h-2 bg-evalx-blue rounded-full mr-2"></span>
                  Multi-language support
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <span className="w-2 h-2 bg-evalx-blue rounded-full mr-2"></span>
                  Real-time IDE integration
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <span className="w-2 h-2 bg-evalx-blue rounded-full mr-2"></span>
                  Context-aware suggestions
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3 text-xs">
                <div className="text-evalx-blue font-semibold mb-2">Sample Prompt:</div>
                <div className="text-gray-300 leading-relaxed">
                  "I have to write code every day because I work as a software engineer. I usually get frustrated since I have to work on multiple languages, and I frequently make logical and syntactical mistakes. I want you to develop an AI-driven system that detects syntactical, logical, and structural errors in source code and suggests precise corrections using LLMs and AST..."
                </div>
              </div>
            </motion.div>

            {/* Template 2 - Trading Strategies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl border border-gray-600 p-6 hover:border-evalx-purple/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-evalx-purple/20 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-evalx-purple text-lg">📈</span>
                </div>
                <h4 className="text-xl font-semibold text-white">Trading Backtesting</h4>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Python-based backtesting engine for algorithmic trading strategies 
                with historical data simulation and optimization.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-xs text-gray-400">
                  <span className="w-2 h-2 bg-evalx-purple rounded-full mr-2"></span>
                  Historical data analysis
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <span className="w-2 h-2 bg-evalx-purple rounded-full mr-2"></span>
                  Strategy optimization
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <span className="w-2 h-2 bg-evalx-purple rounded-full mr-2"></span>
                  Performance metrics
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3 text-xs">
                <div className="text-evalx-purple font-semibold mb-2">Sample Prompt:</div>
                <div className="text-gray-300 leading-relaxed">
                  "I'm a developer with a background in stock market trading, and I come up with multiple trading strategies that I have to test on a regular basis. So, I have been looking for a Python-based backtesting engine for algorithmic trading that is designed to simulate how trading strategies would have performed using historical market data..."
                </div>
              </div>
            </motion.div>

            {/* Template 3 - Autonomous Driving */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl border border-gray-600 p-6 hover:border-evalx-cyan/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-evalx-cyan/20 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-evalx-cyan text-lg">🚗</span>
                </div>
                <h4 className="text-xl font-semibold text-white">Autonomous Driving</h4>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Deep reinforcement learning model for end-to-end autonomous driving 
                with simulated environment training and real-time navigation.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-xs text-gray-400">
                  <span className="w-2 h-2 bg-evalx-cyan rounded-full mr-2"></span>
                  DRL implementation
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <span className="w-2 h-2 bg-evalx-cyan rounded-full mr-2"></span>
                  Simulated environment
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <span className="w-2 h-2 bg-evalx-cyan rounded-full mr-2"></span>
                  Real-time decision making
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3 text-xs">
                <div className="text-evalx-cyan font-semibold mb-2">Sample Prompt:</div>
                <div className="text-gray-300 leading-relaxed">
                  "I'm an AI engineer at an automobile company where we work on self-driving cars. Currently I'm working on a deep reinforcement learning (DRL) model for autonomous driving that aims to develop an end-to-end solution for autonomous driving that can send commands to the vehicle to help drive in the right direction and avoid crashes as much as possible..."
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

        <AboutSection />

      <ReadyToWorkSection />

      <ContactSection />
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModal.isOpen && (
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4 overflow-y-auto"
          onClick={closeVideoModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-900/50 border-b border-gray-700">
              <h3 className="text-lg sm:text-xl font-semibold text-white truncate pr-4">{videoModal.title}</h3>
              <button
                onClick={closeVideoModal}
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-700/50 flex-shrink-0"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            
            {/* Video Player */}
            <div className="relative w-full bg-black" style={{ 
              aspectRatio: '16/9', 
              maxHeight: 'calc(90vh - 120px)',
              minHeight: '300px'
            }}>
              <video
                className="w-full h-full object-contain"
                controls
                autoPlay
                muted={false}
                loop
                playsInline
                style={{ 
                  maxHeight: 'calc(90vh - 120px)',
                  minHeight: '300px'
                }}
                onError={(e) => {
                  console.error('Video failed to load in modal:', e.currentTarget.src)
                }}
              >
                <source src={videoModal.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Footer */}
            <div className="p-3 sm:p-4 bg-gray-900/50 border-t border-gray-700">
              <p className="text-xs sm:text-sm text-gray-400 text-center">
                Click outside the video or press the X button to close
              </p>
            </div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>

    </motion.main>
  )

  return (
    <>
      {mainContent}
      {!showContent && (
        <div className="fixed inset-0 z-50">
          <LoadingScreen />
        </div>
      )}
    </>
  )
}
