import { Box } from '@mui/material';
import React from 'react';

export default function Video() {
	return (
		<Box style={{ display: 'flex', justifyContent: 'center' }} pt={2} pb={1}>
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/8J_qqvQD4VU"
				title="Política de privacidade e segurança - Sharebook"
				allowFullScreen
			/>
		</Box>
	);
}
