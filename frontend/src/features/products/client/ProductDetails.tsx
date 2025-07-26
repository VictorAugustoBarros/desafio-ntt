'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
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
import type { Category, Product } from '@/lib/types';
import DeleteProductDialog from '../components/delete-product-dialog';
import { toast, Toaster } from 'sonner';
import { notFound, useRouter } from 'next/navigation';
import {
  deleteProduct,
  getProductById,
  updateProduct,
} from '@/services/product.service';
import ProductFormModal from '../components/product-form-modal';
import { getCategories } from '@/services/category.service';

export default function ProductDetailsClient({ uuid }: { uuid: string }) {
  const router = useRouter();
  const [product, setProduct] = useState<Product | undefined>();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getProductById(uuid);
        if (!productData) {
          return notFound();
        }
        setProduct(productData);

        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, [uuid]);

  const handleUpdateProduct = async (updatedProduct: Product) => {
    try {
      await updateProduct(updatedProduct.uuid, {
        name: updatedProduct.name,
        description: updatedProduct.description,
        categoryUuid: updatedProduct.category.uuid,
        price: updatedProduct.price,
      });

      setProduct(updatedProduct);
      toast.success('Produto atualizado com sucesso!');
    } catch (error) {
      toast.error('Erro ao atualizar o produto.');
      console.error(error);
    }
  };

  const handleDeleteProduct = async (productUuid: string) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      await deleteProduct(productUuid);
      toast.success('Produto deletado com sucesso.');

      router.push('/products');
    } catch (error) {
      toast.error('Erro ao deletar o produto.');
      console.error(error);
    }
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-muted-foreground">Carregando produto...</p>
      </div>
    );
  }

  return (
    <>
      <Toaster position="top-right" richColors closeButton duration={4000} />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <Link href="/products">
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent w-fit"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>

          <div className="flex flex-col sm:flex-row gap-2">
            {/* Usando o ProductFormModal para editar */}
            <ProductFormModal
              editProduct={product}
              onSave={handleUpdateProduct}
              categories={categories}
            />

            <DeleteProductDialog
              product={product}
              onDelete={handleDeleteProduct}
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:w-1/2 w-full mx-auto">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{product.category.name}</Badge>
                  <span
                    title={product.uuid}
                    className="text-sm text-muted-foreground font-mono truncate max-w-[200px] sm:max-w-[250px] lg:max-w-none"
                  >
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
                  <Badge variant="outline">{product.category.name}</Badge>
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
    </>
  );
}
