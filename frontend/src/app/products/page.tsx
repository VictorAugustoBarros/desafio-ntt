import ProductsClient from '@/features/products/client/Products';
import { getProducts } from '@/services/product.service';

export default async function ProductsPage() {
  const products = await getProducts(1, 20);

  return <ProductsClient products={products} />;
}
