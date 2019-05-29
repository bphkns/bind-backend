import { Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { LoginUserDto } from "../user/dto/login-user.dto";
import { User } from "../user/user.entity";
import { JwtPayload } from "./dto/jwtPayload.dto";

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private readonly jwtService: JwtService) { }

    async createToken(user: User): Promise<string> {
        return this.jwtService.sign(user);
    }

    async validateUser(jwtPayLoad: JwtPayload): Promise<any> {
        return  this.userService.findUser(jwtPayLoad);
    }
}