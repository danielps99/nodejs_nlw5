import { io } from "../httpServerSocketIO";
import { ConnectionService } from "../services/ConnectionService";
import { UserService } from "../services/UserService";
interface IParams {
  text: string;
  email: string;
}

io.on("connect", (socket) => {
  const connectionService = new ConnectionService();
  const userService = new UserService();

  socket.on("client_first_access", async (params) => {
    const socket_id = socket.id;
    const { text, email } = params as IParams;
    const userExists = await userService.findByEmail(email);

    if(!userExists) {
      const user = await userService.create(email);
      await connectionService.create({
        socket_id, 
        user_id: user.id
      });
    } else {
      const connection = await connectionService.findByUserId(userExists.id);

      if(!connection) {
        await connectionService.create({
          socket_id, 
          user_id: userExists.id
        });
      } else {
        connection.socket_id = socket_id;
        await connectionService.create(connection);
      }
    }
    

    
    
    console.log("ON cliente.ts ",params);
  });
});