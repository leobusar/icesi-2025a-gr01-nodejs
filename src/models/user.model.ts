import mongoose from "mongoose"

export interface UserInput {
    name: string,
    email: string, 
    password: string
}

export interface UserInputUpdate {
    name: string,
    email: string
}

export interface UserLogin {
    email: string, 
    password: string
}

export interface UserLoginResponse{
    user?: {
        name: string,
        email: string,
        roles: string[],
        token: string
    },
    message: {
        contents: string,
        code: number
    }
}

export interface UserDocument extends UserInput, mongoose.Document{
    createdAt: Date, 
    updateAt: Date,
    deleteAt: Date
}

const userSchema = new mongoose.Schema({
    name: { type: String, required: true }, 
    email: { type: String, required: true, index: true, unique: true }, 
    password: { type: String, required: true },
    },{timestamps:true, collection: "users"});

export const UserModel = mongoose.model<UserDocument>("User", userSchema); 
