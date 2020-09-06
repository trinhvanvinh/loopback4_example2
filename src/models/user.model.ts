import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true
  })
  title: string;

  @property({
    type: 'string',
  })
  desc: string

  @property({
    type: 'string',
    required: true
  })
  email: string;

  @property({
    type: 'string'
  })
  firstName: string;

  @property({
    type: 'string'
  })
  lastName: string;

  @property({
    type: 'array',
    itemType: 'string'
  })
  roles: string[];

  constructor(data?: Partial<User>) {
    super(data);
  }

}

export interface UserRelations {

}

export type UserWithRelation = User & UserRelations;


