import { WsResponse } from "@nestjs/websockets";
import { Server } from 'ws';
export declare class UserChatGateway {
    server: Server;
    onDirectChatTyping(client: any, data: any): WsResponse<any>;
    onGroupChatTyping(client: any, data: any): WsResponse<any>;
}
