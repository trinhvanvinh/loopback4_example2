import {belongsTo, Entity, model, property} from '@loopback/repository';
import {ShoppingCartItem} from './shopping-cart-item.model';
import {User} from './user.model';


@model()
export class ShoppingCart extends Entity {
  @belongsTo(() => User)
  userId: string;

  @property.array(ShoppingCartItem)
  items?: ShoppingCartItem[];

  constructor(data?: Partial<ShoppingCart>) {
    super(data);
  }

}
