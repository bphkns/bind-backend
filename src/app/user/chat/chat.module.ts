import { Module } from "@nestjs/common";
import { UserChatGateway } from "./gateways/user-chat.gateway";
import { APP_GUARD } from "@nestjs/core";
import { UserChatAuthGuard } from "./guards/chat-auth.guard";

@Module({
    providers:[UserChatGateway , {
        provide:APP_GUARD,
        useClass:UserChatAuthGuard
    }]
})
export class ChatModule {}