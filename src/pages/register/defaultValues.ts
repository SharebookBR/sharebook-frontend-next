import { IValues, IErrors, IRegisterBase } from './types';

const initialRegisterBase: IRegisterBase = {
	name: '',
	email: '',
	phone: '',
	street: '',
	birthDate: '',
	complement: '',
	city: '',
	password: '',
	confirmPassword: '',
	postalCode: '',
	number: '',
	neighborhood: '',
	state: ''
};

export const initialValues: IValues = {
	...initialRegisterBase,
	allowSendingEmail: true,
	acceptTermOfUse: false
};

export const initialErrors: IErrors = {
	...initialRegisterBase,
	hasErrors: false
};
