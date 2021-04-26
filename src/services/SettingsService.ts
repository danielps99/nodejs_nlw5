import { getCustomRepository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingReposity } from "../repositories/SettingRepository";

interface ISettingCreate {
  chat: boolean;
  username: string;
}

class SettingService {
  private settingReposity: SettingReposity;

  constructor() {
    this.settingReposity = getCustomRepository(SettingReposity);
  }

  async create({ chat, username }: ISettingCreate) {
    const settingsAlreadyExists = await this.settingReposity.findOne({username,});

    if (settingsAlreadyExists) {
      throw new Error("Settings with username already exists.");
    }
    //DEPOIS VER PRA VALIDAR COM OUTRO METTODO
    // this.validateHasSettingWithUsername(username);
    const setting = this.settingReposity.create({ chat, username });
    await this.settingReposity.save(setting);
    return setting;
  }

  async validateHasSettingWithUsername(username : string) {
    const settingsAlreadyExists = await this.settingReposity.findOne({username,});

    if (settingsAlreadyExists) {
      throw new Error("Settings with username already exists.");
    }
  }

  async findByUsername(username: string) {
    const setting = await this.settingReposity.findOne({username});
    return setting;
  }

  async update(username: string, chat: boolean) {
    //PODERIA USAR O UPDATE DO PROPRIO REPOSITORY, MAS FEZ ASSIM PARA APRENDER QUERYBUILDER
    const setting = await this.settingReposity.createQueryBuilder()
    .update(Setting)
    .set({chat})
    .where("username = :username", {
      username
    })
    .execute();
    return setting;
  }
}

export { SettingService };