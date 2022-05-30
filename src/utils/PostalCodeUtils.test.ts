import Utils from '@sharebook-utils';

describe('Testing PostalCodeUtils (CEP)', () => {
	it('PostalCode (CEP) valid', () => {
		const validPostalCodes = ['85950000', '85950-000'];
		validPostalCodes.forEach((item) => {
			const result = Utils.PostalCodeIsValid(item);
			expect(result).toBeTruthy();
		});
	});
	it('PostalCode (CEP) invalid', () => {
		const invalidPostalCodes = ['', '85-950-000', '85955-00', '85955-0001'];
		invalidPostalCodes.forEach((item) => {
			const result = Utils.PostalCodeIsValid(item);
			expect(result).not.toBeTruthy();
		});
	});
});
