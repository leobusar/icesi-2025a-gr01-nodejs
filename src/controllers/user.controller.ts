import { Request, Response } from "express";

class Usercontroller {
    public create (req: Request, res: Response) {
        res.status(201).send("create user");
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
