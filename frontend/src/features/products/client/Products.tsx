'use client';

import { useEffect, useState } from 'react';
import ProductList from '@/features/products/components/product-list';
import { Badge } from '@/components/ui/badge';
import ProductFormModal from '@/features/products/components/product-form-modal';
import { createProduct, getProducts } from '@/services/product.service';
import { toast } from 'sonner';
import { getCategories } from '@/services/category.service';
import { Button } from '@/components/ui/button';
import { Category, Product } from '@/lib/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ProductsClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProductsAndCategories = async (page: number, limit: number) => {
    try {
      setIsLoading(true);
      const [productsData, categoriesData] = await Promise.all([
        getProducts(page, limit),
        getCategories(),
      ]);
      setProducts(productsData);
      setCategories(categoriesData);
    } catch (error) {
      console.error('Erro ao buscar produtos e categorias:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProductsAndCategories(page, limit);
  }, [page, limit]);

  const handleSaveProduct = async (
    productData: Omit<Product, 'uuid'> | Product,
  ) => {
    if ('uuid' in productData && productData.uuid) {
      setProducts((prev) =>
        prev.map((p) => (p.uuid === productData.uuid ? productData : p)),
      );
    } else {
      await createProduct({
        name: productData.name,
        description: productData.description,
        price: productData.price,
        categoryUuid: productData.category.uuid,
      });

      setPage(1);
      await fetchProductsAndCategories(1, limit);
      toast.success('Produto cadastrado com sucesso!');
    }
  };

  const handlePrevPage = () => setPage((p) => Math.max(p - 1, 1));
  const handleNextPage = () => setPage((p) => p + 1);
  const handleLimitChange = (value: string) => {
    setLimit(Number(value));
    setPage(1);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="mb-8">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold">Nossos Produtos</h1>
            <ProductFormModal
              onSave={handleSaveProduct}
              categories={categories}
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Badge variant="outline">
              {products.length} Produtos nesta página
            </Badge>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Itens por página:
              </span>
              <Select value={String(limit)} onValueChange={handleLimitChange}>
                <SelectTrigger className="w-[80px] h-8">
                  <SelectValue placeholder="Limite" />
                </SelectTrigger>
                <SelectContent>
                  {[3, 5, 10, 20].map((opt) => (
                    <SelectItem key={opt} value={String(opt)}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <p className="text-muted-foreground">
            Navegue por nossa coleção de produtos de alta qualidade em diversas
            categorias.
          </p>
        </div>

        {isLoading ? (
          <p>Carregando produtos...</p>
        ) : (
          <ProductList products={products} />
        )}
      </div>

      <div className="border-t py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <Button
            onClick={handlePrevPage}
            disabled={page === 1 || isLoading}
            variant="outline"
          >
            Anterior
          </Button>

          <span className="text-sm text-muted-foreground">Página {page}</span>

          <Button
            onClick={handleNextPage}
            disabled={products.length < limit || isLoading}
            variant="outline"
          >
            Próxima
          </Button>
        </div>
      </div>
    </div>
  );
}
