//https://stackoverflow.com/questions/70002471/mui-v5-extending-typography-variant-in-typescript-creates-error-no-overload-m
import * as createPallete from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
	interface TypographyVariants {
		bodyXLargeBold: React.CSSProperties;
		bodyLargeBold: React.CSSProperties;
		bodyMediumBold: React.CSSProperties;
		bodySmallBold: React.CSSProperties;
		bodyXLarge: React.CSSProperties;
		bodyLarge: React.CSSProperties;
		bodyMedium: React.CSSProperties;
		bodySmall: React.CSSProperties;
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		bodyXLargeBold: React.CSSProperties;
		bodyLargeBold: React.CSSProperties;
		bodyMediumBold: React.CSSProperties;
		bodySmallBold: React.CSSProperties;
		bodyXLarge: React.CSSProperties;
		bodyLarge: React.CSSProperties;
		bodyMedium: React.CSSProperties;
		bodySmall: React.CSSProperties;
	}
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		/* Disable some default variants */
		body1: false;
		body2: false;
		caption: false;
		subTitle1: false;
		subTitle2: false;

		/* Enable new custom variants */
		bodyXLargeBold: true;
		bodyLargeBold: true;
		bodyMediumBold: true;
		bodySmallBold: true;
		bodyXLarge: true;
		bodyLarge: true;
		bodyMedium: true;
		bodySmall: true;
	}
}
