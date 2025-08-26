'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap, Database, Cloud, Shield, Cpu, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProductsPage = () => {
  const products = [
    {
      icon: <Database className="w-8 h-8" />,
      name: 'DataFlow Pro',
      category: 'Analytics',
      description: 'Advanced data analytics and visualization platform for enterprise-scale insights.',
      features: ['Real-time Analytics', 'Custom Dashboards', 'AI-Powered Insights', 'API Integration'],
      price: 'Enterprise',
      popular: true
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      name: 'CloudSync Enterprise',
      category: 'Infrastructure',
      description: 'Seamless cloud migration and management solution for modern businesses.',
      features: ['Multi-Cloud Support', 'Auto-Scaling', 'Security Monitoring', '24/7 Support'],
      price: 'Custom'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      name: 'SecureGuard AI',
      category: 'Security',
      description: 'AI-powered cybersecurity platform that adapts to emerging threats.',
      features: ['Threat Detection', 'Automated Response', 'Compliance Tools', 'Risk Assessment'],
      price: 'Enterprise'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      name: 'ProcessAI',
      category: 'Automation',
      description: 'Intelligent process automation platform that transforms workflows.',
      features: ['Workflow Designer', 'ML Integration', 'Performance Metrics', 'Custom APIs'],
      price: 'Scalable'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      name: 'InsightHub',
      category: 'Business Intelligence',
      description: 'Comprehensive business intelligence suite for data-driven decisions.',
      features: ['Predictive Analytics', 'Report Builder', 'Data Mining', 'Team Collaboration'],
      price: 'Pro'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      name: 'RapidDeploy',
      category: 'DevOps',
      description: 'Lightning-fast deployment and CI/CD platform for modern development teams.',
      features: ['Git Integration', 'Auto Testing', 'Rollback Support', 'Performance Monitoring'],
      price: 'Team'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative navy-bg text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Revolutionary Products for{' '}
                <span className="gradient-text">Modern Business</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover our suite of cutting-edge solutions designed to accelerate your digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="gradient-bg text-white rounded-2xl px-8 py-3">
                  Explore Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-white text-white rounded-2xl px-8 py-3 hover:bg-white hover:text-[#0A192F]">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                  alt="Product showcase"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
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
              Our Product Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each product is engineered to solve specific business challenges and drive measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 relative overflow-hidden group">
                  {product.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="gradient-bg text-white">Popular</Badge>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white mb-4">
                      {product.icon}
                    </div>
                    <div className="mb-2">
                      <Badge variant="secondary" className="mb-2">{product.category}</Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold text-[#1F2937]">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-6">
                      {product.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-[#1F2937]">
                        {product.price}
                      </span>
                      <Button className="gradient-bg text-white rounded-xl">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
              See Our Products in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch how our solutions transform businesses and drive innovation across industries.
            </p>
          </motion.div>

          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center relative group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&dpr=2"
                alt="Demo video thumbnail"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Watch Product Demo</h3>
                <p className="text-white/80">See how our solutions work together</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 to-purple-600/50 group-hover:from-blue-600/60 group-hover:to-purple-600/60 transition-colors duration-300"></div>
            </div>
          </motion.div>
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
            Ready to Start Your Free Demo?
          </motion.h2>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience the power of our products firsthand. No credit card required.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button className="bg-white text-[#2563EB] rounded-2xl px-8 py-3 text-lg hover:bg-gray-100">
              Start Free Demo
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

export default ProductsPage;