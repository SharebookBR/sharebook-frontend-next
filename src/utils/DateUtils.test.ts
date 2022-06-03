import { EnumDateTypes } from '@sharebook-enums';
import Utils from '@sharebook-utils';

describe('Testing DateUtils ("dd/MM/yyyy")', () => {
	it('DateUtils valid dates', () => {
		const validPostalCodes = ['01/01/2000', '31/10/2050', '06/02/2022', '28/02/2022'];
		validPostalCodes.forEach((item) => {
			const result = Utils.DateIsValid(item, EnumDateTypes.ddMMyyyy);
			expect(result).toBeTruthy();
		});
	});
	it('DateUtils invalid dates', () => {
		const invalidPostalCodes = ['', '00/01/2000', '31/01/1899', '31/01/22', '29/02/2022', '15/15/2050'];
		invalidPostalCodes.forEach((item) => {
			const result = Utils.DateIsValid(item, EnumDateTypes.ddMMyyyy);
			expect(result).not.toBeTruthy();
		});
	});
});
