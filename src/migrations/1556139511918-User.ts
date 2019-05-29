import {MigrationInterface, QueryRunner} from "typeorm";

export class User1556139511918 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `user` (`id` varchar(36) NOT NULL, `username` varchar(255) NOT NULL, `phone` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `email` varchar(255) NULL DEFAULT null, `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_8e1f623798118e629b46a9e629` (`phone`), UNIQUE INDEX `IDX_78a916df40e02a9deb1c4b75ed` (`username`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_78a916df40e02a9deb1c4b75ed` ON `user`");
        await queryRunner.query("DROP INDEX `IDX_8e1f623798118e629b46a9e629` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
