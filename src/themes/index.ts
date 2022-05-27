import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		allVariants: {
			fontFamily: 'Poppins, sans-serif',
			color: '#2D3748'
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
			main: '#16ADE2',
			contrastText: '#FFF'
		},
		secondary: {
			main: '#0E2C4F',
			contrastText: '#FFF'
		},
		error: {
			main: '#FF0000'
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
			defaultProps: {
				disableRipple: true
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none'
				}
			}
		}
	}
});

export default theme;
