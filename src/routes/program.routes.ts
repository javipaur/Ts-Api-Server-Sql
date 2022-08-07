import {Router} from'express';
import { programWelcome } from '../controllers/ProgramController';

const router =Router()
.get('/',programWelcome);
export default router;