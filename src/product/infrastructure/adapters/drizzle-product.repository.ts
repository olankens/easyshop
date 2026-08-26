import { Inject, Injectable } from '@nestjs/common';
import {
  ProductFilters,
  ProductRepository,
} from 'src/product/application/ports/product.repository.port';
import { Product } from 'src/product/domain/entities/product.entity';
import { ProductId } from 'src/product/domain/value-objects/product-id.vo';
import type { DrizzleDB } from 'src/shared/infrastructure/database/postgres/drizzle.provider';
import { DRIZZLE } from 'src/shared/infrastructure/database/postgres/drizzle.provider';

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
