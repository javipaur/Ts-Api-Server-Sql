import { Request,Response } from "express";
import Employees from '../models/Employees';
import User, { encryptPassword } from "../models/User";
import jwt from "jsonwebtoken";

export const getUsuarios= async (req:Request,res:Response)=>{
   const usuarios = await Employees.findAll();
   res.json({ usuarios });
}

export const createUsuarios= async (req:Request,res:Response)=>{
   const {name,email,password}=req.body;

   //Encriptamos Pws
   encryptPassword(password);

   //Guardando Nuevo Usuario
   const newUsuario =await User.create({
      name,
      email,
      password
   });

   //Token
   const token:string =jwt.sign({id:newUsuario.id},process.env.TOKEN_SECRET || 'tokentest');

   res.header('auth-token',token).json(newUsuario);
   //res.json({"msj":'Usuario creado correctamente!',"token":token });
}