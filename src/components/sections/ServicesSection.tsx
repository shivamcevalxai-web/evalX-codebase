'use client'

import { motion } from 'framer-motion'
import { Brain, Workflow, LineChart, MonitorSmartphone, Layers, Server } from 'lucide-react'

const services = [
  {
    title: 'Data Annotation',
    description: 'Human-in-the-loop labeling for vision, NLP, and multimodal datasets with rigorous QA.',
    icon: Layers,
    color: 'from-evalx-blue to-evalx-purple'
  },
  {
    title: 'LLM Evaluation',
    description: 'Benchmarking, red teaming, and rubric-based scoring for model quality and safety.',
    icon: Brain,
    color: 'from-evalx-purple to-evalx-cyan'
  },
  {
    title: 'Model Training & Fine-tuning',
    description: 'Supervised fine-tuning and instruction tuning on curated datasets for your domain.',
    icon: LineChart,
    color: 'from-evalx-cyan to-evalx-blue'
  },
  {
    title: 'UI/UX & Frontend',
    description: 'Delightful, responsive interfaces with React/Next.js and design systems that scale.',
    icon: MonitorSmartphone,
    color: 'from-evalx-blue to-evalx-purple'
  },
  {
    title: 'Backend with GenAI',
    description: 'Production APIs, vector search, and RAG pipelines designed for reliability.',
    icon: Server,
    color: 'from-evalx-purple to-evalx-cyan'
  },
  {
    title: 'Workflows Automation',
    description: 'HR, finance, and business process automation through advanced prompt engineering.',
    icon: Workflow,
    color: 'from-evalx-cyan to-evalx-blue'
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="container-responsive">
        <div className="text-center space-responsive">
          <h2 className="heading-lg text-white">Our Services</h2>
          <p className="text-responsive text-gray-300 max-w-3xl mx-auto">
            From datasets to delightful products — we ship fast while keeping quality high.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-gray-600 hover:border-transparent hover:shadow-[0_0_24px_rgba(124,58,237,0.15)] transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${s.color} text-white shadow`}> 
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white ubuntu-medium">{s.title}</h3>
              <p className="mt-2 text-gray-300">{s.description}</p>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-evalx-blue/5 via-evalx-purple/5 to-evalx-cyan/5" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a href="#contact" className="button-primary">Let’s work together</a>
        </motion.div>
      </div>
    </section>
  )
}


