import { Request, Response } from "express";
import { UserInput } from '../models';
import { userService } from "../services";

class Usercontroller {
    public async  create (req: Request, res: Response) {
        try {
            const newUser = await userService.create(req.body as UserInput);
            res.status(201).json(newUser);
            
        } catch (error) {
            if(error instanceof ReferenceError){
                res.status(400).json({message: "User already exists"});
                return;
            }
            res.status(500).json(error);
        }
    }
    public get (req: Request, res: Response) {
        res.send(`Get user with ${req.params.id}`);
    }
    public getAll (req: Request, res: Response) {
        res.send("Get all users");
    }
    public update (req: Request, res: Response) {
        res.send(`Update user with id ${req.params.id}`);
    }
    public delete (req: Request, res: Response) {
        res.send(`Delete user with id ${req.params.id}`);
    }

}

export const  userController = new  Usercontroller();
