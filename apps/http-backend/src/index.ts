import express, { Request, Response } from "express";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "@repo/common-backend/config"
const app = express();

app.post("/signup", (req: Request, res: Response) => {
    return res.json({
        message: "Signup"
    })
})

app.post("/signin", (req: Request, res: Response) => {
    const _id = "123";

    const token = jwt.sign({
        id: _id
    }, JWT_SECRET!);

    return res.json({
        token
    })
})

app.post("/create-room", (req: Request, res: Response) => {
    
    return res.json({
        message: "Signin"
    })
})


app.listen(3001);