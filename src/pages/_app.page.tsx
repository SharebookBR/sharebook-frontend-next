import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@sharebook-themes';
import { DefaultLayout } from '@sharebook-layouts';
import '../styles/globalStyles.scss';
import createEmotionCache from './createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) {
	return (
		<>
			<Head>
				{/* https://nextjs.org/docs/messages/no-document-viewport-meta */}
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" key="viewport-meta" />
			</Head>
			<CacheProvider value={emotionCache}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<DefaultLayout>
						<Component {...pageProps} />
					</DefaultLayout>
				</ThemeProvider>
			</CacheProvider>
		</>
	);
}

export default MyApp;
