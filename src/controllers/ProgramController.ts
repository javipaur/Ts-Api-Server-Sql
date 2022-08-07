import { Request, Response } from "express";

export function programWelcome(req:Request,res:Response):Response{
    return res.json('Welcome to my Program API');
}
