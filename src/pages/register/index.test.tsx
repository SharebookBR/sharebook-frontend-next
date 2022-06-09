import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import RegisterPage from './index.page';
import { TestMuiTextField } from '@sharebook-tests';
import { TestMuiButton } from '../../tests/TestMuiButton';

describe('RegisterPage (fields/buttons requireds)', () => {
	beforeEach(() => {
		act(() => {
			render(<RegisterPage />);
		});
	});
	it('Contains button to register', () => {
		TestMuiButton({ dataTestId: 'button-register', disabled: true });
	});
	it('Contains input to name', () => {
		TestMuiTextField({ dataTestId: 'input-name', required: true, type: 'text' });
	});
	it('Contains input to email', () => {
		TestMuiTextField({ dataTestId: 'input-email', required: true, type: 'email' });
	});
	it('Contains input to phone', () => {
		TestMuiTextField({ dataTestId: 'input-phone', required: true, type: 'text' });
	});
	it('Contains input to street', () => {
		TestMuiTextField({ dataTestId: 'input-street', required: true, type: 'text' });
	});
	it('Contains input to city', () => {
		expect(screen.getByTestId('input-city')).toBeInTheDocument();
		TestMuiTextField({ dataTestId: 'input-city', required: true, type: 'text' });
	});
	it('Contains input to password', () => {
		TestMuiTextField({ dataTestId: 'input-password', required: true, type: 'password' });
	});
	it('Contains input to confirmPassword', () => {
		TestMuiTextField({ dataTestId: 'input-confirmPassword', required: true, type: 'password' });
	});
	it('Contains input to birthDate', () => {
		expect(screen.getByTestId('input-birthDate')).toBeInTheDocument();
	});
	it('Contains input to postalCode', () => {
		TestMuiTextField({ dataTestId: 'input-postalCode', required: true, type: 'text' });
	});
	it('Contains input to number', () => {
		TestMuiTextField({ dataTestId: 'input-number', required: true, type: 'text' });
	});
	it('Contains input to neighborhood', () => {
		TestMuiTextField({ dataTestId: 'input-neighborhood', required: true, type: 'text' });
	});
	it('Contains input to state', () => {
		TestMuiTextField({ dataTestId: 'input-state', required: true, type: 'text' });
	});
	it('Contains input to acceptTermOfUse', () => {
		expect(screen.getByTestId('input-acceptTermOfUse')).toBeInTheDocument();
	});
});
