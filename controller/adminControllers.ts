import { Request , Response } from "express";
import adminModel from "../modal/adminSchema";

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

