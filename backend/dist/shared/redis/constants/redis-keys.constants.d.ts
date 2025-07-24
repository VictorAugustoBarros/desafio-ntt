export declare const REDIS_KEYS: {
    PRODUCT_ALL: string;
    PRODUCT: (uuid: string) => string;
    PRODUCTS_PAGINATED: (limit?: number, offset?: number) => string;
    INVALIDATE_PRODUCT_ALL: string;
};
