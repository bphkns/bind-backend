import {MigrationInterface, QueryRunner} from "typeorm";

export class User1556142566321 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `email` `email` varchar(255) NULL DEFAULT null");
        await queryRunner.query("ALTER TABLE `user` ADD UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2`");
        await queryRunner.query("ALTER TABLE `user` CHANGE `email` `email` varchar(255) NULL");
    }

}
