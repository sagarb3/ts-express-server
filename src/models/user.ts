import {Document} from 'mongoose';
import {IUser} from '../interfaces/user'
export interface IUserModel extends IUser , Document {
	//custom methods for IUserModel defined here
}