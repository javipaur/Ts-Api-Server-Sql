import { Request,Response } from "express";
import Usuario from "../model/Users";


export const getUsuarios= async (req:Request,res:Response)=>{

    const usuarios = await Usuario.findAll();
    res.json(usuarios);
}