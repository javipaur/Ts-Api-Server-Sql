import { Request, Response } from "express";
import User from "../models/User";

export function singup(req:Request,res:Response){
    console.log(req.body);
    // const user= new User({
    //     name:req.body.name,
    //     email:req.body.email,
    //     password:req.body.password,
    // });

   res.send('singup');
}
export function singin(req:Request,res:Response){
    res.send('singin');
}
export function profile(req:Request,res:Response){
    res.send('profile');
}