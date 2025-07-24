const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_API}/products`;

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
export async function getProducts(page: number = 1, limit: number = 20) {
  try {
    const response = await fetch(`${BASE_URL}?page=${page}&limit=${limit}`, {
      method: 'GET',
    });

    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
}

// GET product by UUID
export async function getProductById(uuid: string) {
  try {
    const response = await fetch(`${BASE_URL}/${uuid}`, {
      method: 'GET',
    });

    const product = await response.json();

    return product;
  } catch (error) {
    console.error('Failed to fetch product:', error);
    return null;
  }
}

// POST create product
export async function createProduct(payload: CreateProductRequest) {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return await response.json();
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
    const response = await fetch(`${BASE_URL}/${uuid}`, {
      method: 'PUT',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return data.product;
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
    const response = await fetch(`${BASE_URL}/${uuid}`, {
      method: 'DELETE',
    });

    const data = await response.json();
    return data as DeleteProductResponse;
  } catch (error) {
    console.error('Failed to delete product:', error);
    return null;
  }
}
