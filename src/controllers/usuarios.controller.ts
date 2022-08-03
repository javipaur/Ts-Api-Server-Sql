import { Request,Response } from "express";
import { connect } from "../database";



export const getUsuarios= async (req:Request,res:Response)=>{
    const conn=await connect();
    const usuarios =await conn.query('SELECT * FROM employees');
    res.json(usuarios[0]);
}