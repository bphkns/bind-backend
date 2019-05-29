import { LoginUserDto } from "../user/dto/login-user.dto";
export declare class AuthController {
    login(loginDto: LoginUserDto): Promise<{}>;
}
