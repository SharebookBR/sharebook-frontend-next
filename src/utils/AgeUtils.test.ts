import Utils from '@sharebook-utils';

describe('Testing AgeUtils', () => {
	it('AgeIsValid -> true', () => {
		const validPasswords = [8, 15, 90];
		validPasswords.forEach((item) => {
			const result = Utils.AgeIsValid(item);
			expect(result).toBeTruthy();
		});
	});
	it('AgeIsValid -> false', () => {
		const invalidPasswords = [-15, 5, 150];
		invalidPasswords.forEach((item) => {
			const result = Utils.AgeIsValid(item);
			expect(result).not.toBeTruthy();
		});
	});
	it('AgeIsBiggerThan18 -> true', () => {
		const invalidPasswords = [18, 50];
		invalidPasswords.forEach((item) => {
			const result = Utils.AgeIsBiggerThan18(item);
			expect(result).toBeTruthy();
		});
	});
	it('AgeIsBiggerThan18 -> false', () => {
		const invalidPasswords = [-5, 8, 17, 110];
		invalidPasswords.forEach((item) => {
			const result = Utils.AgeIsBiggerThan18(item);
			expect(result).not.toBeTruthy();
		});
	});
});
