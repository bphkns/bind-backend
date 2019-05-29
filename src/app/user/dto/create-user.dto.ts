import { IsPhoneNumber, IsNotEmpty, MinLength, MaxLength, IsAlphanumeric, IsEmail, ValidateIf, IsOptional } from 'class-validator';

export class CreateUserDto {

    @IsOptional()
    @IsPhoneNumber('IN')
    phone: string;

    @IsNotEmpty()
    @IsAlphanumeric()
    @MinLength(6)
    @MaxLength(20)
    password: string;

    @ValidateIf(c => c.phone === undefined)
    @IsEmail()
    email: string;
}