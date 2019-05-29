import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { HttpExceptionFilter } from "./exceptions/http/http-exceptions.filter";
import { WsExceptionFilter } from "./exceptions/ws/ws-exceptions.filter";

@Module({
    imports: [],
    providers: [
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter
        },
        {
            provide: APP_FILTER,
            useClass: WsExceptionFilter
        }
    ]
})
export class FilterModule { }