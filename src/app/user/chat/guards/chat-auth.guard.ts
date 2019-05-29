import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { WsException } from "@nestjs/websockets";

@Injectable()
export class UserChatAuthGuard implements CanActivate {
    async canActivate(context: ExecutionContext){
        // const data = context.switchToWs().getData();

        // const result = typeof data === 'object';
        // console.log(result);

        // return result;

        throw new WsException(new Error('WS Error'));

        return false;
    }

}