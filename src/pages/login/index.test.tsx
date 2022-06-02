import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import LoginPage from './index.page';

describe('LoginPage (fields/buttons requireds)', () => {
	beforeEach(() => {
		act(() => {
			render(<LoginPage />);
		});
	});
	it('Contains button to login', () => {
		expect(screen.getByTestId('button-login')).toBeInTheDocument();
	});
	it('Contains input to email', () => {
		expect(screen.getByTestId('input-email')).toBeInTheDocument();
	});
	it('Contains input to password', () => {
		expect(screen.getByTestId('input-password')).toBeInTheDocument();
	});
});
