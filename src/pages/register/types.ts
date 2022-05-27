export interface IRegisterBase {
	name: string;
	emailOrPhone: string;
	address: string;
	complement?: string;
	city: string;
	password: string;
	confirmPassword: string;
	birthDate?: Date;
	zipCode: string;
	number: string;
	neighborhood: string;
	state: string;
}

export interface IValues extends IRegisterBase {
	acceptReceiveEmails: boolean;
	acceptTerms: boolean;
}

export interface IErrors extends IRegisterBase {
	hasErrors: boolean;
}
