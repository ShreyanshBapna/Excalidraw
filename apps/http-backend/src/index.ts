import express, { Request, Response } from "express";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "@repo/common-backend/config"
import { middleware } from "./middleware";
import { createUserSchema, signinSchema , createRoomSchema} from "@repo/common/test"
const app = express();

app.post("/signup", (req: Request, res: Response) => {

    const data = createUserSchema.safeParse(req.body);

    if(!data.success){
        return res.json({
            message: "Invalid Credentail!!",
            error: data.error
        })
    }

    return res.json({
        message: "Signup"
    })
})

app.post("/signin", (req: Request, res: Response) => {
    const data = signinSchema.safeParse(req.body);

    if(!data.success){
        return res.json({
            message: "Invalid Credentail!!",
            error: data.error
        })
    }

    const _id = "123";

    const token = jwt.sign({
        id: _id
    }, JWT_SECRET!);

    return res.json({
        token
    })
})

app.post("/create-room", middleware, (req: Request, res: Response) => {
    
    const data = createRoomSchema.safeParse(req.body);

    if(!data.success){
        return res.json({
            message: "Invalid Credentail!!",
            error: data.error
        })
    }

    return res.json({
        message: "Signin"
    })
})


app.listen(3001);