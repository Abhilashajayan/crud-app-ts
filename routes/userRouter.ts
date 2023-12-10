import { Router} from 'express';
import { userReg, userLog } from '../controller/userController';

const router: Router = Router();

//post method

router.post('/register', userReg);
router.post('/Login', userLog);
  

export default router;
