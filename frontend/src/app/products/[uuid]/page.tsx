import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Package, Tag, DollarSign } from 'lucide-react';
import { mockProducts } from '@/lib/mock-data';

interface ProductDetailPageProps {
  params: {
    uuid: string;
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { uuid } = await params;

  const product = mockProducts.find((p) => p.uuid === uuid);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/">
          <Button variant="outline" size="sm" className="mb-4 bg-transparent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Produtos
          </Button>
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant="secondary">{product.category}</Badge>
                <span className="text-sm text-muted-foreground font-mono">
                  ID: {product.uuid}
                </span>
              </div>
              <CardTitle className="text-2xl">{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary mb-4">
                R${product.price.toFixed(2)}
              </div>
              <CardDescription className="text-base leading-relaxed">
                {product.description}
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5" />
                Detalhes do Produto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b">
                <span className="font-medium">UUID:</span>
                <span className="font-mono text-sm">{product.uuid}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b">
                <span className="font-medium flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  Categoria:
                </span>
                <Badge variant="outline">{product.category}</Badge>
              </div>
              <div className="flex items-center justify-between py-2 border-b">
                <span className="font-medium flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Preço:
                </span>
                <span className="text-lg font-bold">
                  R${product.price.toFixed(2)}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
