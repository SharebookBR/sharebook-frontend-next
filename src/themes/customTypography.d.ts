//https://stackoverflow.com/questions/70002471/mui-v5-extending-typography-variant-in-typescript-creates-error-no-overload-m
import * as createPallete from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    navbar: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    navbar?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    navbar: true;
  }
}
