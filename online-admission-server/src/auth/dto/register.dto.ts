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
  @Matches(/^[a-zA-Z]+( +[a-zA-Z]+)*$/, { message: 'Enter valid username' })
  username: string;

  @Matches(/^[a-zA-Z]+( +[a-zA-Z]+)*$/, { message: 'Enter valid first name' })
  first_name: string;

  @Matches(/^[a-zA-Z]+( +[a-zA-Z]+)*$/, { message: 'Enter valid last name' })
  last_name: string;

  // @Matches(/^[a-zA-Z0-9@#]{8,20}$/, {
  //   message: 'password weak',
  // })
  @IsStrongPassword()
  readonly password: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString({ message: 'password should be in string format' })
  picture: string;
}
