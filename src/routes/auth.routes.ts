import {Router} from'express';
import { singup,singin,profile} from '../controllers/AuthController';
import { TokenValidation } from '../utils/verifyToken';

const router =Router()
    .post('/singup',singup)
    .post('/singin',singin)
    //Ruta Protegida
    .get('/profile',TokenValidation,profile); 

export default router;