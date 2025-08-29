"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

const ContactPage = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const offices = [
    {
      city: "San Francisco",
      address: "123 Innovation Drive, Suite 200",
      address2: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@eplanor.com.au",
    },
    {
      city: "New York",
      address: "456 Tech Avenue, Floor 15",
      address2: "New York, NY 10001",
      phone: "+1 (555) 987-6543",
      email: "ny@eplanor.com.au",
    },
    {
      city: "Austin",
      address: "789 Startup Lane, Building C",
      address2: "Austin, TX 73301",
      phone: "+1 (555) 456-7890",
      email: "austin@eplanor.com.au",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative navy-bg text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')] opacity-10 bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let's Build Something <span className="gradient-text">Amazing</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to transform your business? Get in touch with our team and
            let's discuss how we can help you achieve your goals.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you have a project in mind, need technical consulting,
                or want to explore partnership opportunities, we'd love to hear
                from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1F2937] mb-2">
                      Email Us
                    </h3>
                    <p className="text-gray-600">hello@eplanor.com.au</p>
                    <p className="text-gray-600">support@eplanor.com.au</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#1F2937] mb-2">
                      Our Office
                    </h3>
                    <p className="text-xl font-semibold text-[#1F2937] ">
                      Australia
                    </p>
                    <p className="text-gray-600">Suite 115 Ground Floor</p>
                    <p className="text-gray-600">
                      100 George Street 
                    </p>
 <p className="text-gray-600">PARRAMATTA NSW 2150</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#1F2937] mb-6">
                    Send us a message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="name"
                          className="text-sm font-medium text-gray-700"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1 rounded-xl border-gray-300 focus:border-[#2563EB] focus:ring-[#2563EB]"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-700"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1 rounded-xl border-gray-300 focus:border-[#2563EB] focus:ring-[#2563EB]"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="company"
                        className="text-sm font-medium text-gray-700"
                      >
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-1 rounded-xl border-gray-300 focus:border-[#2563EB] focus:ring-[#2563EB]"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-700"
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="mt-1 rounded-xl border-gray-300 focus:border-[#2563EB] focus:ring-[#2563EB]"
                        placeholder="Tell us about your project or how we can help..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full gradient-bg text-white rounded-xl py-3 text-lg"
                    >
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
              Find Us
            </h2>
            <p className="text-xl text-gray-600">
              Located in major tech hubs across the United States
            </p>
          </motion.div>

          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center relative">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&dpr=2"
                alt="Office locations map"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="relative z-10 text-center text-white">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">We're Global</h3>
                <p className="text-xl">
                  Serving clients worldwide from our strategic locations
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Modal */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              Message Sent Successfully!
            </DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              Thank you for reaching out! We've received your message and will
              get back to you within 24 hours.
            </p>
            <Button
              className="gradient-bg text-white rounded-xl"
              onClick={() => setShowSuccess(false)}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

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
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Don't wait - let's discuss your project and see how eplanor can help
            you achieve your goals.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button className="bg-white text-[#2563EB] rounded-2xl px-8 py-3 text-lg hover:bg-gray-100">
              Schedule a Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="border-white text-black rounded-2xl px-8 py-3 text-lg hover:bg-white/10"
            >
              View Our Work
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
