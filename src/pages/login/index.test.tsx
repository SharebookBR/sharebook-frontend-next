import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import LoginPage from './index.page';
import axiosMock from 'axios';
import { TestMuiTextField } from '@sharebook-tests';

const loginErrorMessage = 'Login e/ou senha inválidos! Verifique seus dados e tente novamente.';

//using "src/axios/__mocks__/axios.ts"
describe('LoginPage ', () => {
	beforeEach(() => {
		act(() => {
			render(<LoginPage />);
		});
	});
	it('TestField Email', () => {
		TestMuiTextField({ required: true, dataTestId: 'input-email', type: 'text' });
	});
	it('TestField Password', () => {
		TestMuiTextField({ required: true, dataTestId: 'input-password', type: 'password' });
	});
	it('fields and button are working together', async () => {
		const textFieldEmailEl = screen.getByTestId('input-email') as HTMLDivElement;
		// 1. Email -> Should exists HTMLDivElement by testId: "input-email" with 2 children
		expect(textFieldEmailEl).toBeInTheDocument();
		expect(textFieldEmailEl.childElementCount).toBe(2);

		// 2. Password -> Should exists HTMLDivElement by testId: "input-password"
		const textFieldPasswordEl = screen.getByTestId('input-password') as HTMLDivElement;
		expect(textFieldPasswordEl).toBeInTheDocument();
		expect(textFieldPasswordEl.childElementCount).toBe(2);

		// 3. Login -> Should exists HTMLButtonElement by testId: "button-login" and it`s disabled
		const buttonLoginEl = screen.getByTestId('button-login') as HTMLButtonElement;
		expect(buttonLoginEl).toBeInTheDocument();
		expect(buttonLoginEl).toBeDisabled();

		// #region 1. Email
		{
			const divEmailEl = textFieldEmailEl?.lastElementChild as HTMLDivElement;
			// 1.1 Should be HTMLDivElement, exists 2 children, first is div
			expect(divEmailEl).toBeInTheDocument();
			expect(divEmailEl.childElementCount).toBe(2);

			const inputEmailEl = divEmailEl?.firstElementChild as HTMLInputElement;
			// 1.2 Should be HTMLInputElement type = "text"
			expect(inputEmailEl).toBeInTheDocument();
			expect(inputEmailEl.required).toBeTruthy();
			expect(inputEmailEl.childElementCount).toBe(0);
			expect(inputEmailEl.type).toBe('text');

			const email = 'henrique_holtz@hotmail.com';
			// 1.3 Should change
			fireEvent.change(inputEmailEl, { target: { value: email } });
			expect(inputEmailEl.value).toBe(email);
			expect(buttonLoginEl).toBeDisabled(); // should be disabled still
		}
		// #endregion

		// #region 2. Password
		{
			const divPasswordEl = textFieldPasswordEl?.lastElementChild as HTMLDivElement;
			// 2.1 Should be HTMLDivElement, exists 2 children, first is div
			expect(divPasswordEl).toBeInTheDocument();
			expect(divPasswordEl.childElementCount).toBe(2);

			const inputPasswordEl = divPasswordEl?.firstElementChild as HTMLInputElement;
			// 2.2 Should be HTMLInputElement type = "password"
			expect(inputPasswordEl).toBeInTheDocument();
			expect(inputPasswordEl.childElementCount).toBe(0);
			expect(inputPasswordEl.required).toBeTruthy();
			expect(inputPasswordEl.type).toBe('password');

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
