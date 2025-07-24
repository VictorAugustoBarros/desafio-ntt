import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, ShoppingCart, Tag, TrendingUp } from 'lucide-react';
import type { Category, Product } from '@/lib/types';

interface DashboardStatsProps {
  products: Product[];
  categories: Category[];
}

export default function DashboardStats({
  products,
  categories,
}: DashboardStatsProps) {
  const totalProducts = products.length;
  const averagePrice =
    products.reduce((sum, product) => sum + product.price, 0) / products.length;
  const totalValue = products.reduce((sum, product) => sum + product.price, 0);

  const stats = [
    {
      title: 'Total Products',
      value: totalProducts,
      icon: Package,
      description: 'Products in catalog',
    },
    {
      title: 'Categories',
      value: categories.length,
      icon: Tag,
      description: 'Different categories',
    },
    {
      title: 'Average Price',
      value: `R$${averagePrice.toFixed(2)}`,
      icon: TrendingUp,
      description: 'Average product price',
    },
    {
      title: 'Total Value',
      value: `R$${totalValue.toFixed(2)}`,
      icon: ShoppingCart,
      description: 'Total catalog value',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
