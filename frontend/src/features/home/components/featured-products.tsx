import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@/lib/types';

interface FeaturedProductsProps {
  products: Product[];
  limit?: number;
}

export default function FeaturedProducts({
  products,
  limit = 6,
}: FeaturedProductsProps) {
  const featuredProducts = products.slice(0, limit);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <p className="text-muted-foreground">
            Discover our latest and most popular items
          </p>
        </div>
        <Link href="/products">
          <Button variant="outline" className="bg-transparent">
            View All
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <Card
            key={product.uuid}
            className="h-full flex flex-col hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant="secondary" className="text-xs">
                  {product.category.name}
                </Badge>
                <span className="text-xs text-muted-foreground font-mono">
                  {product.uuid.slice(0, 8)}...
                </span>
              </div>
              <CardTitle className="text-lg line-clamp-1">
                {product.name}
              </CardTitle>
              <CardDescription className="text-sm line-clamp-2">
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-2xl font-bold text-primary">
                R${product.price.toFixed(2)}
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/products/${product.uuid}`} className="w-full">
                <Button className="w-full" size="sm">
                  View Details
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
