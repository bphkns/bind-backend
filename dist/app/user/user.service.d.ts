import { UserRepository } from "./user.repository";
import { User } from "./user.entity";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    register(user: Partial<User>): Promise<Partial<User>>;
    findUser(token: string): Promise<Partial<User>>;
}
