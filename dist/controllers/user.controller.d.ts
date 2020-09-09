import { Filter } from '@loopback/repository';
import { User } from '../models';
import { UserRepository } from '../repositories';
export declare class UserController {
    protected userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    findUsers(filter?: Filter<User>): Promise<User[]>;
    create(newUserRequest: User): Promise<User>;
}
