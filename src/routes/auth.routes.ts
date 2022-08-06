import {Router} from'express';
import { singup,singin,profile} from '../controllers/AuthController';
import { TokenValidation } from '../utils/verifyToken';

const router =Router();
    router.post('/singup',singup); 
    router.post('/singin',singin); 
    //Ruta protegida
    router.get('/profile',TokenValidation,profile); 

export default router;