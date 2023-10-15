import Validator from "validator";
import Helper from "../../../utils/helper";
import ErrorObject from "../error";
const isEmpty = Helper.isEmpty;

const validateAccount = (data) => {
	let errors: ErrorObject = {};
	data.name = !isEmpty(data.name) ? data.name : "";
	data.balance = !isEmpty(data.balance) ? data.balance : "";

	if (Validator.isEmpty(data.name)) {
		errors.name = "Name is required";
	}

	if (Validator.isEmpty(data.balance)) {
		errors.balance = "Balance is required";
	}

	return {
		errors,
		isValid: isEmpty(errors),
	};
};

export default validateAccount;
