import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_API}/categories`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getCategories() {
  try {
    const response = await axiosInstance.get('/');
    return response.data.categories;
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return [];
  }
}
