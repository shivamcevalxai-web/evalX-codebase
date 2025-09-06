import { PortfolioItem } from '@/types'

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'object-detection-dataset',
    title: 'Object Detection Dataset Annotation',
    description: 'Comprehensive bounding box annotation for autonomous vehicle training dataset',
    category: 'annotation',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['Computer Vision', 'Bounding Boxes', 'Quality Control'],
    results: [
      '10,000+ images annotated',
      '99.2% accuracy rate',
      'Reduced annotation time by 40%'
    ],
    client: 'Autonomous Vehicle Startup',
    duration: '3 weeks'
  },
  {
    id: 'llm-comparison',
    title: 'GPT vs Claude vs Llama Evaluation',
    description: 'Comprehensive comparison of leading LLM models across multiple benchmarks',
    category: 'evaluation',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['LLM Evaluation', 'Benchmarking', 'Bias Detection'],
    results: [
      '15 evaluation metrics analyzed',
      'Bias detection implemented',
      'Performance ranking established'
    ],
    client: 'AI Research Lab',
    duration: '2 weeks'
  },
  {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis Corpus',
    description: 'Large-scale text annotation for sentiment analysis model training',
    category: 'annotation',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['Text Annotation', 'Sentiment Analysis', 'Quality Assurance'],
    results: [
      '50,000+ text samples labeled',
      'Multi-language support',
      '95% inter-annotator agreement'
    ],
    client: 'E-commerce Platform',
    duration: '4 weeks'
  },
  {
    id: 'ai-qa-framework',
    title: 'AI Quality Assurance Framework',
    description: 'Custom QA framework for monitoring AI model performance in production',
    category: 'qa',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['QA Automation', 'Performance Monitoring', 'Error Tracking'],
    results: [
      'Real-time monitoring implemented',
      'Error detection improved by 60%',
      'Automated reporting system'
    ],
    client: 'SaaS Company',
    duration: '6 weeks'
  },
  {
    id: 'custom-evaluation',
    title: 'Custom Model Evaluation Protocol',
    description: 'Specialized evaluation framework for domain-specific AI models',
    category: 'custom',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['Custom Protocols', 'Domain Expertise', 'Evaluation Design'],
    results: [
      'Custom evaluation metrics designed',
      'Domain-specific benchmarks created',
      'Comprehensive evaluation report'
    ],
    client: 'Healthcare AI Company',
    duration: '5 weeks'
  },
  {
    id: 'data-pipeline',
    title: 'Data Pipeline Optimization',
    description: 'Optimization of data processing pipeline for improved efficiency',
    category: 'custom',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['Data Engineering', 'Pipeline Optimization', 'Performance Tuning'],
    results: [
      'Processing speed improved by 70%',
      'Error rate reduced by 45%',
      'Scalability enhanced'
    ],
    client: 'Data Analytics Firm',
    duration: '4 weeks'
  }
]
