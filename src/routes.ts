import { Router } from "express";
import { SettingController } from "./controllers/settingController";
import { UserController } from "./controllers/UserController";
const routes = Router();

const settingController = new SettingController(); 
const userController = new UserController(); 

routes.post("/setting", settingController.create);
routes.post("/user", userController.create);

export { routes };