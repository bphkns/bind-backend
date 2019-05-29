import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "../user/user.entity";
import { JwtPayload } from "./dto/jwtPayload.dto";
export declare class AuthService {
    private userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    createToken(user: User): Promise<string>;
    validateUser(jwtPayLoad: JwtPayload): Promise<any>;
}
