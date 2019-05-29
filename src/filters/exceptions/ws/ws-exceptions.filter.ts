import { Catch, ExceptionFilter, ArgumentsHost, Logger } from "@nestjs/common";
import { WsException } from "@nestjs/websockets";
@Catch(WsException)
export class WsExceptionFilter implements ExceptionFilter<WsException> {
    catch(exception: WsException, host: ArgumentsHost) {
        const ctx = host.switchToWs();
        const message = exception.getError();
        const errorResponse = {
            timestamp: new Date().toISOString(),
            message
        };
        Logger.error(
            JSON.stringify(errorResponse),
            'WsExceptionFilter',
        );

    }
}