"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCategoryDto = toCategoryDto;
function toCategoryDto(entity) {
    return {
        id: entity.id,
        uuid: entity.uuid,
        name: entity.name,
    };
}
//# sourceMappingURL=calendar.mapper.js.map