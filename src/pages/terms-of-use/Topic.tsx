import { Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface ITopicProps {
	title: string;
	children: ReactNode;
}

export default function Topic({ title, children }: ITopicProps) {
	return (
		<>
			<Typography variant="h5" component="h2" mt={2} mb={1}>
				{title}
			</Typography>
			{children}
		</>
	);
}
