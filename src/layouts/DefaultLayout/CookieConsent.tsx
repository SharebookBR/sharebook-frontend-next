import { Button, Container, Link, Box, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';

export const keyConsent: string = 'cookieconsent_status';

export default function CookieConsent() {
	const [open, setOpen] = useState<boolean>(true);

	const closeConsent = useCallback(() => {
		setOpen(false);
	}, []);

	const acceptConsent = useCallback(() => {
		localStorage.setItem(keyConsent, 'true');
		closeConsent();
	}, [closeConsent]);

	if (!open) return null;

	return (
		<Box style={{ backgroundColor: '#f0f0f0', position: 'fixed', left: 0, bottom: 0, zIndex: 1, width: '100%', height: '160px' }}>
			<Container
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'space-around',
					height: '100%',
					maxWidth: '895px'
				}}
			>
				<Typography variant="bodyMedium" pt={2}>
					Esse site salva cookies para uma melhor experiência de usuário. Saiba mais lendo nossa
					<Link ml={1} target="_blank" href="/politica-privacidade">
						Política de privacidade.
					</Link>
				</Typography>

				<Box style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', paddingBottom: '25px' }}>
					<Button onClick={closeConsent}>Fechar</Button>
					<Button variant="contained" onClick={acceptConsent} style={{ margin: '0 16px 0 32px' }}>
						Aceitar
					</Button>
				</Box>
			</Container>
		</Box>
	);
}
