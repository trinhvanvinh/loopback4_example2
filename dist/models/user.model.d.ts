import { Entity } from '@loopback/repository';
import { Order } from './order.model';
import { UserCredentials } from './user-credentials.model';
import { ShoppingCart } from './shopping-cart-model';
export declare class User extends Entity {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    orders: Order[];
    userCredentials: UserCredentials;
    shoppingCart: ShoppingCart;
    roles: string[];
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelation = User & UserRelations;
