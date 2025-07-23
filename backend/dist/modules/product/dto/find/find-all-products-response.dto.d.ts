export declare class ProductsCategory {
    uuid: string;
    name: string;
}
export declare class FindAllProducts {
    uuid: string;
    name: string;
    description: string;
    price: number;
    category: ProductsCategory;
}
export declare class FindAllProductsResponse {
    products: FindAllProducts[];
}
