import {Router} from 'express';
import {createUsuarios, getUsuarios} from '../controllers/usuarios.controller';

const router=Router();
router.get('/',getUsuarios); 
router.post('/crearUsuario',createUsuarios);
export default router;
