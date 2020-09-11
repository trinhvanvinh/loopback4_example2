import {Entity, model, property} from '@loopback/repository';

@model()
export class ShoppingCartItem extends Entity {
  @property({id: true})
  productId: string;

  @property()
  name: string;

  @property()
  quantity: number;

  @property()
  price?: number;

  constructor(data?: Partial<ShoppingCartItem>) {
    super(data);
  }
}
