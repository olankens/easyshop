import { Inject, Injectable } from '@nestjs/common';
import {
  ProductFilters,
  ProductRepository,
} from '../../../product/application/ports/product.repository.port.js';
import { Product } from '../../../product/domain/entities/product.entity.js';
import { ProductId } from '../../../product/domain/value-objects/product-id.vo.js';
import type { DrizzleDB } from '../../../shared/infrastructure/database/postgres/drizzle.provider.js';
import { DRIZZLE } from '../../../shared/infrastructure/database/postgres/drizzle.provider.js';

@Injectable()
export class DrizzleProductRepostory implements ProductRepository {
  constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) {}

  save(product: Product): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findById(id: ProductId): Promise<Product | null> {
    throw new Error('Method not implemented.');
  }

  findAll(filters: ProductFilters): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }
}
