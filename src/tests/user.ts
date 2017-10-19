import {suite,test} from "mocha-typescript";
import {IUser} from "../interfaces/user";
import {IUserModel} from "../models/user";
import {userSchema} from "../schema/user";
import mongoose = require("mongoose");

@suite
class UserTest{
	//store test data
	private data : IUser;

	//the User model
	public static User:mongoose.Model<IUserModel>;

	public static before(){
		//use q promises;
		global.Promise = require("q").Promise;
		//use q library for mongoose promise
		mongoose.Promise = global.Promise;

		//mongo connection
		const MONGODB_CONNECTION:string = 'mongodb://localhost:27017/heros';
		let connection:mongoose.Connection = mongoose.createConnection(MONGODB_CONNECTION);
		UserTest.User = connection.model<IUserModel>("User",userSchema);

		//require chai and use should() assestions
		let chai = require("chai");
		chai.should();

	}
	constructor(){
		this.data = {
			email : "sagar13912@gmail.com",
			firstName : "Sagar",
			lastName : "Bhattacharya"
		};
	}
	
	@test("should create a new user")
	public create(){
		return new UserTest.User(this.data).save().then(result => {
			result._id.should.exist;

			result.email.should.equal(this.data.email);
			result.firstName.should.equal(this.data.firstName);
			result.lastName.should.equal(this.data.lastName);
		})
	}

}



