import { io } from "../httpServerSocketIO";
interface IParams {
  text: string;
  email: string;
}

io.on("connect", (socket) => {
  socket.on("client_first_access", async (params) => {
    const socket_id = socket.id;
    const { text, email } = params as IParams;
    let user_id = null;
    console.log("ON cliente.ts ",params);
  });
});