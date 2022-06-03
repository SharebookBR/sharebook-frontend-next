export interface IRegisterBase {
	name: string;
	email: string;
	phone: string;
	street: string;
	complement?: string;
	city: string;
	password: string;
	confirmPassword: string;
	birthDate: string;
	postalCode: string;
	number: string;
	neighborhood: string;
	state: string;
}

export interface IValues extends IRegisterBase {
	allowSendingEmail: boolean;
	acceptTermOfUse: boolean;
}

export interface IErrors extends IRegisterBase {}

interface IViaCepData {
	bairro: string;
	complemento: string;
	localidade: string;
	logradouro: string;
	uf: string;
}

export interface IViaCepResponse {
	data: IViaCepData;
}
