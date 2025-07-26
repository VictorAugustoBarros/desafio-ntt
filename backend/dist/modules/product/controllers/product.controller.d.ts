import { FindAllProductsHandler } from '../handlers/find-all-products.handler';
import { FindAllProductsResponse } from '../dto/find/find-all-products-response.dto';
import { CreateProductRequest } from '../dto/create/create-product-request.dto';
import { CreateProductResponse } from '../dto/create/create-product-response.dto';
import { CreateProductHandler } from '../handlers/create-product.handler';
import { FindProductResponse } from '../dto/find/find-product-response.dto';
import { FindProductHandler } from '../handlers/find-product.handler';
import { DeleteProductResponse } from '../dto/delete/delete-product-response.dto';
import { UpdateProductRequest } from '../dto/update/update-product-request.dto';
import { UpdateProductResponse } from '../dto/update/update-product-response.dto';
import { DeleteProductHandler } from '../handlers/delete-product.handler';
import { UpdateProductHandler } from '../handlers/update-product.handler';
import { PaginationDto } from 'src/common/dto/pagination.dto';
export declare class ProductController {
    private readonly findAllProductsHandler;
    private readonly createProductHandler;
    private readonly findProductHandler;
    private readonly updateProductHandler;
    private readonly deleteProductHandler;
    constructor(findAllProductsHandler: FindAllProductsHandler, createProductHandler: CreateProductHandler, findProductHandler: FindProductHandler, updateProductHandler: UpdateProductHandler, deleteProductHandler: DeleteProductHandler);
    findAll(paginationDto: PaginationDto): Promise<FindAllProductsResponse>;
    findByUuid(uuid: string): Promise<FindProductResponse>;
    create(request: CreateProductRequest): Promise<CreateProductResponse>;
    update(uuid: string, request: UpdateProductRequest): Promise<UpdateProductResponse>;
    delete(uuid: string): Promise<DeleteProductResponse>;
}
