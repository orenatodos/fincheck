import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class SigninDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
