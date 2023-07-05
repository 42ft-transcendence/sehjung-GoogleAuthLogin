import { Model } from 'mongoose';
import { User } from './user.schema';
export declare class AppService {
    private UserModel;
    constructor(UserModel: Model<User>);
    login({ email, name, image }: {
        email: string;
        name: string;
        image: string;
    }): Promise<any>;
}
