//https://stackoverflow.com/questions/70002471/mui-v5-extending-typography-variant-in-typescript-creates-error-no-overload-m
import * as createPallete from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
	interface TypographyVariants {
		body3: React.CSSProperties;
		body4: React.CSSProperties;
		subtitle3: React.CSSProperties;
		subtitle4: React.CSSProperties;
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		body3?: React.CSSProperties;
		body4?: React.CSSProperties;
		subtitle3?: React.CSSProperties;
		subtitle4?: React.CSSProperties;
	}
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		body3: true;
		body4: true;
		subtitle3: true;
		subtitle4: true;
	}
}
