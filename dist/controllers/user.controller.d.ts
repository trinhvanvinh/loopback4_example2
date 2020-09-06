import { UserRepository } from '../repositories/user.repository';
import { Filter } from '@loopback/repository';
import { User } from '../models/user.model';
export declare class UserController {
    protected userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    findUsers(filter?: Filter<User>): Promise<User[]>;
}
