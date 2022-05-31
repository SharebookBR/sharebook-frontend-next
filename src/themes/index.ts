import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		fontWeightRegular: 400,
		fontWeightBold: 700,
		fontSize: 16,
		fontFamily: ['Roboto', 'sans-serif'].join(','),
		allVariants: {
			fontFamily: 'Roboto',
			color: '#282828'
		},
		body1: {
			/* Body XLarge */
			fontSize: 24,
			fontWeight: 400,
			lineHeight: '33.6px'
		},
		body2: {
			/* Body Large */
			fontSize: 20,
			fontWeight: 400,
			lineHeight: '28px',
			letterSpacing: '0.2px'
		},
		body3: {
			/* Body Medium */
			fontSize: 16,
			fontWeight: 400,
			lineHeight: '22.4px'
		},
		body4: {
			/* Body Small */
			fontSize: 12,
			fontWeight: 400,
			lineHeight: '14.06px'
		},
		button: {
			textTransform: 'none',
			fontWeight: 700,
			fontSize: '1.25rem'
		},
		subtitle1: {
			fontSize: 24,
			fontWeight: 700,
			lineHeight: '33.6px'
		},
		subtitle2: {
			fontSize: 20,
			fontWeight: 700,
			lineHeight: '28px'
		},
		h1: {
			fontSize: 89,
			fontWeight: 700
		},
		h2: {
			fontSize: 67,
			fontWeight: 700
		},
		h3: {
			fontSize: 50,
			fontWeight: 700
		},
		h4: {
			fontSize: 38,
			fontWeight: 700,
			lineHeight: '45px'
		},
		h5: {
			fontSize: 24,
			fontWeight: 700
		},
		h6: {
			fontSize: 20,
			fontWeight: 700
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
					height: '48px'
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
		},
		MuiInputBase: {
			styleOverrides: {
				root: {
					fontSize: 16
				}
			}
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					fontSize: 16
				}
			}
		}
	}
});

export default theme;
