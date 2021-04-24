import { response, Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingReposity } from "./repositories/settingRepository";
import { SettingController } from "./controllers/settingController";
const routes = Router();

const settingController = new SettingController(); 

routes.post("/setting", settingController.create);

export { routes };