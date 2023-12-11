import { Schema, model, Document } from 'mongoose';

interface User extends Document {
    name: string;
    email: string;
    password: string;
    picturePath?: string;
}

const userSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: true,
            minlength: 2,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 5,
        },
        picturePath: {
            type: String,
        },
    },
    { timestamps: true }
);

const UserModel = model<User>('User', userSchema);

export default UserModel;
