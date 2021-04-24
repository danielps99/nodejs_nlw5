import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingReposity } from "../repositories/settingRepository";

class SettingController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body;
  const settingReposity = getCustomRepository(SettingReposity);
  const setting = settingReposity.create({
    chat,
    username
  });
  settingReposity.save(setting);
  return response.json(setting);
  }
}

export { SettingController };