import { getCustomRepository } from 'typeorm';
import { MessageRepository } from '../repositories/MessageRepository';

interface IMessageCreate {
  admin_id?: string;
  user_id: string;
  text: string;
}

class MessagesService {
  private messageRepository: MessageRepository;

  constructor() {
    this.messageRepository = getCustomRepository(MessageRepository);
  }

  async create({ admin_id, user_id, text }: IMessageCreate) {
    const message = this.messageRepository.create({ admin_id, user_id, text });

    await this.messageRepository.save(message);

    return message;
  }

  async listByUser(user_id: string) {
    //DESSA FORMA TRAZ SOMENTE DADOS DA TABELA MESSAGE
    // const list = await this.messageRepository.find({ user_id });

    //DESSA FORMA TRAZ DADOS DA TABELA MESSAGE E USER
    //TALVEZ NÃO SEJA INTERRESSANTE ISSO AGORA, MAS FICOU SÓ PRA REGISTRAR
    const list = await this.messageRepository.find({
      where: { user_id },
      relations: ['user'],
    });

    return list;
  }
}

export { MessagesService };