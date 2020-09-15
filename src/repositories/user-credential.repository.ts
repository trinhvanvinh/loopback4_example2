import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {UserCredentials, UserCredentialsRelations} from '../models';
import {inject} from '@loopback/core';


export class UserCredentialRepository extends DefaultCrudRepository<
  UserCredentials, typeof UserCredentials.prototype.id, UserCredentialsRelations >{
  constructor(@inject('datasources.mongo') dataSource: juggler.DataSource) {
    super(UserCredentials, dataSource);
  }
}