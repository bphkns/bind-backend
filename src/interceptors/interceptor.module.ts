import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { LoggingInterceptor } from "./logger/logger.interceptor";

@Module({
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggingInterceptor
        }
    ]
})
export class InterceptorModule {

}