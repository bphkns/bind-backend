import { Controller, Get, Post, UsePipes, Body, BadRequestException } from "@nestjs/common";
import { ValidationPipe } from "./../../pipes/validation.pipe";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @Post()
    @UsePipes(ValidationPipe)
    async register(@Body() createUserDto: CreateUserDto) {
        try {
            return await this.userService.register(createUserDto);
        } catch (err) {
            throw new BadRequestException(err);
        }
    }

    @Get()
    async find() {
        return await this.userService.find();
    }
}