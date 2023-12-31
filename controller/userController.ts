import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import UserModel from '../model/userSchema'; 


export const userReg = async (req: Request, res: Response): Promise<any> => {
    const { name, password, email } = req.body;
    
    try {
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Please provide all required fields' });
        }

        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists' });
        }

        const newUser = new UserModel({
            name,
            email,
            password: passwordHash,
        });

        const savedUser = await newUser.save();
        return res.status(200).json(savedUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
};


export const userLog = async ( req : Request, res : Response) : Promise<any> => {
    const {email , password} = req.body;
    try{
        const users = await UserModel.findOne({ email });

        if(!users)
        {
            if (!users) return res.status(400).json({ error: "User does not exist" });
        }
        const isMatch = await bcrypt.compare(password, users.password);
        if (!isMatch)
        {
         return res.status(400).json({ error: "Invalid Password !!" });
        }
        return res.status(200).json({ users });

    }catch(err){
        console.log(err);
    }

}

