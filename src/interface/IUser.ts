
export interface IUser{
    name:string;
    email:string;
    password:string;
    identificadorUsuario:string;
    encryptPassword(password:string):Promise<string>;
    validatePassword(password:string):Promise<boolean>;
    createUuId():string;
}