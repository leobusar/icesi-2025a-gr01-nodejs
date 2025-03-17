import { Request, Response } from "express";
import { UserDocument} from '../models';
import { UserInput, UserLogin } from '../interfaces';
import { userService } from "../services";
import { AuthError } from "../exceptions";

class Usercontroller {
    public async  create (req: Request, res: Response) {
        try {
            const newUser: UserDocument = await userService.create(req.body as UserInput);
            res.status(201).json(newUser);
            
        } catch (error) {
            if(error instanceof ReferenceError){
                res.status(400).json({message: "User already exists"});
                return;
            }
            res.status(500).json(error);
        }
    }
    public async get (req: Request, res: Response) {
        try {
            const id: string = req.params.id;
            const user: UserDocument | null = await userService.findById(id);
            if(user === null){
                res.status(404).json({message: `User with id ${id} not found`})
                return; 
            }
            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    public async getAll (req: Request, res: Response) {
        try {
            const users: UserDocument[] = await userService.findAll();
            res.json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    public async update (req: Request, res: Response) {
        try {
            const id: string = req.params.id;
            const user: UserDocument | null = await userService.update(id, req.body as UserInput);
            if(user === null){
                res.status(404).json({message: `User with id ${id} not found`})
                return;
            }
            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }    
    }

    public async delete (req: Request, res: Response) {
        try {
            const id: string = req.params.id;
            const user: UserDocument | null = await userService.delete(id);
            if(user === null){
                res.status(404).json({message: `User with id ${id} not found`})
                return;
            }
            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }  
    }

    public async login(req: Request, res: Response){
        try {
            const resObj =  await userService.login(req.body as UserLogin);
            res.status(200).json(resObj);
        }catch (error){
            //*** Not authorized */
            if (error instanceof AuthError){
                res.status(401).json({message: "Not Authorized"});
                return;
            }
            res.status(500).json(error);
        }
    }

}

export const  userController = new  Usercontroller();
