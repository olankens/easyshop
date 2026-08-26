import { AggregateRoot } from 'src/shared/domain/aggregate-root';
import { ProductId } from '../value-objects/product-id.vo';
import { Sku } from '../value-objects/sku.vo';
import { Money } from 'src/shared/domain/value-objects/money.vo';

export interface ProductProps {
  id: ProductId;
  name: string;
  description: string;
  price: Money;
  sku: Sku;
  stock: number;
  isActive: boolean;
  lowStockThreshold: number;
  createdAt: Date;
  updatedAt: Date;
}

export class Product extends AggregateRoot {
  private _id: ProductId;
  private _name: string;
  private _description: string;
  private _price: Money;
  private _sku: Sku;
  private _stock: number;
  private _isActive: boolean;
  private _lowStockThreshold: number;
  private _createdAt: Date;
  private _updatedAt: Date;

  private constructor(props: ProductProps) {
    super();
    this._id = props.id;
    this._name = props.name;
    this._description = props.description;
    this._price = props.price;
    this._sku = props.sku;
    this._stock = props.stock;
    this._isActive = props.isActive;
    this._lowStockThreshold = props.lowStockThreshold;
    this._createdAt = props.createdAt;
    this._updatedAt = props.updatedAt;
  }

  static create(
    name: string,
    description: string,
    price: Money,
    sku: string,
    stock: number,
  ) {
    Product.validateName(name);
    Product.validateStock(stock);
    const now = new Date();
    return new Product({
      id: new ProductId(),
      name,
      description,
      price,
      sku: Sku.create(sku),
      stock,
      isActive: true,
      lowStockThreshold: 5,
      createdAt: now,
      updatedAt: now,
    });
  }

  get id(): ProductId {
    return this._id;
  }

  get name(): string {
    return this.name;
  }

  get description(): string {
    return this._description;
  }

  get price(): Money {
    return this._price;
  }

  get sku(): Sku {
    return this._sku;
  }

  get stock(): number {
    return this._stock;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  get lowStockThreshold(): number {
    return this._lowStockThreshold;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  static reconstitude(props: ProductProps): Product {
    return new Product(props);
  }

  private static validateName(name: string): void {
    if (name.length < 2) {
      throw new Error('Product name must be at lest 2 characters');
    }
  }

  private static validateStock(stock: number): void {
    if (stock < 0) {
      throw new Error('Stock cannot be negative');
    }
  }
}
