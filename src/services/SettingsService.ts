import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingReposity } from "../repositories/settingRepository";

interface ISettingCreate {
  chat: boolean;
  username: string;
}
class SettingService {
  async create({ chat, username }: ISettingCreate) {
    const settingReposity = getCustomRepository(SettingReposity);
    const setting = settingReposity.create({ chat, username });
    settingReposity.save(setting);
    return setting;
  }
}

export { SettingService };