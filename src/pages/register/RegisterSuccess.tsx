import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export function RegisterSuccess() {
	return (
		<Container
			sx={{
				height: 'auto',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: {
					xs: '25px',
					sm: '30px',
					md: '60px',
					lg: '90px',
					xl: '120px'
				}
			}}
		>
			<Typography variant="bodyLargeBold">Cadastro realizado com sucesso!</Typography>
			<Box sx={{ width: '317px', marginTop: '32px' }}>
				<Image src="/register-sucess.png" width={317} height={317} alt="Registrado com sucesso!" />
				<Link href="/login" passHref>
					<Button variant="contained" sx={{ marginTop: '32px' }} fullWidth>
						Continuar
					</Button>
				</Link>
			</Box>
		</Container>
	);
}
