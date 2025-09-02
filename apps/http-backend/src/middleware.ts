import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/common-backend/config"
import {Request, Response, NextFunction } from "express"

export const middleware = (req:Request, res: Response, next: NextFunction) => {
    const { token } = req.headers;

    const decode = jwt.verify(token as string, JWT_SECRET);

    if(!decode){
        return res.json({
            message: "Invalid Credentails!!"
        })
    }
    
    // @ts-ignore
    req.userId = decode.id;
    
    return res.json({
        message: "Authorized"
    })
    next();
    
}