import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory, HasOneRepositoryFactory, juggler } from '@loopback/repository';
import { User, Order, UserCredentials } from '../models';
import { OrderRepository } from './order.repository';
import { UserCredentialRepository } from './user-credential.repository';
export declare type Credentials = {
    email: string;
    password: string;
};
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id> {
    protected orderRepository: OrderRepository;
    protected userCredentialsRepositoryGetter: Getter<UserCredentialRepository>;
    orders: HasManyRepositoryFactory<Order, typeof User.prototype.id>;
    readonly userCredentials: HasOneRepositoryFactory<UserCredentials, typeof User.prototype.id>;
    constructor(datasource: juggler.DataSource, orderRepository: OrderRepository, userCredentialsRepositoryGetter: Getter<UserCredentialRepository>);
    findCredentials(userId: typeof User.prototype.id): Promise<UserCredentials | undefined>;
}
