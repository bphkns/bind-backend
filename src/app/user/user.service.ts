import { Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) { }

    async register(user: Partial<User>): Promise<Partial<User>> {
        user.username = user.phone ? user.phone : user.email;
        return await this.userRepository.save(user);
    }

    async findUser(token:string): Promise<Partial<User>> {
        return null;
    }
}