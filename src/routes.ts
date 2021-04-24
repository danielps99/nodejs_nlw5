import { response, Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingReposity } from "./repositories/settingRepository";

const routes = Router();

routes.post("/setting",(request, response) => {
  const { chat, username } = request.body;
  const settingReposity = getCustomRepository(SettingReposity);
  const setting = settingReposity.create({
    chat,
    username
  });
  return response.json(setting);
});

export { routes };