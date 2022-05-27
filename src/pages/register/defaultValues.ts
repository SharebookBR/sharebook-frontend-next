import { IValues, IErrors, IRegisterBase } from './types';

const initialRegisterBase: IRegisterBase = {
	name: '',
	emailOrPhone: '',
	address: '',
	complement: '',
	city: '',
	password: '',
	confirmPassword: '',
	zipCode: '',
	number: '',
	neighborhood: '',
	state: ''
};

export const initialValues: IValues = {
	...initialRegisterBase,
	acceptReceiveEmails: true,
	acceptTerms: false
};

export const initialErrors: IErrors = {
	...initialRegisterBase,
	hasErrors: false
};
