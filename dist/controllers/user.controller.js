"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
// @model()
// export class NewUserRequest extends User {
//     @property({
//         type: 'string',
//         required: true
//     })
//     password: string
// }
let UserController = class UserController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    // TODO
    // api GET
    async findUsers(filter) {
        console.log(filter, models_1.User);
        return this.userRepository.find(filter);
    }
    // POST
    async create(newUserRequest) {
        //newUserRequest.roles = ['customer'];
        // encrypt the password
        //const password = await newUserRequest.password;
        try {
            // create new User
            const savedUser = await this.userRepository.create(newUserRequest);
            //await this.userRepository.create({password});
            return savedUser;
        }
        catch (error) {
            throw error;
        }
    }
};
tslib_1.__decorate([
    rest_1.get('/users', {
        responses: {
            '200': {
                description: 'Array of User model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.User) }
                    }
                }
            }
        }
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.User)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "findUsers", null);
tslib_1.__decorate([
    rest_1.post('/users', {
        responses: {
            '200': {
                description: 'User',
                content: {
                    'application/json': {
                        schema: {
                            'x-ts-type': models_1.User
                        }
                    }
                }
            }
        }
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.User, {
                    title: 'NewUser'
                })
            }
        }
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.User]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
UserController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map