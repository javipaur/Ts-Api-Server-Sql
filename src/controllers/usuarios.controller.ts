import { Request,Response } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";
import { IUser } from "../interface/IUser";
import { encryptPassword } from "../utils/EncriptPassword";
import { createUuId } from "../utils/CreateUid";

export const getUsuarios= async (req:Request,res:Response)=>{
   const usuarios = await User.findAll();
   res.json({ usuarios });
}

export const createUsuarios= async (req:Request,res:Response)=>{
   const {name,email,password}=req.body;
   //Guardando Nuevo Usuario
   const user:IUser =new User({name,email,password});
   //Encriptar pws en MD5
   user.password=await encryptPassword(password);
   //IdentificadorUsuario
   user.userId=await createUuId();
   const newUsuario =await User.create({
      name:user.name,
      email:user.email,
      password:user.password,
      userId:user.userId
   });

   //Token
   const token:string =jwt.sign({id:newUsuario.userId},process.env.TOKEN_SECRET || 'tokentest');

   res.header('auth-token',token).json(newUsuario);
   //res.json({"msj":'Usuario creado correctamente!',"token":token });
}