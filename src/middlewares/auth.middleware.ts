import { Request, Response, NextFunction } from "express";
import jwt, { TokenExpiredError } from "jsonwebtoken";

export const auth = (req: Request, res: Response, next: NextFunction) => {
    let token: string | undefined =  req.header("Authorization"); 

    if(!token){
        res.status(401).json("Not Authorized");
        return;
    }

    try {
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET || "secret");
        req.body.loggedUser = decoded;
        //req.params.id = decoded.user.id;
        next();
    } catch (error) {
        if (error instanceof TokenExpiredError){
            res.status(401).json("Token Expired");
        }
        res.status(401).json("Not Authorized");
    }

}