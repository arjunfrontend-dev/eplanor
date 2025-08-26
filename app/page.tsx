'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Star, Zap, Shield, Rocket, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import AnimatedCounter from '@/components/ui/animated-counter';
import Link from 'next/link';
import Hero from '@/components/layout/Hero';

const HomePage = () => {
  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Application Development',
      description: 'Cutting-edge solutions that push the boundaries of what\'s possible.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Resource Management',
      description: 'Your One-stop-shop for Ecm services.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'The urgency for advanced cloud solutions.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Staffing Services',
      description: 'Optimized for speed and performance at every level of your stack.'
    },
     {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity ',
      description: 'Bank-level security protocols to protect your most valuable assets.'
    },
     {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Data Analytics',
      description: 'AI/ML – Setting Standards for the future.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'NextEdge transformed our entire tech infrastructure. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder, StartupX',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'Working with NextEdge was the best decision we made. Their expertise is unmatched.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Engineering, Scale Inc',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      content: 'The level of innovation and technical excellence NextEdge brings is incredible.',
      rating: 5
    }
  ];

  const logos = [
         
    'Genentech', 'GAP', 'Novartis', 'COMCAST ', 'charles river', 'Broadridge'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
<Hero/>

  {/* Features Section */}
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
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures success from concept to deployment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#1F2937] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Why Choose eplanor?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine innovation, security, and performance to deliver solutions that drive real results.
            </p>

           
          </motion.div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Discover & Strategize',
                description: 'We analyze your needs and develop a comprehensive strategy.'
              },
              {
                step: '02',
                title: 'Design & Develop',
                description: 'Our team creates innovative solutions tailored to your goals.'
              },
              {
                step: '03',
                title: 'Deploy & Scale',
                description: 'We launch your solution and help you scale for growth.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold text-[#1F2937] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Trusted By Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            className="text-center text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Trusted by innovators worldwide
          </motion.p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                className="text-gray-400 font-semibold text-xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    

      {/* Stats Section */}
      <section className="py-24 navy-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: 500, suffix: '+', label: 'Projects Delivered' },
              { number: 100, suffix: '+', label: 'Happy Clients' },
              { number: 50, suffix: '+', label: 'Team Members' },
              { number: 99, suffix: '%', label: 'Success Rate' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-gray-300 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from the companies we've helped transform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <Avatar className="w-12 h-12 mr-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-[#1F2937]">{testimonial.name}</p>
                        <p className="text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
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
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join hundreds of companies that have already revolutionized their operations with eplanor.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <Button className="bg-white text-[#2563EB] rounded-2xl px-8 py-3 text-lg hover:bg-gray-100 transition-colors">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;