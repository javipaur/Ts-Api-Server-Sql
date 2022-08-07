import {Request,Response,NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import { IPayload } from '../interface/IPayload';

export const TokenValidation =async (req:Request,res:Response,next:NextFunction)=>{

    const token=req.header('auth-token');

    if(!token) return res.status(401).json('Access denied');
    //Verificamos los datos que estan dentro del token
    const payload = jwt.verify(token,process.env.TOKEN_SECRET ||'tokentest') as IPayload;

    console.log('payload'+payload);
    req.userId=payload.id;
    next();
}