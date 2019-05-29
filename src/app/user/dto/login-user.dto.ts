import { IsOptional, IsPhoneNumber, IsString, IsNotEmpty, Length } from "class-validator";

export class LoginUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @Length(6, 20)
    password: string;
}