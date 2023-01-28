import {Router} from'express';
import { getEventosOpenData, getEventsJimmyJazz } from '../controllers/EventsController';

const router =Router()
.get('/getEvents',getEventosOpenData)
.get('/getEventsJimmyJazz',getEventsJimmyJazz);
export default router;