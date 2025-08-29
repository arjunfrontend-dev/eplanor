'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Shield, Zap, Cpu, BarChart3, Network } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Service } from '@/lib/data';

const iconMap = {
  Cloud,
  Shield,
  Zap,
  Cpu,
  BarChart3,
  Network
};

interface ServiceCardProps {
  service: Service;
  index?: number;
}

const ServiceCard = ({ service, index = 0 }: ServiceCardProps) => {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Cloud;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg group cursor-pointer overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute top-4 left-4">
            <Badge className="bg-white/90 text-[#2563EB] hover:bg-white">
              {service.category}
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <div className="flex items-center space-x-2">
              <IconComponent className="w-6 h-6" />
              <span className="text-sm font-medium">{service.timeline}</span>
            </div>
          </div>
        </div>
        
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-[#1F2937] group-hover:text-[#2563EB] transition-colors">
            {service.name}
          </CardTitle>
          <p className="text-sm text-gray-600">{service.tagline}</p>
        </CardHeader>
        
        <CardContent>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {service.description}
          </p>
          
          <div className="space-y-2 mb-4">
            {service.features.slice(0, 3).map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                {feature}
              </div>
            ))}
          </div>
          
          <Link href={`/services/${service.slug}`}>
            <Button className="w-full gradient-bg text-white rounded-xl group-hover:shadow-lg transition-shadow">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </CardContent>
        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;