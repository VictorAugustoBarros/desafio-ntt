import Link from 'next/link';
import type { Product } from '@/lib/types';
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

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
          <span className="text-xs text-muted-foreground font-mono">
            {product.uuid.slice(0, 8)}...
          </span>
        </div>
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <CardDescription className="text-sm line-clamp-3">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-2xl font-bold text-primary">
          ${product.price.toFixed(2)}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/products/${product.uuid}`} className="w-full">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
