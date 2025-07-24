import { notFound } from 'next/navigation';
import ProductDetailsClient from '@/features/products/client/ProductDetails';
import { getProductById } from '@/services/product.service';

type Props = {
  params: Promise<{ uuid: string }>;
};

export default async function ProductDetailsPage({ params }: Props) {
  const { uuid } = await params;

  const product = await getProductById(uuid);

  if (!product) return notFound();

  return <ProductDetailsClient product={product} />;
}
