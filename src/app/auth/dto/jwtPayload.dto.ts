import { IsString } from "class-validator";

export class JwtPayload {
    @IsString()
    token: string;
}