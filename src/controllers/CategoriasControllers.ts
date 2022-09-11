import { Request,Response } from "express";
import AppDataSource from "../../sql/database";
import { Categorias } from "../models/Categorias/Categorias";


export const getCateogiras= async (req:Request,res:Response)=>{
    const categorias = await AppDataSource.manager.find(Categorias);
    res.json({ categorias });
 }