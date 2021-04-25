import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

//import dessa forma já importa e executa o index.js, pois dentro da pasta database existe um arquivo index.js
import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
  // return response.send("ISSO FUNCIONA");
});

const http = createServer(app); //Cria protocolo http
const io = new Server(http)  // cria o protocolo websocket

io.on("connection", (socket: Socket) => {
  console.log("conectou", socket.id);
});

app.use(express.json());
app.use(routes);

export {http, io};