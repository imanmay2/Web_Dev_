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


let onlineUsers={}; //declare it globally such that every time you print, the obj, you can see the list of users.



io.on("connection",(socket)=>{
    
    // console.log(socket.id);
    // socket.on("sendMsg",(data)=>{
    //     console.log(data.name);
    //     // socket.emit("receiveMsg",{msg:"Data recieved"});
    // });

    socket.on("store_user",(user_id)=>{
        //storing the user_id along with the socket_id.
        socket.userId=user_id;
        onlineUsers[user_id]=socket.id;
        console.log(onlineUsers);
    })

    // socket.on("join_room",(room_id)=>{
    //     socket.join(room_id);
    //     console.log(room_id+" is connected with "+socket.id);
    // });
  
    // socket.on("sendMsgRoom",(data)=>{
    //     console.log("Room_id : "+data.room_id);
    //     console.log("Msg received from client : "+data.msg);
    //     io.to(data.room_id).emit("receive_","Message received successfully.");
    // });
    
    socket.on("disconnect",()=>{
        console.log(socket.id+" is disconnected");
        //remove the user from the onlineUser list. 
        delete onlineUsers[socket.userId];
        console.log(onlineUsers);
    });
});

server.listen(PORT,()=>{
    console.log("Server is listening to : ",PORT);
})