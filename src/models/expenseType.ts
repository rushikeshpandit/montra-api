import Mongoose from "mongoose";

var Schema = Mongoose.Schema;

// create a schema
var expenseTypeSchema = new Schema(
	{
		title: { type: String, default: "" },
		userId: { type: Schema.ObjectId, ref: "User" },
	},
	{
		// Automatically include createdAt and updatedAt field
		timestamps: true,
		versionKey: false,
	}
);

export default Mongoose.model("ExpenseType", expenseTypeSchema);
