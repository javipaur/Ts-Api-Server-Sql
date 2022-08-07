import bcrypt from 'bcryptjs';

export const validatePassword=async function(passwordBd:string,passwordUser:string):Promise<boolean>{

    return await bcrypt.compare(passwordBd,passwordUser);
  }