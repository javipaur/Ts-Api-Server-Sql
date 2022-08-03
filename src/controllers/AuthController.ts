import { Request, Response } from "express";

export function singup(req:Request,res:Response){
   res.send('singup');
}
export function singin(req:Request,res:Response){
    res.send('singin');
}
export function profile(req:Request,res:Response){
    res.send('profile');
}