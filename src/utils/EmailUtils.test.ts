import Utils from '@sharebook-utils';

describe('Testing EmailUtils', () => {
	it('Email valid', () => {
		const emailValid = 'henrique_holtz@hotmail.com';
		const result = Utils.EmailIsValid(emailValid);
		expect(result).toBeTruthy();
	});
	it('Email invalid', () => {
		const emailInvalid = 'henrique_holtzhotmail.com';
		const result = Utils.EmailIsValid(emailInvalid);
		expect(result).not.toBeTruthy();
	});
});
