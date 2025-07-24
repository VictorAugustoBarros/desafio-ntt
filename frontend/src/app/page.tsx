import HomeClient from '@/features/home/client/Home';
import { getCategories } from '@/services/category.service';
import { getProducts } from '@/services/product.service';

export default async function HomePage() {
  const products = await getProducts();
  const categories = await getCategories();

  return <HomeClient products={products} categories={categories} />;
}
