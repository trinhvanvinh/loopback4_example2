import { ValueOrPromise } from '@loopback/core';
import { AnyObject, juggler } from '@loopback/repository';
export declare class MongoDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: AnyObject);
    stop(): ValueOrPromise<void>;
}
