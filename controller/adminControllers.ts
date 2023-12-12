import { Request , Response } from "express";
import adminModel from "../model/adminSchema";
import UserModel from "../model/userSchema";

export const adminLogin = async (req: Request, res: Response): Promise<any> => {
    const { name, password } = req.body;

    try {
        const existAdmin = await adminModel.findOne({ username : name });
        if (existAdmin) {
            console.log("Found Admin:", existAdmin.username, existAdmin.password);
            if (existAdmin.password === password) {
                console.log("Login successful");
                res.status(200).json({ message: "Login successful" });
            } else {
                console.log("Incorrect password");
                res.status(401).json({ error: "Incorrect password" });
            }
        } else {
            console.log("Admin not found");
            res.status(404).json({ error: "Admin not found" });
        }
    } catch (err) {
        console.error("Error in adminLogin:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


export const getUsers = async (req: Request, res: Response): Promise<any> => {
    try {
        const users = await UserModel.find()
        if (users) {
           return res.status(200).json({ users });
        } else {
            return res.status(400).json({ error: "User's Data Not Available" });
        }
    } catch (err : any) {
        res.status(500).json({ error: err.message });
    }
}


export const deleteUser = async (req: Request, res: Response): Promise<any> =>{
    const userID = req.params.userId;
    try{
    const user = await UserModel.findByIdAndDelete(userID);
    if(user){
        return res.status(200).json({ message : 'User deleted successfully' });
    }
    return res.status(404).json({ message : 'User not found' });
    }catch(err:any){
        return res.status(400).json({ error: "someting went wrong!" });
    }
}