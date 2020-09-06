import {DefaultCrudRepository} from '@loopback/repository';
import {User} from '../models';


export class UserRepository extends
  DefaultCrudRepository<User, typeof User.prototype.id>{

}
