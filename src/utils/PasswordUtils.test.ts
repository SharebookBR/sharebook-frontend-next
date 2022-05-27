import Utils from '@sharebook-utils';

describe('Testing PasswordUtils', () => {
	it('Password valid', () => {
		const passwordValid = '123456789';
		const result = Utils.PasswordIsValid(passwordValid);
		expect(result).toBeTruthy();
	});
	it('Password invalid', () => {
		const passwordInvalid = '0123';
		const result = Utils.PasswordIsValid(passwordInvalid);
		expect(result).not.toBeTruthy();
	});
});
