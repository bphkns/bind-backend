import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    register(createUserDto: CreateUserDto): Promise<Partial<import("./user.entity").User>>;
}
