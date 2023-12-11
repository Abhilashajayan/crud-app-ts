import { Router } from "express";
import {adminLogin} from '../controller/adminControllers';


const router : Router  = Router();

router.post('/login',adminLogin);


export default router;