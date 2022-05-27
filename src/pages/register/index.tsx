import React, { useState, useCallback } from 'react';
import type { NextPage } from 'next';
import { Button, Grid, TextField, Typography } from '@mui/material';

import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { IValues, IErrors } from './types';
import { initialValues, initialErrors } from './defaultValues';
import Utils from '@sharebook-utils';

const Register: NextPage = () => {
	const [values, setValues] = useState<IValues>(initialValues);
	const [errors, setErrors] = useState<IErrors>(initialErrors);

	const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = Utils.GetNameAndValueFromHTMLInputElementEvent(e);
		if (name && value)
			setValues((currentValues) => {
				return { ...currentValues, [name]: value };
			});
	}, []);

	const validatePassword = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = Utils.GetNameAndValueFromHTMLInputElementEvent(e);
			if (!Utils.PasswordIsValid(value)) {
				setErrors((currentErrors) => {
					return { ...currentErrors, hasErrors: true, [name]: 'Senha inválida!' };
				});
			} else if (value.length > 0) {
				setErrors((currentErrors) => {
					// TODO: não colocar fixo hasErrors: false pois pode existir outros erros no formulário.
					return { ...currentErrors, hasErrors: false, [name]: '' };
				});
			}
		},
		[setErrors]
	);

	return (
		<Grid container className={styles.container}>
			<Grid item xs={2}>
				<Image src="/register.png" width={192} height={552} alt="Crie sua conta na Sharebook" />
			</Grid>
			<Grid item xs={10} className={styles.right}>
				<Typography>Seja bem vindo.</Typography>
				<Typography variant="h1" className={styles.title}>
					Crie sua conta na Sharebook
				</Typography>

				<Grid container className={styles.containerForm}>
					<Grid item xs={12} md={6} className={styles.leftForm}>
						<TextField
							className={styles.input}
							name="name"
							fullWidth
							label="Nome completo"
							value={values.name}
							placeholder="Digite seu nome completo"
							required
							onChange={onChange}
						/>
						<TextField
							className={styles.input}
							name="emailOrPhone"
							fullWidth
							label="E-mail ou número de celular"
							value={values.emailOrPhone}
							placeholder="E-mail ou número de celular"
							required
							onChange={onChange}
						/>
						<TextField
							className={styles.input}
							name="address"
							fullWidth
							label="Endereço"
							value={values.address}
							placeholder="Digite seu endereço"
							required
							onChange={onChange}
						/>
						<TextField
							className={styles.input}
							name="complement"
							fullWidth
							label="Complemento"
							value={values.complement}
							placeholder="Digite o complemento do endereço"
							onChange={onChange}
						/>
						<TextField
							className={styles.input}
							name="city"
							fullWidth
							label="Cidade"
							value={values.city}
							placeholder="Digite sua cidade"
							required
							onChange={onChange}
						/>
						<TextField
							className={styles.input}
							name="password"
							fullWidth
							label="Senha"
							value={values.password}
							type="password"
							placeholder="********"
							required
							helperText={errors.password}
							error={Boolean(errors.password)}
							onBlur={(e) => validatePassword(e as React.ChangeEvent<HTMLInputElement>)}
							onChange={onChange}
						/>
						<TextField
							className={styles.input}
							name="confirmPassword"
							fullWidth
							label="Confirme sua senha"
							value={values.confirmPassword}
							type="password"
							placeholder="********"
							required
							helperText={errors.confirmPassword}
							error={Boolean(errors.confirmPassword)}
							onBlur={(e) => validatePassword(e as React.ChangeEvent<HTMLInputElement>)}
							onChange={onChange}
						/>
					</Grid>

					<Grid item xs={12} md={6} className={styles.rightForm}>
						<TextField
							className={styles.input}
							name="birthDate"
							fullWidth
							label="Data de nascimento"
							value={values.birthDate}
							placeholder="01/01/2000"
							required
							onChange={onChange}
						/>
						<TextField
							className={styles.input}
							name="zipCode"
							fullWidth
							label="CEP"
							value={values.zipCode}
							placeholder="00000-000"
							required
							onChange={onChange}
						/>
						<TextField
							className={styles.input}
							name="number"
							fullWidth
							label="Número"
							value={values.number}
							placeholder="Número do seu endereço"
							required
							onChange={onChange}
						/>
						<TextField
							className={styles.input}
							name="neighborhood"
							fullWidth
							label="Bairro"
							value={values.neighborhood}
							placeholder="Nome do seu bairro"
							required
							onChange={onChange}
						/>
						<Button
							className={styles.registerButton}
							fullWidth
							disabled={errors.hasErrors}
							variant="contained"
							onClick={() => console.log('Cadastrar: ', JSON.stringify(values))}
						>
							Cadastrar
						</Button>

						<Typography className={styles.login}>
							Já tem uma conta?
							<Link href="/login" passHref>
								Faça Login
							</Link>
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Register;
