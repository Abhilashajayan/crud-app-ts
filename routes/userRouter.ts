import { Router, Request, Response } from 'express';
import { userReg } from '../controller/userController';

const router: Router = Router();

router.post('/register', userReg);
  

export default router;
