import Utils from './index';
// import Utils from '@sharebook-utils';

describe('Testing EmailUtils', () => {
	it('Email valid', () => {
		const emailValid = 'henrique_holtz@hotmail.com';
		const result = Utils.EmailIsValid(emailValid);
		expect(result).toBeTruthy();
	});
});
