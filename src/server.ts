import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import errorHandler = require("errorhandler");
import methodOverride = require("method-override");

import {IndexRoute} from './routes/index'

/**
 * Additional Methods for db functionality
 */
import mongoose = require("mongoose"); //import mongoose

//interfaces
import {IUser} from "./interfaces/user"; //import IUser

//models
import {IModel} from "./models/model"; // import IModel
import {IUserModel} from "./models/user"; //import IUserModel

//schemas
import {userSchema} from "./schema/user"; //import userSchema


/** 
 * The Server
 *
 * @class Server
 */

export class Server {

	public app : express.Application;

	private model : IModel ; //an instance of IModel
	/**
	 * Bootstrap the application
	 *
	 * @class Server
	 * @method bootstrap
	 * @static 
	 * @return 
	 */
	
	public static bootstrap() : Server{
		return new Server();
	}
	/**
	 * Constructor
	 *
	 * @class Server
	 * @constructor
	 */
	constructor(){
		//instance defauls
		this.model = Object(); // initialize this to an empty object

		//create express application
		this.app = express();

		//configure application
		this.config();

		//add routes
		this.routes();

		//add api
		this.api();
	}
	/**
	 * Creates REST api routes
	 *
	 * @class Server
	 * @method api
	 */
	public api(){

	}
	/**
	 * Configure application
	 *
	 * @class Server
	 * @method config
	 */
	public config(){
		//database configuration

		const MONGODB_CONNECTION:string = "mongodb://localhost:27017/heros";

		//q promises
		global.Promise = require("q").Promise;
		mongoose.Promise = global.Promise;

		let connection :mongoose.Connection = mongoose.createConnection(MONGODB_CONNECTION);

		//create models
		this.model.user = connection.model<IUserModel>("User",userSchema);


		//add static paths
		this.app.use(express.static(path.join(__dirname,"public")));

		//configure pug
		this.app.set("views",path.join(__dirname,"views"));
		this.app.set("view engine","pug");

		//use logger middleware
		this.app.use(logger("dev"));

		//use json from parser middleware
		this.app.use(bodyParser.json())

		//use query string parser middleware
		this.app.use(bodyParser.urlencoded({
			extended:true
		}));

		//use cookie parser middleware
		this.app.use(cookieParser("SECRET_KEY"));

		//use override middleware
		this.app.use(methodOverride());

		//catch 404 and forward to error handler
		this.app.use(function(err:any,req:express.Request,res:express.Response,next:express.NextFunction){
			err.status = 404;
			next(err);
		})

		//eror handling
		this.app.use(errorHandler());
	
	}
	/**
	 * Create router
	 *
	 * @class Server
	 * @method api
	 */
	public routes(){
		let router:express.Router;
		router = express.Router();

		//IndexRoute
		IndexRoute.create(router);

		//use router middleware
		this.app.use(router);
	}

}