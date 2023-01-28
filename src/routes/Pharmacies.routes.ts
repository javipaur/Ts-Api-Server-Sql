import {Router} from'express';
import { getPharmacies } from '../controllers/PharmaciesDuty';


const router =Router().get('/getPharmacies',getPharmacies);
export default router;