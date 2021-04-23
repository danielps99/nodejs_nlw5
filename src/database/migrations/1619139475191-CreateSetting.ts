import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSetting1619139475191 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "setting",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        // generationStrategy: "uuid" //DESCOMENTE PARA O BANCO GERAR O UUID
                        isPrimary: true
                    },
                    {
                        name: "username",
                        type: "varchar"
                    },
                    {
                        name: "chat",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "update_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                    
                ]

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("setting");
    }
}
