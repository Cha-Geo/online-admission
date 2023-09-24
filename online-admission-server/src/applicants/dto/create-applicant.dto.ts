import { Matches, IsEmail, IsString } from 'class-validator';

export class CreateApplicantDto {
  // //state
  @IsString()
  @Matches(/^[a-zA-Z]+( +[a-zA-Z]+)*$/, { message: 'Enter valid username' })
  username: string;

  @IsString()
  @Matches(/^[a-zA-Z]+( +[a-zA-Z]+)*$/, { message: 'Enter valid first name' })
  firstName: string;

  @IsString()
  @Matches(/^[a-zA-Z]+( +[a-zA-Z]+)*$/, { message: 'Enter valid last name' })
  lastName: string;

  // @Matches(/^[a-zA-Z0-9@#]{8,20}$/, {
  //   message: 'password weak',
  // })
  // @IsStrongPassword()
  readonly password: string;

  @IsEmail()
  email: string;

  // @IsOptional()
  // @IsString({ message: 'password should be in string format' })
  // picture: string;
}
