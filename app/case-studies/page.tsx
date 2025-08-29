'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, TrendingUp, Users, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import AnimatedCounter from '@/components/ui/animated-counter';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'TechCorp Digital Transformation',
      industry: 'Technology',
      challenge: 'Legacy system modernization',
      solution: 'Cloud migration and microservices architecture',
      results: '40% cost reduction, 3x faster deployments',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=2',
      tags: ['Cloud Migration', 'Microservices', 'DevOps'],
      metrics: {
        costReduction: 40,
        performanceImprovement: 300,
        timeToMarket: 60
      },
      description: 'TechCorp needed to modernize their legacy monolithic application to support rapid business growth. We implemented a comprehensive cloud-first strategy with microservices architecture, resulting in significant cost savings and improved scalability.'
    },
    {
      id: 2,
      title: 'StartupX AI-Powered Analytics',
      industry: 'FinTech',
      challenge: 'Real-time fraud detection',
      solution: 'Machine learning pipeline with advanced analytics',
      results: '95% fraud detection accuracy, $2M in prevented losses',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=2',
      tags: ['Machine Learning', 'Real-time Analytics', 'Security'],
      metrics: {
        accuracy: 95,
        preventedLosses: 2000000,
        processingTime: 50
      },
      description: 'StartupX required a sophisticated fraud detection system to protect their growing user base. Our ML-powered solution processes transactions in real-time, identifying fraudulent activities with unprecedented accuracy.'
    },
    {
      id: 3,
      title: 'Scale Inc Infrastructure Optimization',
      industry: 'E-commerce',
      challenge: 'Scaling for Black Friday traffic',
      solution: 'Auto-scaling cloud infrastructure with CDN',
      results: '10x traffic handling, 99.99% uptime',
      image: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=2',
      tags: ['Auto-scaling', 'Performance', 'High Availability'],
      metrics: {
        trafficIncrease: 1000,
        uptime: 99.99,
        responseTime: 80
      },
      description: 'Scale Inc needed to handle massive traffic spikes during peak shopping seasons. We designed a resilient infrastructure that automatically scales based on demand, ensuring consistent performance under load.'
    },
    {
      id: 4,
      title: 'InnovateNow Data Warehouse',
      industry: 'Healthcare',
      challenge: 'Unified patient data analytics',
      solution: 'Enterprise data warehouse with BI dashboard',
      results: 'Single source of truth, 50% faster reporting',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=2',
      tags: ['Data Warehouse', 'Business Intelligence', 'Healthcare'],
      metrics: {
        dataIntegration: 15,
        reportingSpeed: 50,
        dataAccuracy: 99
      },
      description: 'InnovateNow had disparate data sources that made patient analytics difficult. We built a comprehensive data warehouse that provides unified reporting and insights across all healthcare operations.'
    },
    {
      id: 5,
      title: 'FutureTech Mobile Revolution',
      industry: 'Retail',
      challenge: 'Omnichannel customer experience',
      solution: 'Progressive web app with personalization',
      results: '200% mobile engagement, 35% conversion lift',
      image: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=2',
      tags: ['PWA', 'Mobile', 'Personalization'],
      metrics: {
        mobileEngagement: 200,
        conversionRate: 35,
        pageLoadSpeed: 70
      },
      description: 'FutureTech wanted to create a seamless shopping experience across all devices. Our PWA solution combines the best of web and mobile, delivering personalized experiences that drive engagement and sales.'
    },
    {
      id: 6,
      title: 'NextGen Security Overhaul',
      industry: 'Financial Services',
      challenge: 'Regulatory compliance and security',
      solution: 'Zero-trust security architecture',
      results: '100% compliance, zero security incidents',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=2',
      tags: ['Zero Trust', 'Compliance', 'Security'],
      metrics: {
        complianceScore: 100,
        securityIncidents: 0,
        riskReduction: 85
      },
      description: 'NextGen needed to meet strict financial regulations while maintaining operational efficiency. Our zero-trust security model ensures complete compliance and robust protection against evolving threats.'
    }
  ];

  const stats = [
    { number: 500, suffix: '+', label: 'Projects Delivered' },
    { number: 100, suffix: '+', label: 'Happy Clients' },
    { number: 50, suffix: 'M', label: 'Cost Savings Generated' },
    { number: 99, suffix: '%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative navy-bg text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Success Stories That{' '}
            <span className="gradient-text">Inspire</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover how we've helped organizations across industries achieve remarkable digital transformation results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button className="gradient-bg text-white rounded-2xl px-8 py-3 text-lg">
              Explore Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-[#2563EB] mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real projects, real results. See how we've transformed businesses across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="h-full cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-lg group overflow-hidden">
                      <div className="relative overflow-hidden">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 text-[#2563EB] hover:bg-white">
                            {study.industry}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-[#1F2937] group-hover:text-[#2563EB] transition-colors">
                          {study.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-3 mb-4">
                          <div>
                            <span className="text-sm font-semibold text-gray-800">Challenge:</span>
                            <p className="text-sm text-gray-600">{study.challenge}</p>
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-gray-800">Solution:</span>
                            <p className="text-sm text-gray-600">{study.solution}</p>
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-gray-800">Results:</span>
                            <p className="text-sm text-[#10B981] font-medium">{study.results}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {study.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button className="w-full gradient-bg text-white rounded-xl">
                          Read Full Case Study
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-[#1F2937]">
                        {study.title}
                      </DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-50 p-4 rounded-xl">
                          <h4 className="font-semibold text-[#1F2937] mb-2">Industry</h4>
                          <p className="text-gray-600">{study.industry}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl">
                          <h4 className="font-semibold text-[#1F2937] mb-2">Challenge</h4>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl">
                          <h4 className="font-semibold text-[#1F2937] mb-2">Solution</h4>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-[#1F2937] mb-4">Project Overview</h4>
                        <p className="text-gray-600 leading-relaxed">{study.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-[#1F2937] mb-4">Key Results</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {Object.entries(study.metrics).map(([key, value]) => (
                            <div key={key} className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                              <div className="text-2xl font-bold text-[#2563EB]">
                                {typeof value === 'number' ? (
                                  value > 100 && key !== 'uptime' ? `${value.toLocaleString()}` : `${value}`
                                ) : value}
                                {key.includes('percentage') || key.includes('accuracy') || key.includes('uptime') ? '%' : ''}
                                {key.includes('increase') || key.includes('improvement') || key.includes('engagement') ? '%' : ''}
                                {key.includes('reduction') || key.includes('speed') ? '%' : ''}
                                {key.includes('losses') ? '' : ''}
                              </div>
                              <div className="text-sm text-gray-600 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag) => (
                          <Badge key={tag} className="gradient-bg text-white">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across multiple industries, delivering tailored solutions for unique challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: <TrendingUp className="w-8 h-8" />, name: 'FinTech' },
              { icon: <Users className="w-8 h-8" />, name: 'Healthcare' },
              { icon: <Zap className="w-8 h-8" />, name: 'Technology' },
              { icon: <Shield className="w-8 h-8" />, name: 'Security' },
              { icon: <TrendingUp className="w-8 h-8" />, name: 'E-commerce' },
              { icon: <Users className="w-8 h-8" />, name: 'Retail' }
            ].map((industry, index) => (
              <motion.div
                key={industry.name}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {industry.icon}
                </div>
                <h3 className="font-semibold text-[#1F2937]">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Write Your Success Story?
          </motion.h2>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join the companies that have transformed their business with NextEdge. Let's create your success story together.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button className="bg-white text-[#2563EB] rounded-2xl px-8 py-3 text-lg hover:bg-gray-100">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="border-white text-white rounded-2xl px-8 py-3 text-lg hover:bg-white/10">
              Schedule Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;