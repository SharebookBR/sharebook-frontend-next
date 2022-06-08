import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, render, screen } from '@testing-library/react';
import LoginPage from './index.page';

describe('LoginPage ', () => {
	beforeEach(() => {
		act(() => {
			render(<LoginPage />);
		});
	});
	it('fields and button are working', () => {
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

		// #region Email
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

		// #region Password
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

			// #region Password ivalid
			{
				const ivalidPassword = '123';
				// 2.3 Should change
				fireEvent.change(inputPasswordEl, { target: { value: ivalidPassword } });
				fireEvent.blur(inputPasswordEl);
				expect(inputPasswordEl.value).toBe(ivalidPassword);
				expect(buttonLoginEl).toBeDisabled(); // should be disabled because has error
			}
			// #endregion
		}
		// #endregion
	});
});
