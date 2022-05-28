import Utils from '@sharebook-utils';

describe('Testing PasswordUtils', () => {
	it('Password valid', () => {
		const passwordValid = '123456789';
		const result = Utils.PasswordIsValid(passwordValid);
		expect(result).toBeTruthy();
	});
	it('Password invalid', () => {
		const invalidPassowrds = ['', '1234', 'asdbkasdhajksdhasjkdhasdjkhasjdaksdjsa'];
		invalidPassowrds.forEach((item) => {
			const result = Utils.PasswordIsValid(item);
			expect(result).not.toBeTruthy();
		});
	});
});
