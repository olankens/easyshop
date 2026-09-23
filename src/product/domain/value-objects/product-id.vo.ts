import { UniqueId } from '../../../shared/domain/value-objects/unique-id.vo.js';

export class ProductId extends UniqueId {
  constructor(id?: string) {
    super(id);
  }
}
