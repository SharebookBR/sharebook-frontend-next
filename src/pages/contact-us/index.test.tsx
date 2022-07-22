import React from 'react';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import ContactUsPage from './index.page';
import { TestMuiButton, TestMuiTextField } from '@sharebook-tests';

// TODO: Add tests to recaptcha

//using "src/axios/__mocks__/axios.ts"
describe('ContactUsPage ', () => {
	beforeEach(() => {
		act(() => {
			render(<ContactUsPage />);
		});
	});
	it('TextFields and button rendered', () => {
		TestMuiTextField({ required: true, dataTestId: 'input-name', type: 'text' });
		TestMuiTextField({ required: true, dataTestId: 'input-email', type: 'email' });
		TestMuiTextField({ required: true, dataTestId: 'input-phone', type: 'text' });
		TestMuiTextField({ required: true, dataTestId: 'input-message', type: 'text', multiline: true });
		TestMuiButton({ dataTestId: 'loadingbutton-send', disabled: true });
	});
	// it('GoogleRecaptcha rendered', async () => {
	// GoogleRecaptcha don't be in the DOM
	// 	const iframeRecaptchaEl = await waitFor(() => screen.getByTitle('reCAPTCHA') as HTMLIFrameElement);
	// 	expect(iframeRecaptchaEl).toBeInTheDocument();

	// 	const getById = queryByAttribute.bind(null, 'id');
	// 	getById('g-recaptcha-response')
	// });
});
