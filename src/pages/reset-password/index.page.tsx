import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useWindowSize } from 'usehooks-ts';
import Form from './Form';

export default function ResetPassword() {
	const { width } = useWindowSize();
	return (
		<Container style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', maxWidth: '920px' }}>
			<Box
				sx={{
					textAlign: {
						xs: 'center',
						sm: 'left'
					}
				}}
			>
				<Typography variant="h4" color="primary" mt={4} mb={4}>
					Esqueceu sua senha ?
				</Typography>
			</Box>
			<Box
				height="399px"
				sx={{
					display: 'flex',
					justifyContent: {
						xs: 'center',
						sm: 'space-between'
					}
				}}
			>
				{width >= 600 && <Image src="/reset-password.png" width={445} height={502} alt="Esqueceu sua senha ?" />}
				<Form />
			</Box>
		</Container>
	);
}
