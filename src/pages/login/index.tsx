import React, { useCallback, useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Image from 'next/image';
import axiosClient from '@sharebook-axios';
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

const Login: NextPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const { authContext, login } = useAuthContext();
	if (authContext.authenticated) window.location.href = window.location.origin; //go to home

	const validateEmail = useCallback(() => {
		if (email.length > 0 && !Utils.ValidateEmail(email)) setEmailError('Email inválido');
		else setEmailError('');
	}, [email]);

	const validatePassword = useCallback(() => {
		if (password.length > 0 && Utils.ValidatePassword(password))
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
		const result = await axiosClient.post('Account/Login', { email, password });
		login(result.data?.value);
	}, [email, password, login]);

	return (
		<>
			<Grid container className={styles.wrapper}>
				<Grid item xs={8} className={styles.left}>
					<Typography variant="h1" className={styles.title}>
						Doe e receba livros na Sharebook!
					</Typography>
					<Typography variant="h3" className={styles.subTitle}>
						Interaja com leitores de todo o Brasil e descubra seu novo livro favorito!
					</Typography>
					<Button variant="contained" className={styles.button}>
						Criar minha conta grátis!
					</Button>
					<Image src="/login.png" width={645} height={427} alt="Doe e receba livros na Sharebook!" />
				</Grid>

				<Grid item xs={4} className={styles.right}>
					<Typography>Boas vindas</Typography>
					<Typography variant="h1" className={styles.title}>
						Faça login na Sharebook
					</Typography>
					<TextField
						fullWidth
						autoFocus
						value={email}
						className={styles.input}
						label="E-mail"
						helperText={emailError}
						required
						error={Boolean(emailError)}
						placeholder="E-mail"
						onBlur={validateEmail}
						onChange={(e) => handleEmail(e.currentTarget.value)}
					/>
					<TextField
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
						disabled={Boolean(emailError || passwordError || email.length === 0 || password.length === 0)}
						onClick={handleLogin}
						fullWidth
						variant="contained"
						className={styles.login}
					>
						Entrar
					</Button>
					<Typography className={styles.register}>
						Ainda não tem conta?
						<Link href="/register" passHref>
							Crie uma grátis
						</Link>
						.
					</Typography>
				</Grid>
			</Grid>
		</>
	);
};

export default Login;
