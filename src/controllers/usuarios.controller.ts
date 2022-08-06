import { Request,Response } from "express";
import Employees from '../models/Employees';
import User, { encryptPassword } from "../models/User";
import jwt from "jsonwebtoken";
import { IUser } from "../interface/IUser";

export const getUsuarios= async (req:Request,res:Response)=>{
   const usuarios = await Employees.findAll();
   res.json({ usuarios });
}

export const createUsuarios= async (req:Request,res:Response)=>{
   const {name,email,password}=req.body;
   //Guardando Nuevo Usuario
   const user:IUser =new User({name,email,password});
   //Encriptar pws en MD5
   user.password=await encryptPassword(password);
   const newUsuario =await User.create({
      name:user.name,
      email:user.email,
      password:user.password
   });

   //Token
   const token:string =jwt.sign({id:newUsuario.id},process.env.TOKEN_SECRET || 'tokentest');

   res.header('auth-token',token).json(newUsuario);
   //res.json({"msj":'Usuario creado correctamente!',"token":token });
}