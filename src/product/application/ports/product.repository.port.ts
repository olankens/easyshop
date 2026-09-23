import { Product } from '../../../product/domain/entities/product.entity.js';
import { ProductId } from '../../../product/domain/value-objects/product-id.vo.js';

export const PRODUCT_REPOSITORY = Symbol('PRODUCT_REPOSITORY');

export interface ProductFilters {
  isActive?: boolean;
  minPrice?: number;
  maxPrice?: number;
}

export interface ProductRepository {
  save(product: Product): Promise<void>;
  findById(id: ProductId): Promise<Product | null>;
  findAll(filters: ProductFilters): Promise<Product[]>;
}
