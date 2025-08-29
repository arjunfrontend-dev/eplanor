export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  icon: string;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  process: string[];
  deliverables: string[];
  timeline: string;
  icon: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'eplanor CloudX',
    slug: 'eplanor-cloudx',
    category: 'Cloud Platform',
    tagline: 'Enterprise-grade cloud infrastructure that scales with your business',
    description: 'eplanor CloudX is a comprehensive cloud platform that provides scalable infrastructure, automated deployment, and intelligent resource management for modern enterprises.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    features: [
      'Auto-scaling infrastructure',
      'Multi-cloud deployment',
      'Real-time monitoring',
      'Cost optimization',
      'Security compliance',
      '99.99% uptime SLA'
    ],
    benefits: [
      'Reduce infrastructure costs by up to 40%',
      'Deploy applications 10x faster',
      'Automatic scaling based on demand',
      'Enterprise-grade security and compliance'
    ],
    icon: 'Cloud'
  },
  {
    id: '2',
    name: 'eplanor SecureNet',
    slug: 'eplanor-securenet',
    category: 'Cybersecurity Suite',
    tagline: 'AI-powered cybersecurity that adapts to emerging threats',
    description: 'eplanor SecureNet provides comprehensive cybersecurity protection with AI-driven threat detection, automated response, and compliance management.',
    image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    features: [
      'AI threat detection',
      'Automated incident response',
      'Compliance monitoring',
      'Vulnerability assessment',
      'Security analytics',
      '24/7 SOC support'
    ],
    benefits: [
      'Detect threats 95% faster than traditional methods',
      'Reduce security incidents by 80%',
      'Automated compliance reporting',
      'Real-time threat intelligence'
    ],
    icon: 'Shield'
  },
  {
    id: '3',
    name: 'eplanor FlowOps',
    slug: 'eplanor-flowops',
    category: 'Workflow Automation',
    tagline: 'Intelligent automation that transforms your business processes',
    description: 'eplanor FlowOps streamlines complex business workflows with intelligent automation, reducing manual tasks and improving operational efficiency.',
    image: 'https://images.pexels.com/photos/3861775/pexels-photo-3861775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    features: [
      'Visual workflow designer',
      'AI-powered automation',
      'Integration with 500+ apps',
      'Real-time analytics',
      'Custom triggers and actions',
      'Mobile workflow management'
    ],
    benefits: [
      'Reduce manual tasks by 70%',
      'Improve process efficiency by 50%',
      'Eliminate human errors',
      'Scale operations without adding headcount'
    ],
    icon: 'Zap'
  },
  {
    id: '4',
    name: 'eplanor VisionAI',
    slug: 'eplanor-visionai',
    category: 'AI/ML Engine',
    tagline: 'Advanced AI and machine learning platform for intelligent insights',
    description: 'eplanor VisionAI empowers businesses with cutting-edge AI and machine learning capabilities, from predictive analytics to computer vision.',
    image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    features: [
      'Pre-trained ML models',
      'Custom model training',
      'Computer vision APIs',
      'Natural language processing',
      'Predictive analytics',
      'AutoML capabilities'
    ],
    benefits: [
      'Accelerate AI adoption by 10x',
      'Reduce model development time by 80%',
      'Improve prediction accuracy by 95%',
      'No-code AI model deployment'
    ],
    icon: 'Cpu'
  },
  {
    id: '5',
    name: 'eplanor DataPulse',
    slug: 'eplanor-datapulse',
    category: 'Analytics Dashboard',
    tagline: 'Real-time analytics and business intelligence platform',
    description: 'eplanor DataPulse transforms raw data into actionable insights with powerful analytics, interactive dashboards, and automated reporting.',
    image: 'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    features: [
      'Real-time data visualization',
      'Custom dashboard builder',
      'Automated reporting',
      'Data source integration',
      'Advanced analytics',
      'Mobile-responsive dashboards'
    ],
    benefits: [
      'Make data-driven decisions 5x faster',
      'Increase revenue insights by 60%',
      'Reduce reporting time by 90%',
      'Connect 100+ data sources'
    ],
    icon: 'BarChart3'
  },
  {
    id: '6',
    name: 'eplanor OmniConnect',
    slug: 'eplanor-omniconnect',
    category: 'Integration Hub',
    tagline: 'Seamless integration platform connecting all your business systems',
    description: 'eplanor OmniConnect provides a unified integration platform that connects disparate systems, APIs, and data sources across your organization.',
    image: 'https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    features: [
      'API management',
      'Data synchronization',
      'Real-time integration',
      'Pre-built connectors',
      'Custom integration builder',
      'Integration monitoring'
    ],
    benefits: [
      'Connect systems 10x faster',
      'Reduce integration costs by 60%',
      'Eliminate data silos',
      'Real-time data synchronization'
    ],
    icon: 'Network'
  }
];

export const services: Service[] = [
  {
    id: '1',
    name: 'Cloud Migration Consulting',
    slug: 'cloud-migration-consulting',
    category: 'Cloud Services',
    tagline: 'Seamless migration to cloud with zero downtime and maximum efficiency',
    description: 'Our cloud migration experts help you transition from legacy systems to modern cloud infrastructure with comprehensive planning, execution, and optimization.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    features: [
      'Cloud readiness assessment',
      'Migration strategy planning',
      'Zero-downtime migration',
      'Performance optimization',
      'Cost optimization',
      'Security compliance'
    ],
    process: [
      'Assessment and planning',
      'Architecture design',
      'Migration execution',
      'Testing and validation',
      'Go-live and monitoring',
      'Optimization and support'
    ],
    deliverables: [
      'Cloud migration strategy',
      'Architecture blueprints',
      'Migration roadmap',
      'Performance benchmarks',
      'Security compliance report',
      'Cost optimization plan'
    ],
    timeline: '8-16 weeks',
    icon: 'Cloud'
  },
  {
    id: '2',
    name: 'Cybersecurity Audits',
    slug: 'cybersecurity-audits',
    category: 'Security Services',
    tagline: 'Comprehensive security assessment to protect your digital assets',
    description: 'Our cybersecurity experts conduct thorough security audits to identify vulnerabilities, assess risks, and provide actionable recommendations.',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    features: [
      'Vulnerability assessment',
      'Penetration testing',
      'Compliance evaluation',
      'Risk analysis',
      'Security policy review',
      'Incident response planning'
    ],
    process: [
      'Security assessment',
      'Vulnerability scanning',
      'Penetration testing',
      'Risk evaluation',
      'Report generation',
      'Remediation planning'
    ],
    deliverables: [
      'Security assessment report',
      'Vulnerability analysis',
      'Risk matrix',
      'Compliance checklist',
      'Remediation roadmap',
      'Security recommendations'
    ],
    timeline: '4-8 weeks',
    icon: 'Shield'
  },
  {
    id: '3',
    name: 'DevOps Automation',
    slug: 'devops-automation',
    category: 'Development Services',
    tagline: 'Streamline development with automated CI/CD and infrastructure',
    description: 'Transform your development lifecycle with automated pipelines, infrastructure as code, and continuous deployment practices.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    features: [
      'CI/CD pipeline setup',
      'Infrastructure as code',
      'Automated testing',
      'Container orchestration',
      'Monitoring and alerting',
      'Release management'
    ],
    process: [
      'Current state analysis',
      'Pipeline design',
      'Automation implementation',
      'Testing and validation',
      'Team training',
      'Continuous improvement'
    ],
    deliverables: [
      'CI/CD pipelines',
      'Infrastructure templates',
      'Automated test suites',
      'Monitoring dashboards',
      'Documentation',
      'Training materials'
    ],
    timeline: '6-12 weeks',
    icon: 'Zap'
  },
  {
    id: '4',
    name: 'AI/ML Custom Solutions',
    slug: 'ai-ml-custom-solutions',
    category: 'AI Services',
    tagline: 'Custom AI and machine learning solutions tailored to your business',
    description: 'Leverage the power of artificial intelligence with custom ML models, predictive analytics, and intelligent automation solutions.',
    image: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    features: [
      'Custom ML model development',
      'Predictive analytics',
      'Natural language processing',
      'Computer vision',
      'Recommendation engines',
      'AI strategy consulting'
    ],
    process: [
      'Use case identification',
      'Data analysis and preparation',
      'Model development',
      'Training and validation',
      'Deployment and integration',
      'Performance monitoring'
    ],
    deliverables: [
      'Custom ML models',
      'AI strategy document',
      'Data pipeline',
      'Model documentation',
      'Integration APIs',
      'Performance metrics'
    ],
    timeline: '12-20 weeks',
    icon: 'Cpu'
  },
  {
    id: '5',
    name: 'Data Strategy & BI',
    slug: 'data-strategy-bi',
    category: 'Analytics Services',
    tagline: 'Transform data into strategic business insights and intelligence',
    description: 'Develop comprehensive data strategies and implement business intelligence solutions that drive informed decision-making.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    features: [
      'Data strategy development',
      'BI dashboard creation',
      'Data warehouse design',
      'ETL pipeline development',
      'Advanced analytics',
      'Self-service analytics'
    ],
    process: [
      'Data assessment',
      'Strategy development',
      'Architecture design',
      'Implementation',
      'Dashboard creation',
      'User training'
    ],
    deliverables: [
      'Data strategy roadmap',
      'BI dashboards',
      'Data warehouse',
      'ETL processes',
      'Analytics reports',
      'Training documentation'
    ],
    timeline: '10-16 weeks',
    icon: 'BarChart3'
  },
  {
    id: '6',
    name: 'Enterprise Integration Services',
    slug: 'enterprise-integration-services',
    category: 'Integration Services',
    tagline: 'Connect and integrate enterprise systems for seamless operations',
    description: 'Integrate disparate enterprise systems, applications, and data sources to create a unified, efficient operational environment.',
    image: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    features: [
      'System integration',
      'API development',
      'Data synchronization',
      'Legacy system modernization',
      'Middleware solutions',
      'Integration monitoring'
    ],
    process: [
      'System analysis',
      'Integration planning',
      'API development',
      'Data mapping',
      'Testing and validation',
      'Deployment and monitoring'
    ],
    deliverables: [
      'Integration architecture',
      'Custom APIs',
      'Data mapping documents',
      'Integration platform',
      'Monitoring dashboards',
      'Support documentation'
    ],
    timeline: '8-14 weeks',
    icon: 'Network'
  }
];