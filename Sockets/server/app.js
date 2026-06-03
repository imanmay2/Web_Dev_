import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';
const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors:{origin:"*",methods:["GET","POST"]}
});


let PORT=8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());


io.on("connection",(socket)=>{
    console.log(socket.id);
    socket.on("sendMsg",(data)=>{
        console.log(data.name);
        socket.emit("receiveMsg",{msg:"Data recieved"});
    });
});

server.listen(PORT,()=>{
    console.log("Server is listening to : ",PORT);
})