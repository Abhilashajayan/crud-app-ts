import { Router } from "express";
import {adminLogin, getUsers, deleteUser  } from '../controller/adminControllers';



const router : Router  = Router();

router.post('/login',adminLogin);
router.get('/getUser',getUsers);
router.delete('/delete/:userId',deleteUser);

export default router;