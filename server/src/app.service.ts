import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class AppService {
	constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

  async login({email, name, image}: {email:string; name:string; image:string}):Promise<any> {
	const userExists = await this.UserModel.findOne({
		email: email
	})
	if (!userExists){
		const createdUser = new this.UserModel({
			email,name,image
		});
		await createdUser.save()
		return createdUser
	} else {
		return userExists
	}

  }
}
