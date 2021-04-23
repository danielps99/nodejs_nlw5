import express from "express";
//import dessa forma já importa e executa o index.js, pois dentro da pasta database existe um arquivo index.js
import "./database";

const app = express();

app.get("/", (request, response) => {
  //retorna em formato de string
  // return response.send("Olá NLW 05");
  return response.json({
    message: "Olá NLW 05"
  });
});

app.post("/user", (request, response) => {
  return response.json({
    message: "Usuário salvo com sucesso!"
  });
});

app.listen(3333, () => console.log("Server is running on port 3333"))