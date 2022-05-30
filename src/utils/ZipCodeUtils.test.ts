import Utils from '@sharebook-utils';

describe('Testing ZipCodeUtils (CEP)', () => {
	it('ZipCode (CEP) valid', () => {
		const validZipCodes = ['85950000', '85950-000'];
		validZipCodes.forEach((item) => {
			const result = Utils.ZipCodeIsValid(item);
			expect(result).toBeTruthy();
		});
	});
	it('ZipCode (CEP) invalid', () => {
		const invalidZipCodes = ['', '85-950-000', '85955-00', '85955-0001'];
		invalidZipCodes.forEach((item) => {
			const result = Utils.ZipCodeIsValid(item);
			expect(result).not.toBeTruthy();
		});
	});
});
