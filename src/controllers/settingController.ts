import { Request, Response } from "express";
import { SettingService } from "../services/SettingsService";

class SettingController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body;
    const settingService = new SettingService();
    const setting = settingService.create({ chat, username });
    return response.json(setting);
  }
}

export { SettingController };