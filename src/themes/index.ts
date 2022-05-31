import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		allVariants: {
			fontFamily: 'Roboto Regular, sans-serif',
			color: '#282828'
		},
		/* customTypography.d.ts */
		navbar: {
			fontStyle: 'normal',
			fontWeight: 600,
			lineHeight: '1.25rem',
			fontSize: '0.82rem'
		}
	},
	palette: {
		primary: {
			main: '#00AFE5',
			contrastText: '#FFF'
		},
		secondary: {
			main: '#0E2C50',
			contrastText: '#FFF'
		},
		error: {
			main: '#E82020'
		},
		success: {
			main: '#2FCA51'
		},
		/*  customCollors.d.ts */
		tertiary: {
			main: '#007AFF',
			contrastText: '#FFF'
		}
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: '#FCFCFC'
				}
			}
		},
		MuiButtonBase: {
			styleOverrides: {
				root: {
					fontWeight: '700',
					fontSize: '1.25rem'
				}
			},
			defaultProps: {
				disableRipple: true
			},
			variants: [
				{
					props: { disabled: true },
					style: {
						color: '#FFF !important',
						backgroundColor: '#B7BEC0 !important'
					}
				}
			]
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					fontWeight: '700',
					fontSize: '1.25rem'
				}
			},
			variants: [
				{
					props: { disabled: true },
					style: {
						color: '#FFF',
						backgroundColor: '#B7BEC0'
					}
				}
			]
		}
	}
});

export default theme;
