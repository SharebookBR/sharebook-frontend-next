import { AppBar, Button, List, ListItem, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { SharebookNavBarItem } from './item';
import styles from './styles.module.scss';
import { useAuthContext } from '@sharebook-hooks';
import Image from 'next/image';

interface ISharebookNavBarItemText {
	text: string;
	path: string;
}

const SharebookNavBarItemText = ({ text, path }: ISharebookNavBarItemText) => {
	return (
		<SharebookNavBarItem path={path}>
			<Typography variant="navbar" color="secondary">
				{text}
			</Typography>
		</SharebookNavBarItem>
	);
};

export function SharebookNavBar() {
	const { authContext, logout } = useAuthContext();

	return (
		<AppBar position="sticky" color="default" className={styles.appBar}>
			<Toolbar>
				<List className={styles.list}>
					<SharebookNavBarItemText text="Início" path="/" />
					<SharebookNavBarItem path="/livros/doar">
						<Button className={styles.donateButton} variant="contained" onClick={() => console.log('x')}>
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
								<Typography>{authContext.name}</Typography>
							</ListItem>
							<Button onClick={() => logout()}>Logout</Button>
						</>
					) : (
						<SharebookNavBarItemText text="Login" path="/login" />
					)}
				</List>
			</Toolbar>
		</AppBar>
	);
}
