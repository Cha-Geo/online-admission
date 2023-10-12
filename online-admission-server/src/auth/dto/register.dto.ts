import {
  IsEmail,
  IsOptional,
  IsString,
  Matches,
  IsStrongPassword,
} from 'class-validator';

export class RegisterUserDto {
  //state
  @IsOptional()
  @IsString()
  @Matches(/^[a-zA-Z]+( +[a-zA-Z]+)*$/, { message: 'Enter valid username' })
  username: string;

  // @Matches(/^[a-zA-Z0-9@#]{8,20}$/, {
  //   message: 'password weak',
  // })
  @IsStrongPassword()
  readonly password: string;

  @IsEmail()
  email: string;
}
