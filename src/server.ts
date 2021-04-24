import express from "express";
//import dessa forma já importa e executa o index.js, pois dentro da pasta database existe um arquivo index.js
import "./database";
import { routes } from "./routes";

const app = express();
app.use(express.json());
app.use(routes);
app.listen(3333, () => console.log("Server is running on port 3333"))