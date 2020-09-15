import {inject, Getter} from '@loopback/core';
import {
  DefaultCrudRepository,
  HasManyRepositoryFactory,
  HasOneRepositoryFactory,
  juggler,
  repository,
} from '@loopback/repository';
import {User, UserRelations, Order, UserCredentials} from '../models';
import {OrderRepository} from './order.repository';
import {UserCredentialRepository} from './user-credential.repository';


// export class UserRepository extends
//   DefaultCrudRepository<User, typeof User.prototype.id, UserRelations>{
//   constructor(@inject('datasources.db') datasource: juggler.DataSource) {
//     super(User, datasource);
//   }
// }

export  type Credentials = {
  email: string;
  password: string
}

export class UserRepository extends
  DefaultCrudRepository<User, typeof User.prototype.id>{

  public orders: HasManyRepositoryFactory<Order, typeof User.prototype.id>;

  public readonly userCredentials: HasOneRepositoryFactory<UserCredentials, typeof User.prototype.id>;

  constructor(@inject('datasources.mongo') datasource: juggler.DataSource,
              @repository(OrderRepository) protected orderRepository: OrderRepository,
              @repository.getter('UserCredentialsRepository')
              protected userCredentialsRepositoryGetter: Getter<UserCredentialRepository>
              ) {
    super(User, datasource);
    this.userCredentials = this.createHasOneRepositoryFactoryFor(
      'userCredentials',
      userCredentialsRepositoryGetter
    );

    this.orders = this.createHasManyRepositoryFactoryFor(
      'orders',
      async ()=> orderRepository
    );

  }

  async findCredentials(
    userId: typeof User.prototype.id
  ): Promise<UserCredentials | undefined >{
    try{
      return await this.userCredentials(userId).get();
    }catch (err){
      if(err.code === 'ENTITY_NOT_FOUND' ){
        return undefined;
      }
      throw err;
    }
  }

}

