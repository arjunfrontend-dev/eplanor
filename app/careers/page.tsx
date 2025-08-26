'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock, DollarSign, Users, Coffee, Zap, Heart, Award, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const CareersPage = () => {
  const openPositions = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      salary: '$120k - $180k',
      description: 'Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.',
      requirements: ['5+ years experience', 'React/Node.js expertise', 'Cloud platforms knowledge', 'Team collaboration skills']
    },
    {
      title: 'AI/ML Engineer',
      department: 'Data Science',
      location: 'Remote / New York',
      type: 'Full-time',
      salary: '$140k - $200k',
      description: 'Lead the development of machine learning models and AI-powered solutions for our enterprise clients.',
      requirements: ['PhD/Masters in ML/AI', 'Python/TensorFlow', 'Large-scale ML systems', 'Research background']
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Austin',
      type: 'Full-time',
      salary: '$110k - $160k',
      description: 'Build and maintain our cloud infrastructure, CI/CD pipelines, and monitoring systems.',
      requirements: ['AWS/Azure expertise', 'Kubernetes/Docker', 'Infrastructure as Code', 'Monitoring tools']
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote / Los Angeles',
      type: 'Full-time',
      salary: '$90k - $140k',
      description: 'Create exceptional user experiences and beautiful interfaces for our digital products.',
      requirements: ['5+ years UX/UI design', 'Figma/Sketch proficiency', 'Design systems', 'User research']
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Boston',
      type: 'Full-time',
      salary: '$130k - $180k',
      description: 'Drive product strategy and roadmap for our enterprise SaaS platform.',
      requirements: ['Product management experience', 'Technical background', 'Agile methodologies', 'Stakeholder management']
    },
    {
      title: 'Sales Development Representative',
      department: 'Sales',
      location: 'Remote / Chicago',
      type: 'Full-time',
      salary: '$60k - $90k + Commission',
      description: 'Generate and qualify leads for our enterprise sales team.',
      requirements: ['1+ years sales experience', 'CRM proficiency', 'Communication skills', 'Results-driven mindset']
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family.'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and unlimited PTO.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Learning & Development',
      description: '$5,000 annual learning budget and access to premium courses.'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Competitive Compensation',
      description: 'Top-tier salaries, equity packages, and performance bonuses.'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Modern Equipment',
      description: 'Latest MacBook Pro, monitor setup, and premium software tools.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Events',
      description: 'Regular team building activities, retreats, and social events.'
    }
  ];

  const culture = [
    {
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      title: 'Collaborative Environment',
      quote: 'Working at NextEdge feels like being part of a close-knit family where everyone supports each other.'
    },
    {
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      title: 'Innovation Focus',
      quote: 'We encourage experimentation and give everyone the freedom to pursue innovative ideas.'
    },
    {
      image: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      title: 'Work-Life Balance',
      quote: 'NextEdge truly values work-life balance, making it possible to excel professionally while enjoying life.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative navy-bg text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?_gl=1*7d4ftf*_ga*MzgwMjAwMDY0LjE3NTYyMTkzMjI.*_ga_8JE65Q40S6*czE3NTYyMTkzMjIkbzEkZzEkdDE3NTYyMTk0MTYkajYwJGwwJGgw')] opacity-10 bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Join Our{' '}
            <span className="gradient-text">Dream Team</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Build the future of technology with talented individuals who share your passion for innovation and excellence.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button className="gradient-bg text-white rounded-2xl px-8 py-3 text-lg">
              View Open Positions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="border-white text-black rounded-2xl px-8 py-3 text-lg hover:bg-white hover:text-[#0A192F]">
              Learn About Culture
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
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
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our talented team and help us build the next generation of technology solutions.
            </p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                      <div className="lg:col-span-2">
                        <h3 className="text-2xl font-semibold text-[#1F2937] mb-2">
                          {position.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {position.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {position.requirements.map((req, reqIndex) => (
                            <Badge key={reqIndex} variant="secondary" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center text-gray-600">
                          <Building className="w-4 h-4 mr-2" />
                          <span className="text-sm">{position.department}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{position.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="text-sm">{position.type}</span>
                        </div>
                        <div className="flex items-center text-[#10B981] font-semibold">
                          <DollarSign className="w-4 h-4 mr-2" />
                          <span className="text-sm">{position.salary}</span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <Link href="/contact">
                          <Button className="gradient-bg text-white rounded-xl">
                            Apply Now
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why You'll Love Working Here
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We believe in taking care of our team with comprehensive benefits and a supportive work environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#1F2937] mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
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
              Our Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our team members about what makes NextEdge a great place to work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culture.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#1F2937] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 italic">
                      "{item.quote}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
              Our Hiring Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A transparent and fair process designed to find the right fit for both you and our team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Application',
                description: 'Submit your application and tell us why you\'re excited about NextEdge.'
              },
              {
                step: '2',
                title: 'Screen Call',
                description: 'Initial conversation with our HR team to discuss your background and interests.'
              },
              {
                step: '3',
                title: 'Technical Interview',
                description: 'Deep dive into your technical skills and problem-solving approach.'
              },
              {
                step: '4',
                title: 'Team Meet',
                description: 'Meet with potential teammates and learn more about our culture.'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-[#1F2937] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
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
            Ready to Build the Future?
          </motion.h2>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join us in creating technology solutions that make a real difference in the world.
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
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-black rounded-2xl px-8 py-3 text-lg hover:bg-white/10">
              Ask Questions
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;