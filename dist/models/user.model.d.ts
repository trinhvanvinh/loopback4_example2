import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    roles: string[];
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelation = User & UserRelations;