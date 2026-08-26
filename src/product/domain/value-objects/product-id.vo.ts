import { UniqueId } from 'src/shared/domain/value-objects/unique-id.vo';

export class ProductId extends UniqueId {
  constructor(id?: string) {
    super(id);
  }
}
