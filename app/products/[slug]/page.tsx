import { products } from '@/lib/data';
import { notFound } from 'next/navigation';
import ProductDetailClient from '@/components/product-detail-client';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailPage = ({ params }: ProductDetailPageProps) => {
  const product = products.find(p => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
};

export default ProductDetailPage;