import Mongoose from "mongoose";

export const enum UserType {
	"Admin",
	"User",
}

const userSchema = new Mongoose.Schema(
	{
		name: String,
		email: {
			type: String,
			unique: true,
			lowercase: true,
			trim: true,
		},
		password: String,
		role: {
			type: String,
			enum: [UserType.Admin, UserType.User],
			default: UserType.User,
		},
		profilePicture: {
			type: Array,
			default: ["img/user_profile.png"],
		},
		status: { type: String, default: true },
		passwordToken: { type: String, default: "" },
	},
	// this is for hide _v key form collection
	{ timestamps: true, versionKey: false }
	// it create two timestamp field createAt and updateAt
);

export default Mongoose.model("User", userSchema);
