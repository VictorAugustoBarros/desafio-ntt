export interface Product {
  uuid: string;
  name: string;
  description: string;
  price: number;
  category: Category;
}

export interface Category {
  uuid: string;
  name: string;
}
