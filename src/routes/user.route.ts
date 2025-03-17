import { Request, Response, Router } from "express";
import { userController } from "../controllers";
import { auth } from "../middlewares";

export const userRouter = Router();

userRouter.get("/", userController.getAll);
userRouter.post("/",userController.create);
userRouter.get("/profile", auth, userController.get);

userRouter.get("/:id", userController.get);
userRouter.put("/:id", userController.update);
userRouter.delete("/:id",userController.delete);
userRouter.post("/login", userController.login);

/*
userRouter.get("/", (req: Request, res: Response) => {
    res.send("Get all users");
})*/
