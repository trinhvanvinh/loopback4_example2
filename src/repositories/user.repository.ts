import {inject} from '@loopback/core';
import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {User, UserRelations} from '../models';


export class UserRepository extends
  DefaultCrudRepository<User, typeof User.prototype.id, UserRelations>{
  constructor(@inject('datasources.db') datasource: juggler.DataSource) {
    super(User, datasource);
  }
}
