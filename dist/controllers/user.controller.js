"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tslib_1 = require("tslib");
const user_repository_1 = require("../repositories/user.repository");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const user_model_1 = require("../models/user.model");
let UserController = class UserController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    // TODO
    // api GET
    async findUsers(filter) {
        return this.userRepository.find(filter);
    }
};
tslib_1.__decorate([
    rest_1.get('/users', {
        responses: {
            '200': {
                description: 'Array of User model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(user_model_1.User) }
                    }
                }
            }
        }
    }),
    tslib_1.__param(0, rest_1.param.filter(user_model_1.User)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "findUsers", null);
UserController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(user_repository_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map