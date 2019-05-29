import { CanActivate, ExecutionContext } from "@nestjs/common";
export declare class UserChatAuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
