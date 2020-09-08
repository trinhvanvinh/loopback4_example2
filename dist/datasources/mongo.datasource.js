"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    "name": "mongo",
    "connector": "mongodb",
    "url": "",
    "host": "127.0.0.1",
    "port": 27017,
    "user": "",
    "password": "",
    "database": "",
    "useNewUrlParser": true,
    "useUnifiedTopology": true
};
let MongoDataSource = class MongoDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super((dsConfig));
    }
    stop() {
        return super.disconnect();
    }
};
MongoDataSource.dataSourceName = 'mongo';
MongoDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.mongo', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], MongoDataSource);
exports.MongoDataSource = MongoDataSource;
//# sourceMappingURL=mongo.datasource.js.map