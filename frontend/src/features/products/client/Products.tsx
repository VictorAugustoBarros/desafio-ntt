'use client';

import ProductList from '@/features/products/components/product-list';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Product } from '@/lib/types';
import ProductFormModal from '@/features/products/components/product-form-modal';
import { createProduct } from '@/services/product.service';
import { toast } from 'sonner';

interface ProductsClientProps {
  products: Product[];
}

export default function ProductsClient({ products }: ProductsClientProps) {
  const [productsList, setProductsList] = useState<Product[]>(products);
  const totalProducts = productsList.length;

  const handleSaveProduct = async (
    productData: Omit<Product, 'uuid'> | Product,
  ) => {
    if ('uuid' in productData && productData.uuid) {
      // Editing existing product
      console.log('Editing Product...', productData);

      setProductsList((prev) =>
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
      setProductsList((prev) => [newProduct, ...prev]);

      toast.success('Produto cadastrado com sucesso!.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-3xl font-bold">Nossos Produtos</h1>
          <ProductFormModal onSave={handleSaveProduct} />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline">{totalProducts} Produtos</Badge>
        </div>
        <p className="text-muted-foreground">
          Navegue por nossa coleção de produtos de alta qualidade em diversas
          categorias.
        </p>
      </div>

      <ProductList products={productsList} />
    </div>
  );
}
