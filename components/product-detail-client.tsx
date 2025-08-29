'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, Zap, Cloud, Shield, Cpu, BarChart3, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const iconMap = {
  Cloud,
  Shield,
  Zap,
  Cpu,
  BarChart3,
  Network
};

interface ProductDetailClientProps {
  product: {
    name: string;
    slug: string;
    tagline: string;
    description: string;
    category: string;
    icon: string;
    image: string;
    pricing: string;
    benefits: string[];
    features: string[];
  };
}

const ProductDetailClient = ({ product }: ProductDetailClientProps) => {
  const IconComponent = iconMap[product.icon as keyof typeof iconMap] || Cloud;

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative navy-bg text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')] opacity-10 bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-white/20 text-white border-white/30">
                  {product.category}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {product.name}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {product.tagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
               
                <Link href="/contact">
                  <Button  className="gradient-bg text-white rounded-2xl px-8 py-3" >
                    Talk to eplanor Team
                  </Button>
                </Link>
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
                  src={product.image}
                  alt={product.name}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl"></div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-[#1F2937] mb-6">
                  Product Overview
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {product.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
           
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed, built with enterprise-grade reliability and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white mb-4">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1F2937] mb-2">
                      {feature}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Advanced capabilities designed to streamline your workflow and boost productivity.
                    </p>
                  </CardContent>
                </Card>
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
            Ready to Get Started with {product.name}?
          </motion.h2>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of companies already using {product.name} to transform their operations.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
          
            <Link href="/contact">
              <Button variant="outline" className="border-white text-black rounded-2xl px-8 py-3 text-lg hover:bg-white/10">
                Talk to eplanor Team
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailClient;