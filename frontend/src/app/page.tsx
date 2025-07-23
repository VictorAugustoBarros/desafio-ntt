import { mockProducts } from '@/lib/mock-data';
import ProductList from '@/components/product-list';
import { Badge } from '@/components/ui/badge';

export default function ProductsPage() {
  const totalProducts = mockProducts.length;
  const categories = [
    ...new Set(mockProducts.map((product) => product.category)),
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Our Products</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline">{totalProducts} Products</Badge>
          <Badge variant="outline">{categories.length} Categories</Badge>
        </div>
        <p className="text-muted-foreground">
          Browse our collection of high-quality products across various
          categories.
        </p>
      </div>

      <ProductList products={mockProducts} />
    </div>
  );
}
