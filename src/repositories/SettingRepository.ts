import { EntityRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";

@EntityRepository(Setting)
class SettingReposity extends Repository<Setting> {
}

export { SettingReposity };