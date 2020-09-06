import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { User, UserRelations } from '../models';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id, UserRelations> {
    constructor(datasource: juggler.DataSource);
}
