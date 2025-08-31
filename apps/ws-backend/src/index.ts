import { JWT_SECRET } from "@repo/common-backend/config"
import { WebSocketServer } from 'ws';
import jwt from "jsonwebtoken";

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
    
    ws.on("connection", function (ws, request){
        const url = request.url;

        if(!url) {
            ws.close();
            return;
        }

        const queryParams = new URLSearchParams(url.split("?")[1]);
        const token = queryParams.get("token");

        if (!token){
            ws.close();
            return;
        }

        const decode = jwt.verify(token, JWT_SECRET);

        if(typeof decode == "string") {
            ws.close();
            return; 
        }
        
        if (!decode || decode.id){
            ws.close();
            return;
        }

    })

    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });

  
});