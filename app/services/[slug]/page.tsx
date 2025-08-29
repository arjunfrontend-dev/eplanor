import { services } from '@/lib/data';
import { notFound } from 'next/navigation';
import ServiceDetailClient from '@/components/service-detail-client';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

const ServiceDetailPage = ({ params }: ServiceDetailPageProps) => {
  const service = services.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
};

export default ServiceDetailPage;