import { Request,Response } from "express";

import jwt from "jsonwebtoken";
import { IUser } from "../interface/IUser";
import { encryptPassword } from "../utils/EncriptPassword";
import { createUuId } from "../utils/CreateUid";
import { User } from "../models/Usuarios/User";
import AppDataSource from "../../sql/database";

export const getUsuarios= async (req:Request,res:Response)=>{
   const usuarios = await User.find();
   res.json({ usuarios });
}

export const createUsuarios= async (req:Request,res:Response)=>{
   const {nombre,email,password}=req.body;
   //Guardando Nuevo Usuario
   const user:IUser =new User();
   user.nombre=nombre;
   user.email=email;
   //Encriptar pws en MD5
   user.password=await encryptPassword(password);
   //IdentificadorUsuario
   user.userId=await createUuId();
   await AppDataSource.manager.save(user);
   //Token
   const token:string =jwt.sign({id:user.userId},process.env.TOKEN_SECRET || 'tokentest');


   // res.header('auth-token',token);
   res.status(200).json({"msj":'Usuario creado correctamente!',"token":token })
   

   
}