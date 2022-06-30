import { Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface IParagraphProps {
	children: ReactNode;
	mt?: number;
}

export default function Paragraph({ children, mt = 0 }: IParagraphProps) {
	return (
		<Typography textAlign="justify" mt={mt}>
			{children}
		</Typography>
	);
}
