import app from "./app";
import { Server as WebSocketServer } from "socket.io";
import http from "http";
import { connectDB } from "./db";
import sockets from "./sockets";

connectDB();

const server = http.createServer(app);
const httpServer = server.listen(3200);

console.log("Server is running on port 3200");

const io = new WebSocketServer(httpServer);
sockets(io);
