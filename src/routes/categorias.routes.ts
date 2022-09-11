import {Router} from'express';
import { singup,singin,profile} from '../controllers/AuthController';
import { getCateogiras } from '../controllers/CategoriasControllers';
import { TokenValidation } from '../utils/verifyToken';

const router =Router()
    .post('/crearCategorias',)
    .post('/')
    //Ruta Protegida
    .get('/listarCategorias',TokenValidation,getCateogiras); 

export default router;