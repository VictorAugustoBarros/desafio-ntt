import { Product } from '@/lib/types';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_API}/products`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

interface CreateProductRequest {
  name: string;
  description: string;
  price: number;
  categoryUuid: string;
}

interface UpdateProductRequest {
  name?: string;
  description?: string;
  price?: number;
  categoryUuid?: string;
}

interface DeleteProductResponse {
  message: string;
}

// GET all products
export async function getProducts(page = undefined, limit = undefined) {
  try {
    const response = await axiosInstance.get('', {
      params: { page, limit },
    });

    return response.data.products;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
}

// GET product by UUID
export async function getProductById(uuid: string): Promise<Product | null> {
  try {
    const response = await axiosInstance.get(`/${uuid}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch product:', error);
    throw error;
  }
}

// POST create product
export async function createProduct(payload: CreateProductRequest) {
  try {
    const response = await axiosInstance.post('', payload);
    return response.data;
  } catch (error) {
    console.error('Failed to create product:', error);
    return null;
  }
}

// PUT update product
export async function updateProduct(
  uuid: string,
  payload: UpdateProductRequest,
) {
  try {
    const response = await axiosInstance.put(`/${uuid}`, payload);
    return response.data.product;
  } catch (error) {
    console.error('Failed to update product:', error);
    return null;
  }
}

// DELETE product
export async function deleteProduct(
  uuid: string,
): Promise<DeleteProductResponse | null> {
  try {
    const response = await axiosInstance.delete(`/${uuid}`);
    return response.data as DeleteProductResponse;
  } catch (error) {
    console.error('Failed to delete product:', error);
    return null;
  }
}
