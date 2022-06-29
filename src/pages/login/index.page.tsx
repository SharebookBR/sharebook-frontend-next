import React, { useCallback, useState } from 'react';
import { Button, Grid, TextField, Typography, useMediaQuery, useTheme, styled } from '@mui/material';
import type { NextPage } from 'next';
import Image from 'next/image';
import Utils from '@sharebook-utils';

import styles from './styles.module.scss';
import { useAuthContext } from '@sharebook-hooks';
import Link from 'next/link';

/*
	TODO
		- Add Recaptcha
		- Save email in localStorage (with checkbox "Save my email")
		- login without reload ("window.location.href = window.location.origin;")
*/

const GridWrapper = styled(Grid)(() => ({
	padding: '6.25rem 10rem',
	display: 'flex'
}));

const Login: NextPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [loginError, setLoginError] = useState(false);
	const { authContext, login } = useAuthContext();

	const theme = useTheme();
	const lgMatch = useMediaQuery(theme.breakpoints.down('lg'));

	if (authContext.authenticated) window.location.href = window.location.origin; //go to home

	const validateEmail = useCallback(() => {
		if (email.length > 0 && !Utils.EmailIsValid(email)) setEmailError('Email inválido');
		else setEmailError('');
	}, [email]);

	const validatePassword = useCallback(() => {
		if (password.length > 0 && !Utils.PasswordIsValid(password))
			setPasswordError('Senha inválida! Sua senha deve conter entre 6 e 32 caracteres.');
		else setPasswordError('');
	}, [password]);

	const handleEmail = useCallback(
		(value: string) => {
			setEmail(value);
			if (emailError.length > 0) validateEmail();
		},
		[emailError, validateEmail]
	);

	const handlePassword = useCallback(
		(value: string) => {
			setPassword(value);
			if (passwordError.length > 0) validatePassword();
		},
		[passwordError, validatePassword]
	);

	const handleLogin = useCallback(async () => {
		const loginIsOk = await login({ email, password });
		if (!loginIsOk) setLoginError(true);
	}, [email, password, login]);

	return (
		<>
			<GridWrapper
				sx={{
					justifyContent: 'center'
				}}
				container
			>
				{!lgMatch && (
					<Grid item xs={7} className={styles.left}>
						<Typography variant="h4">Doe e receba livros na Sharebook!</Typography>
						<Typography variant="bodyXLarge" paragraph className={styles.subTitle}>
							Interaja com leitores de todo o Brasil e descubra seu novo livro favorito!
						</Typography>
						<Link href="/register" passHref>
							<Button variant="contained" className={styles.button}>
								Criar minha conta grátis!
							</Button>
						</Link>
						<Image src="/login.png" width={610} height={404} alt="Doe e receba livros na Sharebook!" />
					</Grid>
				)}

				<Grid item xs={5} className={styles.right}>
					<Typography>Boas vindas</Typography>
					<Typography variant="h4" className={styles.title}>
						Faça login na Sharebook
					</Typography>
					<TextField
						data-testid="input-email"
						fullWidth
						autoFocus
						value={email}
						className={styles.input}
						type="email"
						label="E-mail"
						helperText={emailError}
						required
						error={Boolean(emailError)}
						placeholder="E-mail"
						onBlur={validateEmail}
						onChange={(e) => handleEmail(e.currentTarget.value)}
					/>
					<TextField
						data-testid="input-password"
						type="password"
						value={password}
						fullWidth
						className={styles.input}
						label="Senha"
						helperText={passwordError}
						placeholder="Senha"
						required
						error={Boolean(passwordError)}
						onBlur={validatePassword}
						onChange={(e) => handlePassword(e.currentTarget.value)}
					/>
					<Button
						data-testid="button-login"
						disabled={Boolean(emailError || passwordError || email.length === 0 || password.length === 0)}
						onClick={handleLogin}
						fullWidth
						variant="contained"
						className={styles.loginButton}
					>
						Entrar
					</Button>
					{loginError && (
						<Typography className={styles.loginError} color="error">
							Login e/ou senha inválidos! Verifique seus dados e tente novamente.
						</Typography>
					)}
					<div className={styles.registerWrapper}>
						<Typography variant="bodySmall">
							Ainda não tem conta?
							<Link href="/register" passHref>
								Crie uma grátis
							</Link>
							.
						</Typography>
					</div>
				</Grid>
			</GridWrapper>
		</>
	);
};

export default Login;
