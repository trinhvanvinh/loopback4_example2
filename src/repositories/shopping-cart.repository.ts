import {DefaultKeyValueRepository} from '@loopback/repository';
import {ShoppingCart} from '../models';
import {inject} from '@loopback/core';
import {MongoDataSource} from '../datasources';

export class ShoppingCartRepository extends DefaultKeyValueRepository<ShoppingCart>{
  constructor(@inject('datasources.mongo') dataSource: MongoDataSource) {
    super(ShoppingCart, dataSource);
  }
}