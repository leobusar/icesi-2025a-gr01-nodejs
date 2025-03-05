import { Request, Response } from "express";
import { UserDocument, UserInput } from '../models';
import { userService } from "../services";

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

}

export const  userController = new  Usercontroller();
