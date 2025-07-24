export const REDIS_KEYS = {
  PRODUCT_ALL: `products:all`,
  PRODUCT: (uuid: string) => `product:${uuid}`,
  PRODUCTS_PAGINATED: (limit?: number, offset?: number) =>
    `products:all:limit=${limit ?? 'all'}:offset=${offset ?? 0}`,
  INVALIDATE_PRODUCT_ALL: `products:all:*`,
};
