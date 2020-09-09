import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef, param, post, requestBody} from '@loopback/rest';
import {User} from '../models';
import {UserRepository} from '../repositories';

// @model()
// export class NewUserRequest extends User {
//     @property({
//         type: 'string',
//         required: true
//     })
//     password: string
// }

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

    // POST
    @post('/users', {
        responses: {
            '200': {
                description: 'User',
                content: {
                    'application/json': {
                        schema: {
                            'x-ts-type': User
                        }
                    }
                }
            }
        }
    })
    async create(
        @requestBody({
            content: {
                'application/json': {
                    schema: getModelSchemaRef(User, {
                        title: 'NewUser'
                    })
                }
            }
        })
        newUserRequest: User
    ): Promise<User> {

        //newUserRequest.roles = ['customer'];

        // encrypt the password
        //const password = await newUserRequest.password;

        try {
            // create new User
            const savedUser = await this.userRepository.create(
                newUserRequest
            )

            //await this.userRepository.create({password});


            return savedUser;

        } catch (error) {
            throw error;
        }

    }

}
