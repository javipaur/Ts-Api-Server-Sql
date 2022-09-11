import {Router} from'express';
import { programWelcome } from '../controllers/ProgramController';

const router =Router().post('/crearPrograma',programWelcome);
export default router;