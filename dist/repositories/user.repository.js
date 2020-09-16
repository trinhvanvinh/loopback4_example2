"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const order_repository_1 = require("./order.repository");
let UserRepository = class UserRepository extends repository_1.DefaultCrudRepository {
    constructor(datasource, orderRepository, userCredentialsRepositoryGetter) {
        super(models_1.User, datasource);
        this.orderRepository = orderRepository;
        this.userCredentialsRepositoryGetter = userCredentialsRepositoryGetter;
        this.userCredentials = this.createHasOneRepositoryFactoryFor('userCredentials', userCredentialsRepositoryGetter);
        this.orders = this.createHasManyRepositoryFactoryFor('orders', async () => orderRepository);
    }
    async findCredentials(userId) {
        try {
            return await this.userCredentials(userId).get();
        }
        catch (err) {
            if (err.code === 'ENTITY_NOT_FOUND') {
                return undefined;
            }
            throw err;
        }
    }
};
UserRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.mongo')),
    tslib_1.__param(1, repository_1.repository(order_repository_1.OrderRepository)),
    tslib_1.__param(2, repository_1.repository.getter('UserCredentialsRepository')),
    tslib_1.__metadata("design:paramtypes", [repository_1.juggler.DataSource, order_repository_1.OrderRepository, Function])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map