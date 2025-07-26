"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REDIS_KEYS = void 0;
exports.REDIS_KEYS = {
    PRODUCT_ALL: `products:all`,
    PRODUCT: (uuid) => `product:${uuid}`,
    PRODUCTS_PAGINATED: (limit, offset) => `products:all:limit=${limit ?? 'all'}:offset=${offset ?? 0}`,
    INVALIDATE_PRODUCT_ALL: `products:all*`,
};
//# sourceMappingURL=redis-keys.constants.js.map