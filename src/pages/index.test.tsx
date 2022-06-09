import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, getByTestId, render, screen, waitFor } from '@testing-library/react';
import HomePage from './index.page';
import axiosMock from 'axios';

const resultMock = [
	{
		id: '5a2bd58c-8a6d-4fc0-924f-e1121056dc18',
		title: 'Programando o Android',
		author: 'Zigurds',
		status: 'Available',
		creationDate: '2021-12-10T11:55:18.3339174',
		chooseDate: '2022-05-10T00:00:00',
		freightOption: 'State',
		categoryId: 'b6bf305c-6ec5-44ae-95fa-4003a0e3bd0e',
		category: 'Informática',
		imageSlug: 'programando-o-android.jpg',
		imageUrl: 'http://dev.sharebook.com.br/Images/Books/programando-o-android.jpg',
		city: 'São Paulo',
		state: 'SP',
		synopsis: null,
		slug: 'programando-o-android',
		type: 'Printed',
		eBookDownloadLink: null,
		eBookPdfFile: null
	}
];

// jest.mock('axios', () => {
// 	const mAxiosInstance = { get: jest.fn() };
// 	return {
// 		create: jest.fn(() => mAxiosInstance)
// 	};
// });

describe('Home Page ', () => {
	beforeAll(() => {
		act(() => {
			render(<HomePage />);
		});
	});

	// afterAll(() => {
	// 	jest.resetAllMocks();
	// });
	it('getAvailableBooks', async () => {
		//use "src/axios/__mocks__/axios.ts"
		axiosMock.create().get.mockResolvedValueOnce({ data: resultMock });
		const buttonEl = screen.getByTestId('getAvailableBooks') as HTMLButtonElement;
		expect(buttonEl).toBeInTheDocument();

		fireEvent.click(buttonEl);
		const textEl = await waitFor(() => screen.getByText('Programando o Android - Informática - (Zigurds)'));
		expect(textEl).toBeInTheDocument();
	});
});
