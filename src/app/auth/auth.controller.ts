import { Controller, Post, UsePipes, Body } from "@nestjs/common";
import { ValidationPipe } from "src/pipes/validation.pipe";
import { LoginUserDto } from "../user/dto/login-user.dto";

@Controller('auth')
export class AuthController {
    @Post('login')
    @UsePipes(ValidationPipe)
    async login(@Body() loginDto: LoginUserDto) {
        return {}
    }
}