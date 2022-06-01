import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import { SharebookFooter } from '@sharebook-components';

describe('SharebookFooter -> Vercel Banner (required for vercel sponsor)', () => {
	it('renders a vercel banner (required for vercel sponsor)', () => {
		act(() => {
			render(<SharebookFooter />);
		});
		expect(screen.getByTestId('vercel-banner')).toBeInTheDocument();
		expect(screen.getByTestId('vercel-banner-link')).toBeInTheDocument();
	});
});
