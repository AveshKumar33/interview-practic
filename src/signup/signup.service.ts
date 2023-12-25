import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SignupModel } from './signup.model';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
const saltOrRounds = 10;
interface User {
    userName: string,
    email: string,
    password: string
}

@Injectable()
export class SignupService {
    constructor(@InjectModel("Signup") private signupModel: Model<SignupModel>) { }
    async signup(user: User) {
        const newUser = new this.signupModel({
            userName: user.userName,
            email: user.email,
            // password: user.password
            password: await bcrypt.hash(user.password, saltOrRounds)
            // password: await bcrypt.hash(user.password, 10)
        })
        try {
            await newUser.save()
            return 'signup successfully'
        } catch (error) {
            console.log('Sign up failed', error);
        }
    }
}