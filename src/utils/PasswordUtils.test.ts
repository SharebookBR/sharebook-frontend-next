import Utils from '@sharebook-utils';

describe('Testing PasswordUtils', () => {
	it('Password valid', () => {
		const validPasswords = ['123456', 'henrique', '01234567890123456789012345678912'];
		validPasswords.forEach((item) => {
			const result = Utils.PasswordIsValid(item);
			expect(result).toBeTruthy();
		});
	});
	it('Password invalid', () => {
		const invalidPasswords = ['', '1234', 'asdbkasdhajksdhasjkdhasdjkhasjdaksdjsa'];
		invalidPasswords.forEach((item) => {
			const result = Utils.PasswordIsValid(item);
			expect(result).not.toBeTruthy();
		});
	});
});
