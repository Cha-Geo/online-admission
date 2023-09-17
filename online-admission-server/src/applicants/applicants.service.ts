import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Error, Model } from 'mongoose';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { CurrentApplicant, Applicant } from 'src/shared/interfaces/applicant';
import * as bcrypt from 'bcrypt';
import * as randomToken from 'rand-token';
import * as moment from 'moment';
import { Payload } from 'src/shared/interfaces /jwt.payload';
import { Profile } from 'src/user/interfaces/profile';
import { SignInSuccess } from 'src/auth/messages/signin.success';
import { RegisterUserDto } from 'src/auth/dto/register.dto';
import { LoginDto } from 'src/auth/dto/login.dto';
@Injectable()
export class ApplicantsService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    @InjectModel('Profile') private ProfileModel: Model<Profile>,
  ) {}

  private sanitizeUser(user: User) {
    return user.depopulate('password');
  }

  /* create new empty 'User' object and returns it */
  async newUser(userDetails: RegisterUserDto): Promise<User> {
    const profile: Profile = new this.ProfileModel();
    const user: User = new this.userModel(userDetails);
    user.profile = profile;
    console.log('profile: ', profile);
    console.log('user profile: ', user.profile);
    console.log(user);
    return user;
  }

  async create(userDetails: RegisterUserDto): Promise<User> {
    const { email } = userDetails;
    console.log('email: ', email);
    const user = await this.userModel.findOne({ email });
    console.log('user: ', user);

    if (user === null) {
      const newUser: User = await this.newUser(userDetails);
      console.log('new user created: ', newUser);

      newUser.email = email;

      await newUser.save();

      const sanitizedUser = this.sanitizeUser(newUser);
      console.log('sanitized user: ', sanitizedUser);

      /* return this new user */
      return sanitizedUser;
    } else {
      const message = `${SignInSuccess.USER_ALREADY_EXIST} as ${user.profile.username}`;
      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }
  }

  async findByLogin(userDto: LoginDto) {
    const { email, password } = userDto;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new HttpException('User does not exist', HttpStatus.UNAUTHORIZED);
    }
    if (await bcrypt.compare(password, user.password)) {
      return this.sanitizeUser(user);
    } else {
      throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED);
    }
  }

  async getRefreshToken(userId: string): Promise<string> {
    const userDataToUpdate = {
      refreshToken: randomToken.generate(16),
      refreshTokenExp: moment().day(1).format('YYYY/MM/DD'),
    };

    const user = await this.userModel.findById(userId);
    console.log(user);
    await user.updateOne(user, userDataToUpdate);

    return userDataToUpdate.refreshToken;
  }

  /* used by  modules to search user by email */
  async findUser(userEmail: string): Promise<User> {
    const user: User = await this.userModel
      .findOne({
        email: userEmail,
      })
      .exec();

    if (user === null) {
      throw new Error(UserErrors.USER_DOES_NOT_EXISTS);
    } else {
      console.log('found user: ', user);
      return user;
    }
  }

  async validateUserCredentials(
    email: string,
    password: string,
  ): Promise<CurrentUser> {
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
    const user = await this.userModel.findOne({ email }).exec();
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
      _id: user._id as mongoose.Types.ObjectId,
      email: user.email,
      firstName: user.profile.first_name,
      lastName: user.profile.last_name,
      username: user.profile.username,
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
    const user = await this.userModel.findOne({ username: user_name }).exec();
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
      _id: user._id as mongoose.Types.ObjectId,
      firstName: user.profile.first_name,
      lastName: user.profile.last_name,
      email: user.email,
      username: user.profile.username,
      profile: user.profile,
    };
    console.log(currentUser);

    return currentUser;
  }

  async validRefreshToken(
    email: string,
    refreshToken: string,
  ): Promise<CurrentUser> {
    const currentDate = moment().day(1).format('YYYY/MM/DD');
    const user = await this.userModel
      .findOne({
        email,
        refreshToken,
        refreshTokenExp: { $gte: currentDate },
      })
      .exec();

    if (!user) {
      return null;
    }

    const currentUser: CurrentUser = {
      _id: user._id,
      firstName: user.profile.first_name,
      lastName: user.profile.last_name,
      email: user.email,
      username: user.profile.username,
    };

    return currentUser;
  }

  async findByPayload(payload: Payload) {
    const { email } = payload;
    return await this.userModel.findOne({ email });
  }

  async findByEmail(payload: Payload) {
    const { email } = payload;
    return await this.userModel.findOne({ email });
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOne(userId: string): Promise<User> {
    const foundUser = await this.userModel.findById(userId).exec();
    if (!foundUser) {
      throw new NotFoundException();
    }
    console.log(foundUser);
    return foundUser.populate('profile');
  }

  async update(
    userId: string,
    updateUserDto: LoginDto,
  ): Promise<UpdateUserDto> {
    {
      const updatedUser = await this.userModel
        .findByIdAndUpdate(userId, updateUserDto)
        .exec();
      if (!updatedUser) {
        throw new NotFoundException();
      }
      return updatedUser;
    }
  }

  async updateUser(
    email: string,
    userDetails: UpdateUserDetailsDto,
  ): Promise<User> {
    console.log(userDetails);
    const user: User = await this.findUser(email);
    console.log('user: ', user);

    user.profile.username = `${userDetails.first_name.toLocaleLowerCase()} ${userDetails.last_name.toLocaleLowerCase()}`;

    if (userDetails.contact_no) {
      user.profile.contact_no = userDetails.contact_no;
    }
    if (userDetails.first_name) {
      user.profile.first_name = userDetails.first_name;
    }
    if (userDetails.last_name) {
      user.profile.last_name = userDetails.last_name;
    }
    if (userDetails.area) {
      user.profile.area = userDetails.area;
    }
    if (userDetails.city) {
      user.profile.city = userDetails.city;
    }
    if (userDetails.state) {
      user.profile.state = userDetails.state;
    }
    if (userDetails.pincode) {
      user.profile.pinCode = userDetails.pincode;
    }

    user.save();
    console.log('saved user: ', user);
    return user;
  }

  async updateRole(
    userId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateUserDto> {
    const updatedUser = await this.userModel
      .findByIdAndUpdate(userId, updateUserDto)
      .exec();
    if (!updatedUser) {
      throw new NotFoundException();
    }
    return updatedUser;
  }
  async remove(userId: string): Promise<void> {
    return await this.userModel.findByIdAndDelete(userId);
  }
}
