export class Sku {
  private static readonly SKU_PATTERN = /^[A-Za-z0-9-]+$/;
  private static readonly MIN_LENGHT = 3;
  private static readonly MAX_LENGHT = 50;

  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  static create(value: string): Sku {
    const trimmed = value.trim();
    if (trimmed.length < Sku.MIN_LENGHT || trimmed.length > Sku.MAX_LENGHT) {
      throw new Error(
        `SKU must be between ${Sku.MIN_LENGHT} and ${Sku.MAX_LENGHT} characters`,
      );
    }
    if (!Sku.SKU_PATTERN.test(trimmed)) {
      throw new Error(
        'SKU must contain only alphanumeric characters and dashes',
      );
    }
    return new Sku(trimmed.toUpperCase());
  }

  getValue(): string {
    return this.value;
  }

  equals(other: Sku): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
