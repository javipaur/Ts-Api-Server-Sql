import {Router} from'express';
import { NewProgram, programWelcome } from '../controllers/ProgramController';

const router =Router().post('/createNewProgram',NewProgram);
export default router;