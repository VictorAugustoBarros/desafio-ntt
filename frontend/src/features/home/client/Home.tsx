'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Package } from 'lucide-react';
import type { Category, Product } from '@/lib/types';
import CategoryOverview from '../components/category-overview';
import DashboardStats from '../components/dashboard-stats';
import FeaturedProducts from '../components/featured-products';

interface HomeClientProps {
  products: Product[];
  categories: Category[];
}

export default function HomeClient({ products, categories }: HomeClientProps) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Seção de Cabeçalho */}
      <div className="text-center space-y-4">
        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <Package className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">NTT Data Store</h1>
          <p className="text-xl text-muted-foreground">
            Gerencie e monitore seu catálogo de produtos
          </p>
        </div>
      </div>

      {/* Seção de Estatísticas */}
      <DashboardStats products={products} categories={categories} />

      {/* Grade de Conteúdo Principal */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Coluna Esquerda - Produtos em Destaque */}
        <div className="lg:col-span-2">
          <FeaturedProducts products={products} limit={3} />
        </div>

        {/* Coluna Direita - Barra Lateral */}
        <div className="h-full">
          <CategoryOverview products={products} />
        </div>
      </div>

      {/* Seção de Atividades Recentes */}
      {products.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
            <CardDescription>
              Últimas atualizações no seu catálogo de produtos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {products.slice(0, 3).map((product, index) => (
                <div
                  key={product.uuid}
                  className="flex items-center justify-between py-2 border-b last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {index === 0
                          ? 'Adicionado recentemente'
                          : index === 1
                          ? 'Preço atualizado'
                          : 'Categoria alterada'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
