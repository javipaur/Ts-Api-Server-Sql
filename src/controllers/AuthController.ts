import { Request, Response } from "express";

import jwt from 'jsonwebtoken';
import { User } from "../models/Usuarios/User";
import { validatePassword } from "../utils/ValidatePassword";

export const singup = (req:Request,res:Response) => {
   res.send('singup');
}
export const singin = async (req:Request,res:Response) => {
   
    console.log(req.body);
    //Buscamos por el mail 
    const user = await User.findOneBy({email: req.body.email}) 
    
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

    //res.header('auth-token',token).json(User);
    res.header('auth-token',token).json({"msj":'Usuario existe!',"token":token })

}
export const profile = async (req:Request,res:Response)=>{
    console.log('userId:'+req.body.userId);
   const user = await User.findOneBy({ userId: req.body.userId}) 
   //const user=await User.findById(req.userId,{pasword:0});
    if(!user)return res.status(404).json('No User found');
    res.json(user);
}