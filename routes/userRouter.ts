import { Router, Request, Response } from 'express';
import { userReg } from '../controller/userController';

const router: Router = Router();

router.post('/register', async (req: Request, res: Response) => {
    const {name , email , password} = req.body;
    console.log(name, email, password);
    try{
        
    }catch (err){
        console.log(err);
    }
});

export default router;
