import React, { useState, useCallback } from 'react';
import type { NextPage } from 'next';
import { Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';

import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { IValues, IErrors, IViaCepResponse } from './types';
import { initialValues, initialErrors } from './defaultValues';
import Utils from '@sharebook-utils';
import configs from '@sharebook-configs';
import axios from 'axios';
import LabelCheck from './LabelCheck';
import sharebookAxiosClient from '@sharebook-axios';

const Register: NextPage = () => {
	const [values, setValues] = useState<IValues>(initialValues);
	const [errors, setErrors] = useState<IErrors>(initialErrors);

	const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = Utils.GetNameAndValueFromHTMLInputElementEvent(e);
		if (name)
			setValues((currentValues) => {
				return { ...currentValues, [name]: value };
			});
	}, []);

	const onChangeCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = Utils.GetNameAndCheckedFromHTMLInputElementEvent(e);
		if (name)
			setValues((currentValues) => {
				return { ...currentValues, [name]: checked };
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
					// TODO: não colocar fixo "hasErrors: false" pois pode existir outros erros no formulário.
					return { ...currentErrors, hasErrors: false, [name]: '' };
				});
			}
		},
		[setErrors]
	);

	const validatePhone = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = Utils.GetNameAndValueFromHTMLInputElementEvent(e);
			if (value.length > 0) {
				if (!Utils.PhoneIsValid(value)) {
					setErrors((currentErrors) => {
						return { ...currentErrors, hasErrors: true, [name]: 'Telefone inválido!' };
					});
				} else if (value.length > 0) {
					setErrors((currentErrors) => {
						// TODO: não colocar fixo "hasErrors: false" pois pode existir outros erros no formulário.
						return { ...currentErrors, hasErrors: false, [name]: '' };
					});
				}
			}
		},
		[setErrors]
	);

	const register = () => {
		console.log('Register', values);
		sharebookAxiosClient
			.post('Account/Register', values)
			.then((res: any) => {
				console.log('res', res);
			})
			.catch((err: any) => {
				console.log('err', err);
			});
	};

	const validateEmail = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			// TODO: Validar Telefone também caso o campo de fato deve permitir ambos (pendente de validação com UX)
			const { name, value } = Utils.GetNameAndValueFromHTMLInputElementEvent(e);
			if (value.length > 0) {
				if (!Utils.EmailIsValid(value)) {
					setErrors((currentErrors) => {
						return { ...currentErrors, hasErrors: true, [name]: 'Email inválido!' };
					});
				} else if (value.length > 0) {
					setErrors((currentErrors) => {
						// TODO: não colocar fixo "hasErrors: false" pois pode existir outros erros no formulário.
						return { ...currentErrors, hasErrors: false, [name]: '' };
					});
				}
			}
		},
		[setErrors]
	);

	const validatePostalCode = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = Utils.GetNameAndValueFromHTMLInputElementEvent(e);
		if (value.length > 0) {
			if (!Utils.PostalCodeIsValid(value))
				setErrors((currentErrors) => {
					return { ...currentErrors, hasErrors: true, [name]: 'CEP inválido!' };
				});
			else {
				try {
					const result: IViaCepResponse = await axios.get(`${configs.viaCepUrl}ws/${value}/json`);
					const { uf: state, localidade: city, complemento: complement, logradouro: address, bairro: neighborhood } = result.data;
					setValues((currentValues) => {
						return { ...currentValues, state, city, complement, address, neighborhood };
					});
					setErrors((currentErrors) => {
						// TODO: não colocar fixo "hasErrors: false" pois pode existir outros erros no formulário.
						return { ...currentErrors, hasErrors: false, [name]: '' };
					});
				} catch {
					console.error('Erro ao buscar informações do CEP');
				}
			}
		}
	}, []);

	return (
		<Grid container className={styles.container}>
			<Grid item xs={2} className={styles.left}>
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
							name="email"
							fullWidth
							label="E-mail"
							value={values.email}
							placeholder="exemplo@email.com"
							required
							onChange={onChange}
							onBlur={(e) => validateEmail(e as React.ChangeEvent<HTMLInputElement>)}
							error={Boolean(errors.email)}
							helperText={errors.email}
						/>
						<TextField
							className={styles.input}
							name="phone"
							fullWidth
							label="DDD + Telefone"
							value={values.phone}
							placeholder="(00) 0 0000-0000"
							required
							onChange={onChange}
							onBlur={(e) => validatePhone(e as React.ChangeEvent<HTMLInputElement>)}
							error={Boolean(errors.phone)}
							helperText={errors.phone}
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
							name="postalCode"
							fullWidth
							label="CEP"
							value={values.postalCode}
							placeholder="00000-000"
							error={Boolean(errors.postalCode)}
							helperText={errors.postalCode}
							required
							onChange={onChange}
							onBlur={(e) => validatePostalCode(e as React.ChangeEvent<HTMLInputElement>)}
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
						<TextField
							className={styles.input}
							name="state"
							fullWidth
							label="UF do estado"
							value={values.state}
							placeholder="UF do seu estado"
							required
							onChange={onChange}
						/>
						<FormGroup className={styles.acceptLabels}>
							<FormControlLabel
								control={
									<Checkbox name="allowSendingEmail" defaultChecked onChange={onChangeCheck} value={values.allowSendingEmail} />
								}
								label={<LabelCheck label="Aceito receber e-mails e newsletter da Sharebook" />}
							/>
							<FormControlLabel
								control={<Checkbox name="acceptTermOfUse" onChange={onChangeCheck} value={values.acceptTermOfUse} />}
								label={<LabelCheck label="Eu concordo com os Termos de uso" />}
							/>
						</FormGroup>
						<Button
							className={styles.registerButton}
							fullWidth
							disabled={errors.hasErrors || !values.acceptTermOfUse}
							variant="contained"
							onClick={() => register()}
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
