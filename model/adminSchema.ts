import { Schema, model, Document } from 'mongoose';

interface Admin extends Document {
    username: string;
    password: string;
}

const adminSchema = new Schema<Admin>(
    {
        password: {
            type: String,
            trim: true,
        },
        username: {
            type: String,
            trim: true,
        },
    },
    {   timestamps: true,
        collection: "admin",
     },
    
);

const adminModel = model<Admin>('Admin', adminSchema);

export default adminModel;
