"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toProductDto = toProductDto;
function toProductDto(entity) {
    return {
        id: entity.id,
        uuid: entity.uuid,
        name: entity.name,
        description: entity.description,
        price: entity.price,
        categoryId: entity.categoryId,
        category: entity.category ?? undefined,
    };
}
//# sourceMappingURL=product.mapper.js.map