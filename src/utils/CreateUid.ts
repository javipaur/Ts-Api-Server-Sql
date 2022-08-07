import { v4 as uuidv4 } from 'uuid';
export const createUuId= async function():Promise<string>{

    return await uuidv4();
  }