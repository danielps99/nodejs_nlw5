import express from "express";
import {createServer} from "http";
import {Server, Socket} from "socket.io";


//import dessa forma já importa e executa o index.js, pois dentro da pasta database existe um arquivo index.js
import "./database";
import { routes } from "./routes";

const app = express();
const http = createServer(app); //Cria protocolo http
const io = new Server(http)  // cria o protocolo websocket

io.on("connection", (socket: Socket) => {
  console.log("conectou", socket.id);
});

app.use(express.json());
app.use(routes);

//ANTES DO WEBSOCKET, INICIAVA DESSA FORMA
// app.listen(3333, () => console.log("Server is running on port 3333"));

http.listen(3333, () => console.log("Server is running on port 3333"))