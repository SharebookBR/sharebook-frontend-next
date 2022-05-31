import react, { ReactNode } from 'react';

import { ThemeProvider } from '@mui/material';
import theme from '../themes';
import Head from 'next/head';

interface IThemeProviderWithFontProps {
	children: ReactNode;
}

export default function ThemeProviderWithFont({ children }: IThemeProviderWithFontProps) {
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" /*crossOrigin*/ />
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
			</Head>
			{children}
		</ThemeProvider>
	);
}
