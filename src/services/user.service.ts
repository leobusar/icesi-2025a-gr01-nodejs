import { UserDocument, UserInput, UserModel } from "../models";
import bcrypt from "bcrypt";

class UserService {

    public async create(userInput: UserInput): Promise<UserDocument>{
        try {
            const userExists: UserDocument | null = await this.findByEmail(userInput.email);
            if (userExists != null){
                throw new ReferenceError("User already exists");
            }
            userInput.password = await bcrypt.hash(userInput.password, 10);

            const user: UserDocument = await UserModel.create(userInput); 
            return user;
        } catch (error) {
            throw error;
        }
    }

    public  async findByEmail(email: string): Promise<UserDocument | null>{
        try {
            const user = await UserModel.findOne({email});
            return user;
        } catch (error) {
            throw error;
        }
    }

}

export const userService = new UserService();
