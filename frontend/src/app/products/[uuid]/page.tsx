import { notFound } from 'next/navigation';
import ProductDetailsClient from '@/features/products/client/ProductDetails';

type Props = {
  params: Promise<{ uuid: string }>;
};

export default async function ProductDetailsPage({ params }: Props) {
  const { uuid } = await params;

  if (!uuid) return notFound();

  return <ProductDetailsClient uuid={uuid} />;
}
