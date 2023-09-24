import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as randomToken from 'rand-token';
import * as moment from 'moment';
import { Payload } from '../shared/interfaces/jwt.payload';
import { User } from './entities/applicant.entity';
import { User as CurrentUser } from './entities/current-applicant.entity';
import { sanitizeUser } from 'src/shared/utils/users.utils';
import { Profile } from './entities/applicant.profile.enity';
@Injectable()
export class ApplicantsService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private profileRepository: Repository<Profile>,
  ) {}

  /* create new empty 'User' object and returns it */
  async newUser(userDetails: any): Promise<User> {
    const profile: Profile = this.profileRepository.create();
    const userArray: User[] = this.usersRepository.create([userDetails]); // Create an array with a single user object
    const user: User = userArray[0]; // Access the first element of the array
    user.profile = profile;
    console.log('profile: ', profile);
    console.log('user profile: ', user.profile);
    console.log(user);
    return user;
  }

  async create(userDetails: any): Promise<User | any> {
    const { email } = userDetails;
    console.log('email: ', email);
    const existingUser = await this.usersRepository.findOne({
      where: { email },
    });
    console.log('existing user: ', existingUser);

    if (existingUser === null) {
      // Create a new user instance with associated profile
      const newUser = await this.newUser(userDetails);

      // Save the new user to the database
      const savedUser = await this.usersRepository.save(newUser);
      console.log('new user created: ', savedUser);

      const sanitizedUser = sanitizeUser(savedUser);
      console.log('sanitized user: ', sanitizedUser);

      /* return this new user */
      return sanitizedUser;
    } else {
      const message = `${'blah blah'} as ${'blah'}`;
      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }
  }

  async findByLogin(userDto: any) {
    const { email, password } = userDto;
    try {
      const user = await this.usersRepository.findOneOrFail({
        where: { email },
      });
      if (await bcrypt.compare(password, user.password)) {
        return sanitizeUser(user);
      } else {
        throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED);
      }
    } catch (error) {
      throw new HttpException('User does not exist', HttpStatus.UNAUTHORIZED);
    }
  }

  async getRefreshToken(userId: number): Promise<string> {
    const userDataToUpdate = {
      refreshToken: randomToken.generate(16),
      refreshTokenExp: moment().day(1).format('YYYY/MM/DD'),
    };

    const user = await this.usersRepository.findOne({ where: { id: userId } });

    if (user) {
      // Update the user entity with new refreshToken and refreshTokenExp
      user.refreshToken = userDataToUpdate.refreshToken;
      user.refreshTokenExp = userDataToUpdate.refreshTokenExp;

      // Save the updated user entity to the database
      await this.usersRepository.save(user);

      return userDataToUpdate.refreshToken;
    } else {
      // Handle the case when the user is not found
      throw new Error('User not found');
    }
  }

  /* used by  modules to search user by email */
  async findUser(userEmail: string): Promise<User> {
    const user: User | undefined = await this.usersRepository.findOne({
      where: { email: userEmail },
    });

    if (!user) {
      // Handle the case where no user is found
      throw new Error('User not found.');
    } else {
      console.log('Found user:', user);
      return user;
    }
  }

  async validateUserCredentials(
    email: string,
    password: string,
  ): Promise<CurrentUser> {
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
    const user = await this.usersRepository.findOne({ where: { email } });
    console.log(`user: ${user}`);

    if (user == null) {
      return null;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    console.log(`check password match: ${isValidPassword}`);
    if (!isValidPassword) {
      return null;
    }

    const currentUser = {
      id: user.id,
      email: user.email,
      firstName: user.profile.first_name,
      lastName: user.profile.last_name,
      username: user.profile.username,
      isActive: user.isActive,
      role: user.role,
    };
    console.log(currentUser);

    return currentUser;
  }

  async validateUserCredentialsByUsername(
    user_name: string,
    password: string,
  ): Promise<CurrentUser> {
    console.log(`username: ${user_name}`);
    console.log(`password: ${password}`);
    console.log(`password 2: ${password}`);
    const user = await this.usersRepository.findOne({
      where: { username: user_name },
    });
    console.log(`user: ${user}`);

    if (user == null) {
      return null;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    console.log(`check password match: ${isValidPassword}`);
    if (!isValidPassword) {
      return null;
    }

    const currentUser = {
      id: user.id,
      firstName: user.profile.first_name,
      lastName: user.profile.last_name,
      email: user.email,
      username: user.profile.username,
      profile: user.profile,
      isActive: user.isActive,
      role: user.role,
    };
    console.log(currentUser);

    return currentUser;
  }

  async validRefreshToken(
    email: string,
    refreshToken: string,
  ): Promise<CurrentUser> {
    const currentDate = moment().day(1).format('YYYY/MM/DD');
    const user = await this.usersRepository.findOne({
      where: {
        email,
        refreshToken,
        refreshTokenExp: MoreThanOrEqual(currentDate), // Use TypeORM's MoreThanOrEqual
      },
    });

    if (!user) {
      return null;
    }

    const currentUser: CurrentUser = {
      id: user.id,
      firstName: user.profile.first_name,
      lastName: user.profile.last_name,
      email: user.email,
      username: user.profile.username,
      isActive: user.isActive,
      role: user.role,
    };

    return currentUser;
  }

  async findByPayload(payload: Payload) {
    const { email } = payload;
    return await this.usersRepository.findOne({ where: { email } });
  }

  async findByEmail(payload: Payload) {
    const { email } = payload;
    return await this.usersRepository.findOne({ where: { email } });
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(userId: number): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { id: userId } });
  }

  // async update(
  //   userId: string,
  //   updateUserDto: LoginDto,
  // ): Promise<UpdateUserDto> {
  //   {
  //     const updatedUser = await this.usersRepository
  //       .findByIdAndUpdate(userId, updateUserDto)
  //       .exec();
  //     if (!updatedUser) {
  //       throw new NotFoundException();
  //     }
  //     return updatedUser;
  //   }
  // }

  // async updateUser(
  //   email: string,
  //   userDetails: UpdateUserDetailsDto,
  // ): Promise<User> {
  //   console.log(userDetails);
  //   const user: User = await this.findUser(email);
  //   console.log('user: ', user);

  //   user.profile.username = `${userDetails.first_name.toLocaleLowerCase()} ${userDetails.last_name.toLocaleLowerCase()}`;

  //   if (userDetails.contact_no) {
  //     user.profile.contact_no = userDetails.contact_no;
  //   }
  //   if (userDetails.first_name) {
  //     user.profile.first_name = userDetails.first_name;
  //   }
  //   if (userDetails.last_name) {
  //     user.profile.last_name = userDetails.last_name;
  //   }
  //   if (userDetails.area) {
  //     user.profile.area = userDetails.area;
  //   }
  //   if (userDetails.city) {
  //     user.profile.city = userDetails.city;
  //   }
  //   if (userDetails.state) {
  //     user.profile.state = userDetails.state;
  //   }
  //   if (userDetails.pincode) {
  //     user.profile.pinCode = userDetails.pincode;
  //   }

  //   user.save();
  //   console.log('saved user: ', user);
  //   return user;
  // }

  // async updateRole(
  //   userId: string,
  //   updateUserDto: UpdateUserDto,
  // ): Promise<UpdateUserDto> {
  //   const updatedUser = await this.usersRepository
  //     .findByIdAndUpdate(userId, updateUserDto)
  //     .exec();
  //   if (!updatedUser) {
  //     throw new NotFoundException();
  //   }
  //   return updatedUser;
  // }
  // async remove(userId: string): Promise<void> {
  //   return await this.usersRepository.remove(userId);
  // }
}
