import Mongoose from "mongoose";

var Schema = Mongoose.Schema;

// create a schema
var expenseSchema = new Schema(
	{
		title: { type: String, default: "" },
		userId: { type: Schema.ObjectId, ref: "User" },
		accountId: { type: Schema.ObjectId, ref: "Account" },
		expenseTypeId: { type: Schema.ObjectId, ref: "ExpenseType" },
		description: { type: String, default: "" },
		amount: { type: Number, default: 0 },
		transactionTypeId: { type: Schema.ObjectId, ref: "TransactionType" },
	},
	{
		// Automatically include createdAt and updatedAt field
		timestamps: true,
		versionKey: false,
	}
);

export default Mongoose.model("Expenses", expenseSchema);
