import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import RegisterPage from './index.page';

describe('RegisterPage (fields/buttons requireds)', () => {
	beforeEach(() => {
		act(() => {
			render(<RegisterPage />);
		});
	});
	it('Contains button to register', () => {
		expect(screen.getByTestId('button-register')).toBeInTheDocument();
	});
	it('Contains input to name', () => {
		expect(screen.getByTestId('input-name')).toBeInTheDocument();
	});
	it('Contains input to email', () => {
		expect(screen.getByTestId('input-email')).toBeInTheDocument();
	});
	it('Contains input to phone', () => {
		expect(screen.getByTestId('input-phone')).toBeInTheDocument();
	});
	it('Contains input to address', () => {
		expect(screen.getByTestId('input-address')).toBeInTheDocument();
	});
	it('Contains input to city', () => {
		expect(screen.getByTestId('input-city')).toBeInTheDocument();
	});
	it('Contains input to password', () => {
		expect(screen.getByTestId('input-password')).toBeInTheDocument();
	});
	it('Contains input to confirmPassword', () => {
		expect(screen.getByTestId('input-confirmPassword')).toBeInTheDocument();
	});
	it('Contains input to birthDate', () => {
		expect(screen.getByTestId('input-birthDate')).toBeInTheDocument();
	});
	it('Contains input to postalCode', () => {
		expect(screen.getByTestId('input-postalCode')).toBeInTheDocument();
	});
	it('Contains input to number', () => {
		expect(screen.getByTestId('input-number')).toBeInTheDocument();
	});
	it('Contains input to neighborhood', () => {
		expect(screen.getByTestId('input-neighborhood')).toBeInTheDocument();
	});
	it('Contains input to state', () => {
		expect(screen.getByTestId('input-state')).toBeInTheDocument();
	});
	it('Contains input to acceptTermOfUse', () => {
		expect(screen.getByTestId('input-acceptTermOfUse')).toBeInTheDocument();
	});
});
