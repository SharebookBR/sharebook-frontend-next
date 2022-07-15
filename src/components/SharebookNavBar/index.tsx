import { AppBar, Button, List, ListItem, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import SharebookNavBarItem from './SharebookNavBarItem';
import SharebookNavBarItemText from './SharebookNavBarItemText';
import styles from './styles.module.scss';
import { useAuthContext } from '@sharebook-hooks';
import Image from 'next/image';
import SharebookNavBarMobile from './SharebookNavBarMobile';
import SharebookNavBarLogo from './SharebookNavBarLogo';

export function SharebookNavBar() {
	const { authContext, logout } = useAuthContext();

	const theme = useTheme();
	const mdMatch: boolean = useMediaQuery(theme.breakpoints.down('md'));

	const MenuItems = () => {
		return (
			<>
				<SharebookNavBarItemText text="Início" path="/" />
				<SharebookNavBarItem path="/livros/doar">
					<Button
						className={styles.donateButton}
						variant="contained"
						sx={{ minWidth: '150px', '& img': { pl: { xs: '4px !important', lg: '8px !important' } } }}
					>
						Doar um livro
						<Image src="/mini-book.png" width={35} height={18} alt="Doar um livro" />
					</Button>
				</SharebookNavBarItem>
				<SharebookNavBarItemText text="Apoie o projeto" path="/apoie-projeto" />
				<SharebookNavBarItemText text="Quem somos" path="/quem-somos" />
				<SharebookNavBarItemText text="Fale conosco" path="/contact-us" />
				{authContext.authenticated ? (
					<>
						{authContext.profile === 'User' && <SharebookNavBarItemText text="Meu Painel" path="/panel" />}
						<ListItem>
							<Typography variant="bodyMediumBold">{authContext.name}</Typography>
						</ListItem>
						<Button onClick={() => logout()}>Sair</Button>
					</>
				) : (
					<SharebookNavBarItemText text="Login" path="/login" />
				)}
			</>
		);
	};

	if (mdMatch)
		return (
			<SharebookNavBarMobile>
				<MenuItems />
			</SharebookNavBarMobile>
		);

	return (
		<AppBar
			sx={{
				padding: {
					md: '15px 6vw',
					lg: '15px 10vw'
				}
			}}
			position="sticky"
			color="default"
		>
			<Toolbar sx={{ lg: '0' }}>
				<SharebookNavBarLogo />
				<List sx={{ ml: '8px' }} className={styles.list}>
					<MenuItems />
				</List>
			</Toolbar>
		</AppBar>
	);
}
