import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import type { Product } from '@/lib/types';

interface CategoryOverviewProps {
  products: Product[];
}

export default function CategoryOverview({ products }: CategoryOverviewProps) {
  const categoryStats = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category.name]) {
      acc[category.name] = {
        count: 0,
        totalValue: 0,
        averagePrice: 0,
      };
    }
    acc[category.name].count += 1;
    acc[category.name].totalValue += product.price;
    acc[category.name].averagePrice =
      acc[category.name].totalValue / acc[category.name].count;
    return acc;
  }, {} as Record<string, { count: number; totalValue: number; averagePrice: number }>);

  const maxCount = Math.max(
    ...Object.values(categoryStats).map((stat) => stat.count),
  );

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Categories Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {Object.entries(categoryStats).map(([category, stats]) => (
          <div key={category} className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Badge variant="outline">{category}</Badge>
                <span className="text-sm text-muted-foreground">
                  {stats.count} products
                </span>
              </div>
              <span className="text-sm font-medium">
                R${stats.averagePrice.toFixed(2)} avg
              </span>
            </div>
            <Progress value={(stats.count / maxCount) * 100} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
