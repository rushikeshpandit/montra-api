import Account from "../models/account";
import { Request, Response } from "express";
import mongoose from "mongoose";
import _ from "lodash";
import validateAccount from "./validations/account/accountValidation";

export class AccountsController {
	public async createAccount(req: Request, res: Response) {
		try {
			const payload = req.body;
			const { errors, isValid } = validateAccount(payload);
			if (!isValid) {
				return res
					.status(400)
					.json({ status: false, message: "error", errors: errors });
			}

			const account = await Account.create(payload);
			return res.status(200).send({
				status: true,
				message: "Account added successfully.",
				data: account,
			});
		} catch (error) {
			return res.status(200).send({
				status: false,
				message: error.message,
				data: [],
			});
		}
	}

	public async getAccountById(req: Request, res: Response) {
		try {
			const payload = req.body;
			const userId = payload.userId;

			const accounts = await Account.aggregate([
				{ $match: { userId: new mongoose.Types.ObjectId(userId) } },
				{
					$lookup: {
						from: "accounts",
						let: { accountId: "$id" },
						pipeline: [
							{
								$match: {
									$expr: { $eq: [{ $toString: "$accountId" }, "$$accountId"] },
								},
							},
							{
								$lookup: {
									from: "users",
									let: { userId: "$userId" },
									pipeline: [
										{ $match: { $expr: { $eq: ["$_id", "$$userId"] } } },
									],
									as: "user",
								},
							},
							{
								$project: {
									id: { $toString: "$_id" },
									createdAt: "$createdAt",
									user: { $arrayElemAt: ["$user", 0] },
									_id: 0,
									comment: "$body",
								},
							},
						],
						as: "accounts",
					},
				},
			]);
			return res.status(200).send({
				status: true,
				message: "Success",
				data: accounts,
			});
		} catch (error) {
			return res.status(200).send({
				status: false,
				message: error.message,
				data: [],
			});
		}
	}
}
