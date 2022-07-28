import {Router} from'express';
import {indexWelcome,getUsuarios} from '../controllers/index.controller';
const router =Router();

    router.route('/').get(indexWelcome);
    router.route('/getUsuarios').get(getUsuarios);


export default router;