import React, { useState, useCallback, useEffect } from 'react';
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
import { MaskedInputDate, MaskedInputPhone, MaskedInputPostalCode } from '@sharebook-components';
import { EnumDateTypes } from '@sharebook-enums';

//TODO:
// Add loading

const Register: NextPage = () => {
	const [values, setValues] = useState<IValues>(initialValues);
	const [hasFormErrors, setHasFormErrors] = useState(false);
	const [errors, setErrors] = useState<IErrors>(initialErrors);
	const [registerErrors, setRegisterErrors] = useState<string[]>([]);

	useEffect(() => {
		let newHasFormErrors = false;
		Object.values(errors).map((error) => {
			if (Boolean(error)) newHasFormErrors = true;
		});
		if (hasFormErrors !== newHasFormErrors) setHasFormErrors(newHasFormErrors);
	}, [errors]);

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
					return { ...currentErrors, [name]: 'Senha inválida!' };
				});
			} else if (value.length > 0) {
				setErrors((currentErrors) => {
					return { ...currentErrors, [name]: '' };
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
						return { ...currentErrors, [name]: 'Telefone inválido!' };
					});
				} else if (value.length > 0) {
					setErrors((currentErrors) => {
						return { ...currentErrors, [name]: '' };
					});
				}
			}
		},
		[setErrors]
	);

	const validateDate = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			// TODO Validate birthDate (don't can is future date)
			const { name, value } = Utils.GetNameAndValueFromHTMLInputElementEvent(e);
			if (value.length > 0) {
				if (!Utils.DateIsValid(value, EnumDateTypes.ddMMyyyy)) {
					setErrors((currentErrors) => {
						return { ...currentErrors, [name]: 'Data inválida! formato deve ser: dd/MM/yyyy' };
					});
				} else if (value.length > 0) {
					setErrors((currentErrors) => {
						return { ...currentErrors, [name]: '' };
					});
				}
			}
		},
		[setErrors]
	);

	const register = () => {
		console.log('Register', values);
		sharebookAxiosClient
			.post('Account/Register', { country: 'Brasil', ...values })
			.then((res: any) => {
				if (registerErrors?.length > 0) setRegisterErrors([]);
			})
			.catch((err: any) => {
				setRegisterErrors(err?.response?.data?.messages || ['Erro ao cadastrar usuário']);
				console.error('err', err);
			});
	};

	const validateEmail = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = Utils.GetNameAndValueFromHTMLInputElementEvent(e);
			if (value.length > 0) {
				if (!Utils.EmailIsValid(value)) {
					setErrors((currentErrors) => {
						return { ...currentErrors, [name]: 'Email inválido!' };
					});
				} else if (value.length > 0) {
					setErrors((currentErrors) => {
						return { ...currentErrors, [name]: '' };
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
					return { ...currentErrors, [name]: 'CEP inválido!' };
				});
			else {
				try {
					const result: IViaCepResponse = await axios.get(`${configs.viaCepUrl}ws/${value}/json`);
					const { uf: state, localidade: city, complemento: complement, logradouro: street, bairro: neighborhood } = result.data;
					setValues((currentValues) => {
						return { ...currentValues, state, city, complement, street, neighborhood };
					});
					setErrors((currentErrors) => {
						return { ...currentErrors, [name]: '' };
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
							data-testid="input-name"
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
							data-testid="input-email"
							className={styles.input}
							type="email"
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
							data-testid="input-phone"
							name="phone"
							fullWidth
							InputProps={{
								inputProps: {
									showMask: false
								},
								inputComponent: MaskedInputPhone
							}}
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
							data-testid="input-street"
							className={styles.input}
							name="street"
							fullWidth
							label="Endereço"
							value={values.street}
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
							data-testid="input-city"
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
							data-testid="input-password"
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
							data-testid="input-confirmPassword"
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
							data-testid="input-birthDate"
							className={styles.input}
							name="birthDate"
							InputProps={{
								inputProps: {
									showMask: false
								},
								inputComponent: MaskedInputDate
							}}
							fullWidth
							label="Data de nascimento"
							value={values.birthDate}
							placeholder="01/01/2000"
							required
							onChange={onChange}
							onBlur={(e) => validateDate(e as React.ChangeEvent<HTMLInputElement>)}
							error={Boolean(errors.birthDate)}
							helperText={errors.birthDate}
						/>

						<TextField
							data-testid="input-postalCode"
							className={styles.input}
							name="postalCode"
							fullWidth
							label="CEP"
							InputProps={{
								inputProps: {
									showMask: false
								},
								inputComponent: MaskedInputPostalCode
							}}
							value={values.postalCode}
							placeholder="00000-000"
							error={Boolean(errors.postalCode)}
							helperText={errors.postalCode}
							required
							onChange={onChange}
							onBlur={(e) => validatePostalCode(e as React.ChangeEvent<HTMLInputElement>)}
						/>

						<TextField
							data-testid="input-number"
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
							data-testid="input-neighborhood"
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
							data-testid="input-state"
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
								data-testid="input-acceptTermOfUse"
								control={<Checkbox name="acceptTermOfUse" onChange={onChangeCheck} value={values.acceptTermOfUse} />}
								label={<LabelCheck label="Eu concordo com os Termos de uso" />}
							/>
						</FormGroup>

						<Button
							data-testid="button-register"
							className={styles.registerButton}
							fullWidth
							disabled={hasFormErrors || !values.acceptTermOfUse}
							variant="contained"
							onClick={() => register()}
						>
							Cadastrar
						</Button>

						{registerErrors.length > 0 && (
							<Typography style={{ marginTop: '15px', textAlign: 'center' }} color="error">
								{registerErrors.join('. ')}
							</Typography>
						)}

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
