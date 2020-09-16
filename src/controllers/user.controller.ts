import {Filter, model, property, repository} from '@loopback/repository';
import {get, getModelSchemaRef, param, post, requestBody, put} from '@loopback/rest';
import {User} from '../models';
import {UserRepository} from '../repositories';
import {inject} from '@loopback/testlab';


@model()
export class NewUserRequest extends User {
    @property({
        type: 'string',
        required: true
    })
    password: string
}

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

        newUserRequest.roles = ['customer'];

        // encrypt the password
        const password =  "123456";

        try {
            // create new User
            const savedUser = await this.userRepository.create(
                newUserRequest
            )

            await this.userRepository.userCredentials(savedUser.id).create({password})


            return savedUser;

        } catch (error) {
            throw error;
        }

    }

    @put('/users/{userId}', {
        responses: {
            '200': {
                description: 'User',
                content:{
                    'application/json':{
                        schema: {
                            'x-ts-type': User
                        }
                    }
                }
            }
        }
    })
    async set(

      @requestBody({description: 'update user'}) user: User,
      @param.path.string('userId') userId: string,


    ): Promise<void>{
        const updateUser = await this.userRepository.updateById(userId, user);
        return updateUser;
    }

}
