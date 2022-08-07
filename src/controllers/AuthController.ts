import { Request, Response } from "express";
import User, { validatePassword } from "../models/User";
import jwt from 'jsonwebtoken';

export const singup = (req:Request,res:Response) => {
   res.send('singup');
}
export const singin = async (req:Request,res:Response) => {
   
    console.log(req.body);
    //Buscamos por el mail 
    const user =await User.findOne({
        where:{
            email:req.body.email
        }

    });

    if(!user){
         return res.status(400).json('Email or pasword is wrong');
    }

    const isPasswordValid:boolean= await validatePassword(req.body.password,user.password)    
    
    if(!isPasswordValid){
        return res.status(400).json('Invalid Password');
    }

    //Generamso token
    const token=jwt.sign({id:user.userId},process.env.TOKEN_SECRET || 'tokentest',
    {expiresIn:60*60*24});

    res.header('auth-token',token).json(User);

}
export const profile = (req:Request,res:Response)=>{
    
    res.send('profile');
}