import {Router} from 'express';
import {createUsuarios, getUsuarios} from '../controllers/usuarios.controller';

const router=Router()
.get('/',getUsuarios)
.post('/crearUsuario',createUsuarios)
export default router;
