'use client';

import { motion } from 'framer-motion';
import { ArrowRight, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';

const FAQPage = () => {
  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What services does NextEdge offer?',
          answer: 'NextEdge offers a comprehensive suite of technology services including custom software development, AI/ML solutions, cloud migration, digital transformation consulting, cybersecurity, and data analytics. We specialize in helping businesses leverage cutting-edge technology to drive growth and innovation.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve clients across various industries including FinTech, Healthcare, E-commerce, Manufacturing, Education, and more. Our solutions are tailored to meet the unique challenges and requirements of each industry while leveraging our deep technical expertise.'
        },
        {
          question: 'Do you work with startups or only enterprise clients?',
          answer: 'We work with businesses of all sizes, from innovative startups to Fortune 500 enterprises. Our scalable solutions and flexible engagement models allow us to provide value regardless of company size or stage of growth.'
        }
      ]
    },
    {
      category: 'Services & Solutions',
      questions: [
        {
          question: 'How long does a typical project take?',
          answer: 'Project timelines vary based on scope and complexity. A simple web application might take 4-8 weeks, while enterprise-scale digital transformation projects can take 6-18 months. We provide detailed project timelines during the planning phase and maintain transparent communication throughout.'
        },
        {
          question: 'Do you provide ongoing support and maintenance?',
          answer: 'Yes, we offer comprehensive support and maintenance services including 24/7 monitoring, regular updates, security patches, performance optimization, and feature enhancements. Our support packages are tailored to your specific needs and budget.'
        },
        {
          question: 'Can you integrate with our existing systems?',
          answer: 'Absolutely. We specialize in system integration and have extensive experience working with legacy systems, third-party APIs, and modern cloud platforms. We ensure seamless integration while maintaining security and performance standards.'
        }
      ]
    },
    {
      category: 'Technology & Development',
      questions: [
        {
          question: 'What technologies do you specialize in?',
          answer: 'We work with cutting-edge technologies including React, Node.js, Python, AWS, Azure, Kubernetes, TensorFlow, and many others. Our team stays current with the latest tech trends and chooses the best tools for each project based on requirements and long-term goals.'
        },
        {
          question: 'Do you follow agile development methodologies?',
          answer: 'Yes, we use agile methodologies including Scrum and Kanban to ensure iterative development, regular client feedback, and flexible project management. This approach allows us to deliver value quickly while adapting to changing requirements.'
        },
        {
          question: 'How do you ensure code quality and security?',
          answer: 'We follow industry best practices including code reviews, automated testing, continuous integration/deployment (CI/CD), security scanning, and compliance with standards like OWASP. All our developers are trained in secure coding practices.'
        }
      ]
    },
    {
      category: 'Pricing & Process',
      questions: [
        {
          question: 'How do you price your services?',
          answer: 'Our pricing depends on project scope, complexity, timeline, and resource requirements. We offer flexible pricing models including fixed-price projects, hourly rates, and dedicated team arrangements. We provide detailed estimates after understanding your specific needs.'
        },
        {
          question: 'What is your development process?',
          answer: 'Our process includes Discovery & Strategy, Design & Planning, Development & Testing, Deployment & Launch, and ongoing Support & Maintenance. We maintain transparent communication and provide regular updates throughout each phase.'
        },
        {
          question: 'Do you sign NDAs and confidentiality agreements?',
          answer: 'Yes, we take intellectual property protection very seriously. We\'re happy to sign NDAs and confidentiality agreements to protect your sensitive information and business ideas. Security and confidentiality are paramount in all our client relationships.'
        }
      ]
    }
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
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find answers to common questions about our services, processes, and how we can help your business succeed.
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse our comprehensive FAQ to learn more about NextEdge and how we can help transform your business.
            </p>
          </motion.div>

          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#1F2937] flex items-center">
                    <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center text-white mr-3">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    {category.category}
                  </h3>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${categoryIndex}-${index}`}
                      className="border-0"
                    >
                      <Card className="shadow-lg border-0 overflow-hidden">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 transition-colors">
                          <span className="text-left font-semibold text-[#1F2937]">
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </AccordionContent>
                      </Card>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
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
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Can't find the answer you're looking for? We're here to help! Reach out to our team and we'll get back to you quickly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
                    Live Chat
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Chat with our support team in real-time for immediate assistance.
                  </p>
                  <Button className="gradient-bg text-white rounded-xl">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
                    Schedule a Call
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Book a consultation call with one of our experts.
                  </p>
                  <Button className="gradient-bg text-white rounded-xl">
                    Book Call
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                    <HelpCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
                    Contact Form
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Send us a detailed message and we'll respond within 24 hours.
                  </p>
                  <Link href="/contact">
                    <Button className="gradient-bg text-white rounded-xl">
                      Send Message
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
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
              Additional Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore more resources to learn about our capabilities and how we can help your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Case Studies', description: 'See how we\'ve helped other businesses succeed', href: '/case-studies' },
              { title: 'Our Services', description: 'Explore our comprehensive service offerings', href: '/services' },
              { title: 'About Us', description: 'Learn about our team, mission, and values', href: '/about' },
              { title: 'Careers', description: 'Join our team and build the future together', href: '/careers' }
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={resource.href}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg cursor-pointer group">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-[#1F2937] mb-2 group-hover:text-[#2563EB] transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {resource.description}
                      </p>
                      <div className="flex items-center text-[#2563EB] group-hover:text-[#9333EA] transition-colors">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
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
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Don't let questions hold you back. Let's discuss your project and see how NextEdge can help you achieve your goals.
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
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white rounded-2xl px-8 py-3 text-lg hover:bg-white/10">
              Schedule Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;