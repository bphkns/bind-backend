import { WebSocketGateway, SubscribeMessage, WsResponse, WebSocketServer, WsException } from "@nestjs/websockets";
import { Observable, interval, from } from "rxjs";
import { map } from "rxjs/operators";
import { Server } from 'ws';
import { UseGuards, UseFilters } from "@nestjs/common";
import { UserChatAuthGuard } from "../guards/chat-auth.guard";
import { WsExceptionFilter } from "src/filters/exceptions/ws/ws-exceptions.filter";

@WebSocketGateway(80)
export class UserChatGateway {

    @WebSocketServer()
    server: Server;

    @UseFilters(WsExceptionFilter)
    @SubscribeMessage('directChatTyping')
    //@UseGuards(UserChatAuthGuard)
    onDirectChatTyping(client: any, data: any): WsResponse<any> {
        console.log(data);
        if(data !== 'h') throw new WsException('error');
        
        return {
            event: 'showDirectTyping', data: {
                message: 'Single person Typing'
            }
        }
    }


    @SubscribeMessage('groupChatTyping')
    onGroupChatTyping(client: any, data: any): WsResponse<any> {
        console.log(client);
        return {
            event: 'showGroupTyping', data: {
                message: 'All Group'
            }
        }
    }
}