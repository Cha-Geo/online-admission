import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Payload } from '../shared/interfaces/jwt_payload.interface';
import { User } from './entities/applicant.entity';
import { sanitizeUser } from 'src/shared/utils/users.utils';
import { Profile } from './entities/applicant.profile.enity';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { LoginDto } from 'src/auth/dto';
import { SanitizedUser } from 'src/shared/interfaces/applicant.interface';
@Injectable()
export class ApplicantsService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async getUsersRepo(): Promise<Repository<User>> {
    return this.usersRepository;
  }

  async getProfilesRepo(): Promise<Repository<Profile>> {
    return this.profileRepository;
  }
  /* create new empty 'User' object and returns it */
  async newUser(userDetails: CreateApplicantDto): Promise<User> {
    console.log(userDetails);
    const profile: Profile = this.profileRepository.create();
    const user: User = this.usersRepository.create({
      ...userDetails,
      createdAt: new Date(),
      updatedAt: new Date(),
    }); // Create an array with a single user object
    await this.profileRepository.save(profile);
    user.profile = profile;
    console.log('profile: ', profile);
    console.log('user profile: ', user.profile);
    console.log(user);
    return user;
  }

  async create(userDetails: CreateApplicantDto): Promise<User | any> {
    const { email } = userDetails;
    console.log('email: ', email);
    const existingUser = await this.usersRepository.findOne({
      where: { email },
    });
    console.log('existing user: ', existingUser);

    if (existingUser) throw new ConflictException('Email is already used');

    const newUser = await this.newUser(userDetails);

    // Save the new user to the database
    const savedUser = await this.usersRepository.save(newUser);
    console.log('new user created: ', savedUser);

    const sanitizedUser = sanitizeUser(savedUser);
    console.log('sanitized user: ', sanitizedUser);

    /* return this new user */
    return sanitizedUser;
  }

  async findByLogin(userDto: LoginDto) {
    const { username, password } = userDto;
    try {
      const user = await this.usersRepository.findOneOrFail({
        where: { username },
        relations: ['profile'],
      });

      if (await bcrypt.compare(password, user.password)) {
        return sanitizeUser(user);
      } else {
        // Passwords don't match, throw UnauthorizedException
        throw new UnauthorizedException('Incorrect username or password');
      }
    } catch (error) {
      // Entity not found or other error occurred, throw appropriate error
      throw new UnauthorizedException('Incorrect username or password');
    }
  }

  /* used by  modules to search user by email */
  async findUser(userEmail: string): Promise<User> {
    const user: User | undefined = await this.usersRepository.findOne({
      where: { email: userEmail },
      relations: ['profile'],
    });

    if (!user) {
      // Handle the case where no user is found
      throw new Error('User not found.');
    } else {
      console.log('Found user:', user);
      return user;
    }
  }

  async findByPayload(payload: Payload) {
    const { username } = payload;
    return await this.usersRepository.findOne({ where: { email: username } });
  }

  async findByUsername(username: string) {
    return await this.usersRepository.findOne({ where: { username } });
  }

  async findByEmail(payload: Payload) {
    const { username } = payload;
    return await this.usersRepository.findOne({
      where: { email: username },
      relations: ['profile'],
    });
  }

  async findAll(): Promise<SanitizedUser[]> {
    // Retrieve user data from the database
    const users = await this.usersRepository.find({
      relations: ['profile'],
    });

    // Use the sanitizeUser function to filter out sensitive information
    const safeUsers = users.map((user) => sanitizeUser(user));

    return safeUsers;
  }

  async findOne(userId: string): Promise<SanitizedUser> {
    const user = await this.usersRepository.findOne({
      where: { id: userId },
      relations: ['profile'],
    });

    if (!user) {
      throw new NotFoundException();
    }

    return sanitizeUser(user);
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
