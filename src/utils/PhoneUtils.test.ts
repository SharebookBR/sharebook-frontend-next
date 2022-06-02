import Utils from '@sharebook-utils';

describe('Testing PhoneUtils', () => {
	it('Phone valid', () => {
		const validPhones = ['(44) 99988-7766', '(44) 9 9988-7766'];
		validPhones.forEach((item) => {
			const result = Utils.PhoneIsValid(item);
			expect(result).toBeTruthy();
		});
	});
	it('Phone invalid', () => {
		const invalidPhones = ['', '449988776', 'abcd', '(44) 9988-7766'];
		invalidPhones.forEach((item) => {
			const result = Utils.PhoneIsValid(item);
			expect(result).not.toBeTruthy();
		});
	});
});
