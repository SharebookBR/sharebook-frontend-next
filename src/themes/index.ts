import { createTheme } from '@mui/material/styles';

/* customTypography.d.ts */
/*  customCollors.d.ts */

const theme = createTheme({
	typography: {
		/* default values */
		fontWeightRegular: 400,
		fontWeightBold: 700,
		fontSize: 14,
		fontFamily: ['Roboto', 'sans-serif'].join(','),
		allVariants: {
			fontFamily: 'Roboto',
			color: '#282828'
		},
		body1: {
			// body1 is disabled, but, this value interfer in helperText for example
			fontSize: 14
		},

		/* Disabled variants */
		body2: undefined,
		caption: undefined,
		subtitle1: undefined,
		subtitle2: undefined,

		/* New custom variants */
		bodyXLarge: {
			fontSize: 24,
			fontWeight: 400,
			lineHeight: '33.6px'
		},
		bodyLarge: {
			fontSize: 20,
			fontWeight: 400,
			lineHeight: '28px',
			letterSpacing: '0.2px'
		},
		bodyMedium: {
			fontSize: 16,
			fontWeight: 400,
			lineHeight: '22.4px'
		},
		bodySmall: {
			fontSize: 12,
			fontWeight: 400,
			lineHeight: '14.06px'
		},
		button: {
			textTransform: 'none',
			fontWeight: 700,
			fontSize: '1.25rem'
		},
		bodyXLargeBold: {
			fontSize: 24,
			fontWeight: 700,
			lineHeight: '33.6px'
		},
		bodyLargeBold: {
			fontSize: 20,
			fontWeight: 700,
			lineHeight: '28px'
		},
		bodyMediumBold: {
			fontSize: 16,
			fontWeight: 700,
			lineHeight: '22px'
		},
		bodySmallBold: {
			fontSize: 12,
			fontWeight: 700,
			lineHeight: '14px'
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
