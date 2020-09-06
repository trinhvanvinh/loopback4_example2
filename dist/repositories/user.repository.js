"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const core_1 = require("@loopback/core");
let UserRepository = class UserRepository extends repository_1.DefaultCrudRepository {
    constructor(datasource) {
        super(models_1.User, datasource);
    }
};
UserRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.db')),
    tslib_1.__metadata("design:paramtypes", [repository_1.juggler.DataSource])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map