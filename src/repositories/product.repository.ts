import {DefaultCrudRepository} from '@loopback/repository';
import {Product} from '../models';
import {inject} from '@loopback/core';
import {MongoDataSource} from '../datasources';


export class ProductRepository extends DefaultCrudRepository<
  Product, typeof Product.prototype.name
  >{
  constructor(@inject('datasources.mongo') dataSource: MongoDataSource ) {
    super(Product, dataSource);
  }
}