'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Shield, Zap, Cpu, BarChart3, Network } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Product } from '@/lib/data';

const iconMap = {
  Cloud,
  Shield,
  Zap,
  Cpu,
  BarChart3,
  Network
};

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const IconComponent = iconMap[product.icon as keyof typeof iconMap] || Cloud;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 group overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute top-4 left-4">
            <Badge className="bg-white/90 text-[#2563EB] hover:bg-white">
              {product.category}
            </Badge>
          </div>
          <div className="absolute bottom-4 right-4">
            <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center">
              <IconComponent className="w-6 h-6 text-[#2563EB]" />
            </div>
          </div>
        </div>
        
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-[#1F2937] group-hover:text-[#2563EB] transition-colors">
            {product.name}
          </CardTitle>
          <p className="text-sm text-gray-600">{product.tagline}</p>
        </CardHeader>
        
        <CardContent>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {product.description}
          </p>
          
         
          
          <Link href={`/products/${product.slug}`}>
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

export default ProductCard;