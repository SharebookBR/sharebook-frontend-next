import { Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface ILabelCheckProps {
	label: string | ReactNode;
}

export default function LabelCheck({ label }: ILabelCheckProps) {
	return (
		<Typography variant="bodyMedium" component="span" style={{ maxWidth: 240 }}>
			{label}
		</Typography>
	);
}
