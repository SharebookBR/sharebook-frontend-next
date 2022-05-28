import Utils from '@sharebook-utils';

describe('Testing EmailUtils', () => {
	it('Email valid', () => {
		const emailValid = 'henrique_holtz@hotmail.com';
		const result = Utils.EmailIsValid(emailValid);
		expect(result).toBeTruthy();
	});
	it('Email invalid', () => {
		const invalidEmails = ['', 'henrique@', 'henrique_holtzhotmail.com'];
		invalidEmails.forEach((item) => {
			const result = Utils.EmailIsValid(item);
			expect(result).not.toBeTruthy();
		});
	});
});
