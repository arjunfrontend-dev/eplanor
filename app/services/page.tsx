'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Code, Cpu, Cloud, BarChart3, Shield, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const ServicesPage = () => {
  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation roadmaps tailored to your business objectives.',
      features: [
        'Technology Assessment',
        'Strategic Planning',
        'ROI Analysis',
        'Implementation Roadmap'
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Custom Development',
      description: 'Bespoke software solutions built with cutting-edge technologies and best practices.',
      features: [
        'Web Applications',
        'Mobile Development',
        'API Integration',
        'Legacy Modernization'
      ]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions that automate processes and unlock insights from your data.',
      features: [
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Process Automation'
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for optimal performance.',
      features: [
        'Cloud Migration',
        'Infrastructure Design',
        'DevOps Implementation',
        'Cost Optimization'
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Data & Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics platforms.',
      features: [
        'Data Warehousing',
        'Business Intelligence',
        'Real-time Analytics',
        'Data Visualization'
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
      features: [
        'Security Audits',
        'Threat Detection',
        'Compliance Management',
        'Incident Response'
      ]
    }
  ];

  const workflow = [
    {
      step: '1',
      title: 'Discovery',
      description: 'We analyze your current state, challenges, and goals to understand your unique needs.'
    },
    {
      step: '2',
      title: 'Strategy',
      description: 'Our experts develop a comprehensive strategy tailored to your business objectives.'
    },
    {
      step: '3',
      title: 'Design',
      description: 'We create detailed designs and prototypes to visualize the solution.'
    },
    {
      step: '4',
      title: 'Develop',
      description: 'Our team builds the solution using industry best practices and cutting-edge tech.'
    },
    {
      step: '5',
      title: 'Deploy',
      description: 'We launch your solution with comprehensive testing and quality assurance.'
    },
    {
      step: '6',
      title: 'Support',
      description: 'Ongoing maintenance, monitoring, and optimization to ensure continued success.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative navy-bg text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30"></div>
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Services That Drive{' '}
            <span className="gradient-text">Innovation</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From strategy to implementation, we provide end-to-end technology services that transform your business.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button className="gradient-bg text-white rounded-2xl px-8 py-3 text-lg">
              Explore Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white rounded-2xl px-8 py-3 text-lg hover:bg-white hover:text-[#0A192F]">
                Get Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Comprehensive Technology Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a full spectrum of services to meet your technology needs and business objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg group cursor-pointer">
                  <CardHeader>
                    <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-[#1F2937] group-hover:text-[#2563EB] transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <Zap className="w-4 h-4 text-[#2563EB] mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button className="w-full gradient-bg text-white rounded-xl group-hover:shadow-lg transition-shadow">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
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
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach that ensures project success from initial consultation to ongoing support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflow.map((item, index) => (
              <motion.div
                key={item.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#1F2937] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {index < workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-4 w-8 h-8 z-10">
                    <ArrowRight className="w-6 h-6 text-[#2563EB]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-6">
                Why Choose NextEdge Services?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: 'Expert Team',
                    description: 'Our team of seasoned professionals brings decades of combined experience.'
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: 'Proven Methodology',
                    description: 'Time-tested processes that deliver consistent, high-quality results.'
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: 'Enterprise-Grade Security',
                    description: 'Security-first approach with compliance to industry standards.'
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1F2937] mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full"></div>
              </div>
            </motion.div>
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
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our services can help you achieve your technology goals and drive business growth.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <Button className="bg-white text-[#2563EB] rounded-2xl px-8 py-3 text-lg hover:bg-gray-100">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white rounded-2xl px-8 py-3 text-lg hover:bg-white/10">
              View Case Studies
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;