import { encryptPassword, validatePassword } from '../models/User';
export interface IUser{
    user:string;
    email:string;
    password:string;
    encryptPassword(password:string):Promise<string>;
    validatePassword(password:string):Promise<boolean>;
}