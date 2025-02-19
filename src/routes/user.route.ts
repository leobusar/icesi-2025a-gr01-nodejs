import { Request, Response, Router } from "express";
import { userController } from "../controllers/user.controller";

export const userRouter = Router();

userRouter.get("/", userController.getAll);
userRouter.post("/",userController.create);
userRouter.get("/:id", userController.get);
userRouter.put("/:id", userController.update);
userRouter.delete("/:id",userController.delete);

/*
userRouter.get("/", (req: Request, res: Response) => {
    res.send("Get all users");
})*/
