import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {User} from '../models';
import {UserRepository} from '../repositories';

export class UserController {
    constructor(
        @repository(UserRepository) protected userRepository: UserRepository
    ) {}
    // TODO
    // api GET

    @get('/users', {
        responses: {
            '200': {
                description: 'Array of User model instances',
                content: {
                    'application/json': {
                        schema: {type: 'array', items: getModelSchemaRef(User)}
                    }
                }
            }
        }
    })
    async findUsers(
        @param.filter(User)
        filter?: Filter<User>,
    ): Promise<User[]> {
        console.log(filter, User);
        return this.userRepository.find(filter);
    }
}
