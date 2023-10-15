import dotenv from "dotenv";
import Mongoose, { ConnectOptions } from "mongoose";
import BlueBird from "bluebird";

const mongoUrl = process.env.MONGO_URL;

Mongoose.Promise = BlueBird;

Mongoose.connect(mongoUrl, { useNewUrlParser: true } as ConnectOptions)
	.then((res) => {
		console.log("MongoDB Connected successfully.");
	})
	.catch((err) => {
		console.log("MongoDB Connection failed");
		throw err;
	});

export default Mongoose;
