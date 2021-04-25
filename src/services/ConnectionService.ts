import { getCustomRepository } from "typeorm";
import { Connection } from "../entities/Connection";
import { ConnectionRepository } from "../repositories/ConnectionRepository";

interface IConnectionCreate {
  socket_id: string;
  user_id: string;
  admin_id?: string;
  id?: string;
}

class ConnectionsService {
  private connectionsRepository: ConnectionRepository;

  constructor() {
    this.connectionsRepository = getCustomRepository(ConnectionRepository);
  }

  async create({ socket_id, user_id, admin_id, id }: IConnectionCreate) {
    const connection = this.connectionsRepository.create({ socket_id, user_id, admin_id, id });

    await this.connectionsRepository.save(connection);
    
    return connection;
  }
}

export { ConnectionsService };