import {inject, lifeCycleObserver, ValueOrPromise} from '@loopback/core';
import {AnyObject, juggler} from '@loopback/repository';


const config = require('./mongo.datasource.config.json');

@lifeCycleObserver('datasource')
export class MongoDataSource extends juggler.DataSource {
  static dataSourceName = 'mongo';

  constructor(
    @inject('datasources.config.mongo', {optional: true})
    dsConfig: AnyObject = config
  ) {

    super((dsConfig));
  }

  stop(): ValueOrPromise<void> {
    return super.disconnect();
  }

}
