import { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'data-annotation',
    title: 'Data Annotation',
    description: 'High-quality data labeling services for AI model training',
    icon: '🏷️',
    features: [
      'Bounding box annotation',
      'Text labeling and classification',
      'Sentiment analysis tagging',
      'Speech-to-text transcription',
      'Image segmentation',
      'Quality assurance protocols'
    ],
    pricing: {
      hourly: 25,
      project: 500,
      description: 'Starting from $25/hour or project-based pricing'
    },
    examples: [
      'Object detection datasets',
      'Sentiment analysis corpora',
      'Named entity recognition',
      'Image classification sets'
    ]
  },
  {
    id: 'llm-evaluation',
    title: 'LLM Evaluation & Testing',
    description: 'Comprehensive evaluation of Large Language Models',
    icon: '🧠',
    features: [
      'Prompt testing and optimization',
      'Bias detection and analysis',
      'Response quality grading',
      'Hallucination detection',
      'Performance benchmarking',
      'Detailed evaluation reports'
    ],
    pricing: {
      hourly: 35,
      project: 800,
      description: 'Starting from $35/hour or project-based pricing'
    },
    examples: [
      'GPT vs Claude comparison',
      'Bias assessment reports',
      'Performance benchmarks',
      'Safety evaluations'
    ]
  },
  {
    id: 'ai-qa',
    title: 'AI-Assisted QA',
    description: 'Quality assurance and testing for AI systems',
    icon: '🔍',
    features: [
      'AI output benchmarking',
      'Error tracking and analysis',
      'Structured evaluation reports',
      'Performance monitoring',
      'Regression testing',
      'Continuous improvement'
    ],
    pricing: {
      hourly: 30,
      project: 600,
      description: 'Starting from $30/hour or project-based pricing'
    },
    examples: [
      'Model performance tracking',
      'Error analysis reports',
      'Quality metrics dashboards',
      'Testing automation'
    ]
  },
  {
    id: 'custom-ai',
    title: 'Custom AI Support',
    description: 'Flexible workforce for unique AI and data needs',
    icon: '⚙️',
    features: [
      'Custom annotation workflows',
      'Specialized evaluation protocols',
      'Research assistance',
      'Data pipeline support',
      '24/7 availability',
      'Scalable solutions'
    ],
    pricing: {
      hourly: 40,
      project: 1000,
      description: 'Starting from $40/hour or custom project pricing'
    },
    examples: [
      'Custom evaluation frameworks',
      'Specialized data labeling',
      'Research collaboration',
      'Technical consulting'
    ]
  }
]
