import { Request,Response } from "express";
import Employees from '../interfaces/Employees';
import { json } from 'sequelize/types';


export const getUsuarios= async (req:Request,res:Response)=>{
    //const conn=await connect();
   // const usuarios =await conn.query('SELECT * FROM employees');
   // res.json(usuarios[0]);

   const usuarios = await Employees.findAll();

    res.json({ usuarios });
   res.json({ usuarios });
}