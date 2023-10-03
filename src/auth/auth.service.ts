import { Injectable } from '@nestjs/common';
import { User } from './auth.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  async signUp(username: string, password: string) {
    const newUser = new this.userModel({ username, password });
    await newUser.save();
    return newUser;
  }
  async signIn(username: string, password: string) {
    const User = await this.userModel.findOne({ username });
    if (!User) {
      return { mssg: 'no user' };
    }
    if (User.password === password) {
      return { mssg: 'logged in ' };
    }
  }
}
