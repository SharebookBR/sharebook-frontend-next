import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import LoginPage from './index.page';
import axiosMock from 'axios';
import { GetInputFromMuiTextFieldByTestId, TestMuiButton, TestMuiTextField } from '@sharebook-tests';

const loginErrorMessage = 'Login e/ou senha inválidos! Verifique seus dados e tente novamente.';

//using "src/axios/__mocks__/axios.ts"
describe('LoginPage ', () => {
	beforeEach(() => {
		act(() => {
			render(<LoginPage />);
		});
	});
	it('TestField Email rendered', () => {
		TestMuiTextField({ required: true, dataTestId: 'input-email', type: 'text' });
	});
	it('TestField Password rendered', () => {
		TestMuiTextField({ required: true, dataTestId: 'input-password', type: 'password' });
	});
	it('Button Login rendered', () => {
		TestMuiButton({ disabled: true, dataTestId: 'button-login' });
	});
	it('fields and button are working together', async () => {
		// 3. Login -> Should exists HTMLButtonElement by testId: "button-login" and it`s disabled
		const buttonLoginEl = screen.getByTestId('button-login') as HTMLButtonElement;

		// #region 1. Email
		{
			const email = 'henrique_holtz@hotmail.com';
			// 1.3 Should change
			const inputEmailEl = GetInputFromMuiTextFieldByTestId({ dataTestId: 'input-email' });
			fireEvent.change(inputEmailEl, { target: { value: email } });
			expect(inputEmailEl.value).toBe(email);
			expect(buttonLoginEl).toBeDisabled(); // should be disabled still
		}
		// #endregion

		// #region 2. Password
		{
			const inputPasswordEl = GetInputFromMuiTextFieldByTestId({ dataTestId: 'input-password' });

			const password = '123456';
			// 2.3 Should change
			fireEvent.change(inputPasswordEl, { target: { value: password } });
			expect(inputPasswordEl.value).toBe(password);
			expect(buttonLoginEl).not.toBeDisabled(); // shouldn't be disabled

			const changePasswordWithBlur = (password: string): void => {
				fireEvent.change(inputPasswordEl, { target: { value: password } });
				fireEvent.blur(inputPasswordEl);
			};

			// #region Password ivalid
			{
				const invalidPassword = '123';
				// 2.3 Should change
				changePasswordWithBlur(invalidPassword);
				expect(inputPasswordEl.value).toBe(invalidPassword);
				expect(buttonLoginEl).toBeDisabled(); // should be disabled because has error
			}
			// #endregion

			changePasswordWithBlur(password); //remove error of input-password
		}
		// #endregion

		// #region 3. Login Error (500+)
		{
			axiosMock.create().post.mockRejectedValueOnce();
			fireEvent.click(buttonLoginEl);
			const errorEl = await waitFor(() => screen.getByText(loginErrorMessage));
			expect(errorEl).toBeInTheDocument();
		}

		// #endregion
	});
});
