import { Request, Response } from "express";
import { AuthController } from "../controllers/AuthController";
import { AccountsController } from "../controllers/AccountsController";

export class Routes {
	public authController: AuthController = new AuthController();
	public accountController: AccountsController = new AccountsController();

	public routes(app: any): void {
		app.route("/").get((req: Request, res: Response) => {
			res.status(200).send({
				message: "GET request successfulll!!!!",
			});
		});

		// Login and Registration
		app.route("/api/v1/login").post(this.authController.login);
		app.route("/api/v1/me").get(this.authController.authenticate);
		app.route("/api/v1/registration").post(this.authController.registration);

		app.route("/api/v1/account").post(this.accountController.createAccount);
		app.route("/api/v1/account").get(this.accountController.getAccountById);
	}
}
