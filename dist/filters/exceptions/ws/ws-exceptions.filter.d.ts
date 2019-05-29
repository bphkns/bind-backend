import { ExceptionFilter, ArgumentsHost } from "@nestjs/common";
import { WsException } from "@nestjs/websockets";
export declare class WsExceptionFilter implements ExceptionFilter<WsException> {
    catch(exception: WsException, host: ArgumentsHost): void;
}
