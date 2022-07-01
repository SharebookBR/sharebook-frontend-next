import { Typography } from '@mui/material';
import React from 'react';

interface ITopicProps {
	title: string;
	children: string;
}

export default function Topic({ title, children }: ITopicProps) {
	return (
		<>
			<Typography variant="h5" component="h2" mt={2} mb={1}>
				{title}
			</Typography>
			<Typography textAlign="justify" mt={1}>
				{children}
			</Typography>
		</>
	);
}
