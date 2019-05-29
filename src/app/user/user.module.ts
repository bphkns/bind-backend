import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserRepository } from "./user.repository";
import { UserChatGateway } from "./chat/gateways/user-chat.gateway";
import { ChatModule } from "./chat/chat.module";

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository]),ChatModule],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {

}