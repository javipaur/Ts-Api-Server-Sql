import { Request,Response } from "express";
import Usuario from "../model/Usuario";


export const getUsuarios= async (req:Request,res:Response)=>{

    const usuarios = await Usuario.findAll();
    res.json(usuarios);
}