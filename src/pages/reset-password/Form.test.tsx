import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen, fireEvent } from '@testing-library/react';
import ResetPasswordPage from './index.page';
import { GetInputFromMuiTextFieldByTestId, TestMuiTextField } from '@sharebook-tests';
import { TestMuiButton } from '../../tests/TestMuiButton';

const buttonResetPassword_TestId = 'button-resetpassword';
const inputEmail_TestId = 'input-email';

describe('ResetPasswordPage (fields/buttons requireds)', () => {
	beforeEach(() => {
		act(() => {
			render(<ResetPasswordPage />);
		});
	});
	it('Contains button to Reset Password', () => {
		TestMuiButton({ dataTestId: buttonResetPassword_TestId, disabled: true });
	});
	it('Contains input of e-mail', () => {
		TestMuiTextField({ dataTestId: inputEmail_TestId, required: true, type: 'email' });
	});
	it('Contains link to register', () => {
		const textEl = screen.getByTestId('text-link-to-register') as HTMLSpanElement;
		expect(textEl).toBeInTheDocument();
		const anchorEl = textEl.firstElementChild as HTMLAnchorElement;
		expect(anchorEl).toBeInTheDocument();
		expect(anchorEl.href.endsWith('/register')).toBeTruthy();
	});
	it('Form is works (Button + TextField)', () => {
		const email = 'henrique_holtz@hotmail.com';
		const buttonEl = screen.getByTestId(buttonResetPassword_TestId) as HTMLButtonElement;
		expect(buttonEl).toBeDisabled();
		const inputEmailEl = GetInputFromMuiTextFieldByTestId({ dataTestId: inputEmail_TestId });
		fireEvent.change(inputEmailEl, { target: { value: email } });
		expect(inputEmailEl.value).toBe(email);
		expect(buttonEl).not.toBeDisabled();
	});
});
