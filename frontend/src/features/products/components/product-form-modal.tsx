'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, Edit } from 'lucide-react';
import type { Category, Product } from '@/lib/types';
import { getCategories } from '@/services/category.service';

interface ProductFormModalProps {
  onSave: (product: Product) => void;
  editProduct?: Product | null;
  onEditComplete?: () => void;
}

export default function ProductFormModal({
  onSave,
  editProduct = null,
  onEditComplete,
}: ProductFormModalProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    categoryUuid: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Busca categorias ao montar o componente
  useEffect(() => {
    async function fetchCategories() {
      const cats = await getCategories();
      setCategories(cats);
    }
    fetchCategories();
  }, []);

  // Ao receber produto para editar, preenche o form e abre modal
  useEffect(() => {
    if (editProduct) {
      setFormData({
        name: editProduct.name,
        description: editProduct.description,
        price: editProduct.price.toString(),
        categoryUuid: editProduct.category.uuid,
      });
    }
  }, [editProduct]);

  const resetForm = () => {
    if (editProduct) {
      setFormData({
        name: editProduct.name,
        description: editProduct.description,
        price: editProduct.price.toString(),
        categoryUuid: editProduct.category.uuid,
      });
    } else {
      setFormData({
        name: '',
        description: '',
        price: '',
        categoryUuid: '',
      });
    }
    setErrors({});
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      resetForm();
      if (editProduct && onEditComplete) {
        onEditComplete();
      }
    }
  };

  const handleCreateNew = () => {
    resetForm();
    setIsOpen(true);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Product name is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (!formData.price.trim()) {
      newErrors.price = 'Price is required';
    } else if (isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      newErrors.price = 'Price must be a valid positive number';
    }

    if (!formData.categoryUuid) {
      newErrors.category = 'Category is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const selectedCategory = categories.find(
      (cat) => cat.uuid === formData.categoryUuid,
    );

    if (!selectedCategory) {
      setErrors({ category: 'Selected category is invalid' });
      return;
    }

    const product: Product = {
      uuid: editProduct ? editProduct.uuid : '', // vazio ao criar
      name: formData.name.trim(),
      description: formData.description.trim(),
      price: Number(formData.price),
      category: selectedCategory,
    };

    onSave(product);

    setIsOpen(false);
    resetForm();

    if (editProduct && onEditComplete) {
      onEditComplete();
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {editProduct ? (
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-transparent"
          >
            <Edit className="w-4 h-4" />
            Edit Product
          </Button>
        ) : (
          <Button onClick={handleCreateNew} className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Product
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {editProduct ? 'Edit Product' : 'Create New Product'}
          </DialogTitle>
          <DialogDescription>
            {editProduct
              ? 'Make changes to the product information below.'
              : 'Fill in the details to create a new product.'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter product name"
                className={errors.name ? 'border-destructive' : ''}
              />
              {errors.name && (
                <span className="text-sm text-destructive">{errors.name}</span>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  handleInputChange('description', e.target.value)
                }
                placeholder="Enter product description"
                className={errors.description ? 'border-destructive' : ''}
                rows={3}
              />
              {errors.description && (
                <span className="text-sm text-destructive">
                  {errors.description}
                </span>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="price">Price (R$)</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                min="0"
                value={formData.price}
                onChange={(e) => handleInputChange('price', e.target.value)}
                placeholder="0.00"
                className={errors.price ? 'border-destructive' : ''}
              />
              {errors.price && (
                <span className="text-sm text-destructive">{errors.price}</span>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.categoryUuid}
                onValueChange={(value) =>
                  handleInputChange('categoryUuid', value)
                }
              >
                <SelectTrigger
                  className={`w-full ${
                    errors.category ? 'border-destructive' : ''
                  }`}
                >
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.uuid} value={category.uuid}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.category && (
                <span className="text-sm text-destructive">
                  {errors.category}
                </span>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">
              {editProduct ? 'Save Changes' : 'Create Product'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
