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
    };
}
//# sourceMappingURL=product.mapper.js.map