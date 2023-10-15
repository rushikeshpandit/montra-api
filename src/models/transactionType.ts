import Mongoose from "mongoose";

var Schema = Mongoose.Schema;

export const enum TransactionType {
	"CREDIT",
	"DEBIT",
	"TRANSFER",
}

// create a schema
var transactionTypeSchema = new Schema(
	{
		title: {
			type: String,
			enum: [
				TransactionType.CREDIT,
				TransactionType.DEBIT,
				TransactionType.TRANSFER,
			],
			default: TransactionType.CREDIT,
		},
	},
	{
		// Automatically include createdAt and updatedAt field
		timestamps: true,
		versionKey: false,
	}
);

export default Mongoose.model("TransactionType", transactionTypeSchema);
