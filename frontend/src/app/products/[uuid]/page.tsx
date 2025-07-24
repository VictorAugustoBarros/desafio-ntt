import ProductDetailsClient from '@/features/products/client/ProductDetails';
import { getProductById } from '@/services/product.service';
import { notFound } from 'next/navigation';

interface ProductDetailsPageProps {
  params: {
    uuid: string;
  };
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { uuid } = await params;

  const product = await getProductById(uuid);

  console.log(product);
  if (!product) {
    return notFound();
  }

  return <ProductDetailsClient product={product} />;
}
