import { getCustomRepository } from "typeorm";
import { SettingReposity } from "../repositories/settingRepository";

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
}

export { SettingService };