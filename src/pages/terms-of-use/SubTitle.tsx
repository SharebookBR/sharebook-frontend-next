import { Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface ISubTitleProps {
	children: ReactNode;
}

export default function SubTitle({ children }: ISubTitleProps) {
	return (
		<Typography variant="bodyMediumBold" component="h5" mt={1} mb={1}>
			{children}
		</Typography>
	);
}
