import { Router } from "express";
import {adminLogin, getUsers} from '../controller/adminControllers';


const router : Router  = Router();

router.post('/login',adminLogin);
router.get('/getUser',getUsers);


export default router;