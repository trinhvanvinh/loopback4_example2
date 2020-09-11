import {Entity, model, property} from '@loopback/repository';

@model()
export class Product extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true
  })
  productId?: string;

  @property({
    type: 'string',
    required: true
  })
  name: string;

  @property({
    type: 'number',
    required: true
  })
  price: number;

  @property({
    type: 'string',
    required: true
  })
  image: string;

  @property({
    type: 'string'
  })
  description: string;

  @property({
    type: 'string'
  })
  details: string;

  constructor(data: Partial<Product>) {
    super(data);
  }

}

export interface ProductRelations {

}

export type ProductWithRelations = Product & ProductRelations;
