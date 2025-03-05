import { Request, Response, Router } from "express";

export const postRouter = Router();

postRouter.get("/", (req: Request, res: Response)=>{res.send("OK")});
postRouter.post("/",(req: Request, res: Response)=>{res.send("OK")});
postRouter.get("/:id", (req: Request, res: Response)=>{res.send("OK")});
postRouter.put("/:id", (req: Request, res: Response)=>{res.send("OK")});
postRouter.delete("/:id",(req: Request, res: Response)=>{res.send("OK")});
