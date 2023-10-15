import Mongoose from "mongoose";

var Schema = Mongoose.Schema;

// create a schema
var accountSchema = new Schema(
	{
		name: { type: String, default: "" },
		userId: { type: Schema.ObjectId, ref: "User" },
		balance: { type: Number, default: 0 },
	},
	{
		// Automatically include createdAt and updatedAt field
		timestamps: true,
		versionKey: false,
	}
);

export default Mongoose.model("Account", accountSchema);
