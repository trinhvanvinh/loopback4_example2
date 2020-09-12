import {inject} from '@loopback/core';
import {DefaultCrudRepository, HasManyRepositoryFactory, juggler} from '@loopback/repository';
import {User, UserRelations, Order} from '../models';


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
  DefaultCrudRepository<User, typeof User.prototype.id, UserRelations>{

  public orders: HasManyRepositoryFactory<Order, typeof User.prototype.id>;


  constructor(@inject('datasources.mongo') datasource: juggler.DataSource) {
    super(User, datasource);
  }
}

