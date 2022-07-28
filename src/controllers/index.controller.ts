import { Request, Response } from "express";
import { connect } from "../database";

export function indexWelcome(req:Request,res:Response):Response{
    return res.json('Welcome to my API');
}

export async function getUsuarios(req:Request,res:Response):Promise<Response>{
    const conn=await connect();
    const employees =conn.query('SELECT * FROM employees');
    console.log(JSON.stringify(employees));
    return res.json(employees);
}