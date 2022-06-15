import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import { ModalParentEmail } from './ModalParentEmail';
import { TestMuiTextField } from '@sharebook-tests';
import { TestMuiButton } from '../../tests/TestMuiButton';

describe('RegisterPage -> ModalParentEmail', () => {
	beforeEach(() => {
		act(() => {
			render(<ModalParentEmail open onClose={() => {}} setParentEmail={() => true} validateEmail={() => {}} error="" value="" />);
		});
	});
	it('Default Render', () => {
		TestMuiButton({ dataTestId: 'button-add-parentEmail', disabled: true });
		TestMuiTextField({ dataTestId: 'input-parentEmail', required: true, type: 'email' });
	});
});
