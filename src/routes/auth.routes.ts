import {Router} from'express';
import { singup,singin,profile} from '../controllers/AuthController';

const router =Router();
    router.post('/singup',singup); 
    router.post('/singin',singin); 
    router.get('/profile',profile); 

export default router;