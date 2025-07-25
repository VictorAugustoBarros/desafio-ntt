'use client';

import ProductList from '@/features/products/components/product-list';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';
import { Category, Product } from '@/lib/types';
import ProductFormModal from '@/features/products/components/product-form-modal';
import { createProduct, getProducts } from '@/services/product.service';
import { toast } from 'sonner';
import { getCategories } from '@/services/category.service';

export default function ProductsClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getProducts();
        const categoriesData = await getCategories();

        setProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  const totalProducts = products.length;

  const handleSaveProduct = async (
    productData: Omit<Product, 'uuid'> | Product,
  ) => {
    if ('uuid' in productData && productData.uuid) {
      // Editing existing product
      console.log('Editing Product...', productData);

      setProducts((prev) =>
        prev.map((p) => (p.uuid === productData.uuid ? productData : p)),
      );
    } else {
      // Creating new product
      const productSaved = await createProduct({
        name: productData.name,
        description: productData.description,
        price: productData.price,
        categoryUuid: productData.category.uuid,
      });

      const newProduct: Product = {
        ...productData,
        uuid: productSaved.uuid,
      };
      setProducts((prev) => [newProduct, ...prev]);

      toast.success('Produto cadastrado com sucesso!.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-3xl font-bold">Nossos Produtos</h1>
          <ProductFormModal
            onSave={handleSaveProduct}
            categories={categories}
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline">{totalProducts} Produtos</Badge>
        </div>
        <p className="text-muted-foreground">
          Navegue por nossa coleção de produtos de alta qualidade em diversas
          categorias.
        </p>
      </div>

      <ProductList products={products} />
    </div>
  );
}
