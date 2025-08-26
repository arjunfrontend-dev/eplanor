'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Globe, Target, Heart, Lightbulb, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import AnimatedCounter from '@/components/ui/animated-counter';
import Link from 'next/link';

const AboutPage = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We push boundaries and explore new possibilities to deliver cutting-edge solutions.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion',
      description: 'We are passionate about technology and committed to excellence in everything we do.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical business practices.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership to achieve remarkable results.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Chief Executive Officer',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      bio: 'Visionary leader with 15+ years in tech innovation and digital transformation.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      bio: 'Technology expert specializing in cloud architecture and AI solutions.'
    },
    {
      name: 'Emily Johnson',
      role: 'VP of Engineering',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      bio: 'Engineering leader focused on building scalable, high-performance systems.'
    },
    {
      name: 'David Kim',
      role: 'Head of Design',
      avatar: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      bio: 'Creative director with expertise in UX/UI design and digital experiences.'
    },
    {
      name: 'Lisa Thompson',
      role: 'VP of Operations',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      bio: 'Operations expert ensuring seamless project delivery and client satisfaction.'
    },
    {
      name: 'James Wilson',
      role: 'Head of Sales',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      bio: 'Strategic sales leader building lasting partnerships with enterprise clients.'
    }
  ];

  const milestones = [
    { year: '2015', title: 'Company Founded', description: 'NextEdge was born from a vision to democratize cutting-edge technology.' },
    { year: '2017', title: 'First Major Client', description: 'Secured our first enterprise client and delivered transformational results.' },
    { year: '2019', title: 'Global Expansion', description: 'Opened offices in Europe and Asia to serve clients worldwide.' },
    { year: '2021', title: 'AI Innovation Lab', description: 'Launched dedicated AI research division to pioneer next-gen solutions.' },
    { year: '2023', title: '500+ Projects', description: 'Celebrated delivering over 500 successful projects across industries.' },
    { year: '2024', title: 'Industry Recognition', description: 'Named "Tech Innovator of the Year" by leading industry publications.' },
        { year: '2025', title: 'AI Innovation', description: 'Named "Tech Innovator of the Year" by leading industry publications.' }

  ];

  const stats = [
    { number: 9, label: 'Years of Excellence' },
    { number: 500, suffix: '+', label: 'Projects Completed' },
    { number: 100, suffix: '+', label: 'Happy Clients' },
    { number: 50, suffix: '+', label: 'Team Members' }
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
                Pioneering the Future of{' '}
                <span className="gradient-text">Technology</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                At eplanor, we're not just building software – we're crafting the digital experiences that will define tomorrow. Our team of visionaries, engineers, and innovators work tirelessly to transform ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/careers">
                  <Button className="gradient-bg text-white rounded-2xl px-8 py-3">
                    Join Our Team
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-white text-[#2563EB] rounded-2xl px-8 py-3 hover:bg-white hover:text-[#0A192F]">
                    Get In Touch
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
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                  alt="NextEdge team collaboration"
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
                  <AnimatedCounter end={stat.number} suffix={stat.suffix || ''} />
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white mr-4">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-[#1F2937]">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To democratize access to cutting-edge technology and empower businesses to achieve their full potential through innovative digital solutions. We believe that every organization, regardless of size, should have access to enterprise-grade technology that drives growth and success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white mr-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-[#1F2937]">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become the global leader in digital transformation, creating a world where technology serves humanity and enables businesses to make a positive impact. We envision a future where innovation knows no boundaries and every idea has the potential to change the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These values guide every decision we make and shape the culture that drives our success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#1F2937] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      {/* <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visionary leaders with decades of combined experience in technology, business, and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                  <CardContent className="p-6">
                    <div className="relative mb-6">
                      <Avatar className="w-24 h-24 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className="text-lg">{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                    </div>
                    <h3 className="text-xl font-semibold text-[#1F2937] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#2563EB] font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Timeline */}
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
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to industry leadership - key milestones that shaped our story.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="bg-white shadow-lg border-0">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-[#2563EB] mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-[#1F2937] mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
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
            Ready to Shape the Future Together?
          </motion.h2>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Whether you're looking to transform your business or join our incredible team, we'd love to hear from you.
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
                Start a Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/careers">
              <Button variant="outline" className="border-white text-black rounded-2xl px-8 py-3 text-lg hover:bg-white/10">
                Join Our Team
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;