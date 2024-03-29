import React, { useState, useCallback, useEffect } from 'react';
import type { NextPage } from 'next';
import { Box, Button, Grid, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';

import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { IValues, IErrors, IViaCepResponse } from './types';
import { initialValues, initialErrors } from './defaultValues';
import Utils from '@sharebook-utils';
import configs from '@sharebook-configs';
import axios from 'axios';
import sharebookAxiosClient from '@sharebook-axios';
import { MaskedInputPhone, MaskedInputPostalCode } from '@sharebook-components';
import { ModalParentEmail } from './ModalParentEmail';
import { RegisterSuccess } from './RegisterSuccess';
import Accepts from './Accepts';

const Register: NextPage = () => {
	const [loadingRegister, setLoadingRegister] = useState(false);
	const [values, setValues] = useState<IValues>(initialValues);
	const [hasFormErrors, setHasFormErrors] = useState(false);
	const [errors, setErrors] = useState<IErrors>(initialErrors);
	const [registerErrors, setRegisterErrors] = useState<string[]>([]);
	const [registerSuccess, setRegisterSuccess] = useState(false);
	const [showModalParentEmail, setShowModalParentEmail] = useState(false);

	const theme = useTheme();
	const mdMatch: boolean = useMediaQuery(theme.breakpoints.down('md'));

	const ageIsEqualsOrBiggerThan12 = useCallback((): boolean => Utils.AgeIsEqualsOrBiggerThanX(12, values.age || 0), [values.age]);
	const showTextParentEmail = Boolean(Boolean(values.parentEmail) || (Boolean(values.age && values.age > 7) && !ageIsEqualsOrBiggerThan12()));

	useEffect(() => {
		let newHasFormErrors = false;
		Object.values(errors).forEach((error) => {
			if (Boolean(error)) newHasFormErrors = true;
		});
		if (hasFormErrors !== newHasFormErrors) setHasFormErrors(newHasFormErrors);
	}, [errors, hasFormErrors]);

	const onChangeCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = Utils.GetNameAndCheckedFromHTMLInputElementEvent(e);
		if (name)
			setValues((currentValues) => {
				return { ...currentValues, [name]: checked };
			});
	}, []);

	const validatePasswords = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			let newCurrentErrorMessage = '';
			const { name, value: currentValue } = Utils.GetNameAndValueFromHTMLInputElementEvent(e);
			const currentIsPassword = Boolean(name === 'password');
			const anotherName = currentIsPassword ? 'confirmPassword' : 'password';

			if (!Utils.PasswordIsValid(currentValue)) {
				newCurrentErrorMessage = 'Senha inválida! Deve conter entre 6 e 32 caracteres';
			} else if (currentValue.length > 0) {
				if (values[anotherName].length > 0 && values[anotherName] !== currentValue) newCurrentErrorMessage = 'As senhas devem ser iguais!';
			}

			setErrors((currentErrors) => {
				if (currentIsPassword) return { ...currentErrors, password: newCurrentErrorMessage, confirmPassword: '' };
				else return { ...currentErrors, confirmPassword: newCurrentErrorMessage, password: '' };
			});
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[setErrors, values.password, values.confirmPassword]
	);

	const validatePhone = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = Utils.GetNameAndValueFromHTMLInputElementEvent(e);
			if (value.length > 0) {
				let newErrorMessage = '';
				if (!Utils.PhoneIsValid(value)) newErrorMessage = 'Telefone inválido!';

				setErrors((currentErrors) => {
					return { ...currentErrors, [name]: newErrorMessage };
				});
			}
		},
		[setErrors]
	);

	const validateAge = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = Utils.GetNameAndValueFromHTMLInputElementEvent(e);
			if (value.length > 0) {
				let newErrorMessage = '';
				try {
					const valueToNumber = parseInt(value);
					if (!Utils.AgeIsValid(valueToNumber)) newErrorMessage = 'Idade inválida! Tente entre 8 e 100.';
				} catch {
					newErrorMessage = 'Idade inválida! Tente entre 8 e 100.';
				}

				setErrors((currentErrors) => {
					return { ...currentErrors, [name]: newErrorMessage };
				});
			}
		},
		[setErrors]
	);

	const register = () => {
		console.log('Register', values);
		if (ageIsEqualsOrBiggerThan12() || Utils.EmailIsValid(values.parentEmail || '')) {
			setLoadingRegister(true);
			sharebookAxiosClient
				.post('Account/Register', { country: 'Brasil', ...values })
				.then(() => {
					setRegisterSuccess(true);
				})
				.catch((err: any) => {
					setRegisterErrors(err?.response?.data?.messages || ['Erro ao cadastrar usuário']);
					console.error('err', err);
				})
				.finally(() => {
					setLoadingRegister(false);
				});
		} else {
			setShowModalParentEmail(true);
		}
	};

	const validateEmail = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = Utils.GetNameAndValueFromHTMLInputElementEvent(e);
			if (value.length > 0) {
				let newErrorMessage = '';
				if (!Utils.EmailIsValid(value)) newErrorMessage = 'Email inválido!';

				setErrors((currentErrors) => {
					return { ...currentErrors, [name]: newErrorMessage };
				});
			}
		},
		[setErrors]
	);

	const getInfosFromPostalCode = useCallback(
		async (postalCode: string) => {
			const result: IViaCepResponse = await axios.get(`${configs.viaCepUrl}ws/${postalCode}/json`);
			const { uf: state, localidade: city, complemento: complement, logradouro: street, bairro: neighborhood } = result.data;
			setValues((currentValues) => {
				return { ...currentValues, state, city, complement, street, neighborhood };
			});
		},
		[setValues]
	);

	const validatePostalCode = useCallback(
		async (e: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = Utils.GetNameAndValueFromHTMLInputElementEvent(e);
			if (value.length > 0) {
				let newErrorMessage = '';
				if (!Utils.PostalCodeIsValid(value)) newErrorMessage = 'CEP inválido!';
				else await getInfosFromPostalCode(value).catch(() => console.error('Erro ao buscar informações do CEP'));
				setErrors((currentErrors) => {
					return { ...currentErrors, [name]: newErrorMessage };
				});
			}
		},
		[getInfosFromPostalCode, setErrors]
	);

	const setParentEmail = useCallback(
		(newEmail: string): boolean => {
			let errorMessage = '';
			if (Utils.EmailIsValid(newEmail)) {
				if (newEmail?.toLowerCase() === values.email.toLowerCase())
					errorMessage = 'Email dos pais/responsável deve ser diferente do seu email.';
				else
					setValues((currentValues) => {
						return { ...currentValues, parentEmail: newEmail };
					});
			} else errorMessage = 'Email inválido!';
			if (Boolean(errorMessage))
				setErrors((currentErrors) => {
					return { ...currentErrors, parentEmail: errorMessage };
				});
			return Boolean(!errorMessage);
		},
		[setErrors, setValues, values]
	);

	const handleCloseModalParentEmail = useCallback((): void => {
		setShowModalParentEmail(false);
	}, [setShowModalParentEmail]);

	const onChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = Utils.GetNameAndValueFromHTMLInputElementEvent(e);
			if (name) {
				setValues((currentValues) => {
					return { ...currentValues, [name]: value };
				});

				if (value.length > 0 && Object.keys(errors).find((key) => key === name)) {
					switch (name) {
						case 'email':
							if (errors.email) validateEmail(e);
							break;
						case 'postalCode':
							if (errors.postalCode) validatePostalCode(e);
							break;
						case 'phone':
							if (errors.phone) validatePhone(e);
							break;
						case 'age':
							if (errors.age) validateAge(e);
							break;
					}
				}
			}
		},
		[setValues, errors, validateEmail, validatePostalCode, validatePhone, validateAge]
	);

	if (registerSuccess) return <RegisterSuccess />;

	return (
		<Grid
			container
			sx={{
				padding: {
					xs: '2rem 9vw',
					md: '5rem 9vw',
					lg: '5rem 11vw'
				}
			}}
			className={styles.container}
		>
			<Grid item sx={{ display: { sm: 'none', xs: 'none', md: 'initial' } }} md={2} className={styles.left}>
				<Image src="/register.png" width={192} height={552} alt="Crie sua conta na Sharebook" />
			</Grid>

			<Grid
				item
				sx={{ paddingLeft: { md: '5vw', lg: '8vw', xl: '13.1vw' }, textAlign: { xs: 'center', sm: 'center', md: 'start' } }}
				md={10}
				className={styles.right}
			>
				<Typography>Seja bem vindo.</Typography>
				<Typography variant="h1" className={styles.title}>
					Crie sua conta na Sharebook
				</Typography>

				<Grid container className={styles.containerForm} sx={{ justifyContent: { xs: 'center', sm: 'center', md: 'space-between' } }}>
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
							data-testid="input-age"
							className={styles.input}
							name="age"
							type="number"
							InputProps={{
								inputProps: {
									max: 100,
									min: 8
								}
							}}
							fullWidth={!showTextParentEmail}
							label="Idade"
							value={values.age || 0}
							placeholder="Digite sua idade"
							required
							onChange={onChange}
							onBlur={(e) => validateAge(e as React.ChangeEvent<HTMLInputElement>)}
							error={Boolean(errors.age)}
							helperText={errors.age}
						/>

						{showTextParentEmail && (
							<Box className={styles.showTextParentEmail}>
								<Typography variant="bodyMedium" onClick={() => setShowModalParentEmail(true)}>
									E-mail do responsável
								</Typography>
							</Box>
						)}

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
							onBlur={(e) => validatePasswords(e as React.ChangeEvent<HTMLInputElement>)}
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
							onBlur={(e) => validatePasswords(e as React.ChangeEvent<HTMLInputElement>)}
							onChange={onChange}
						/>
						{!mdMatch && (
							<Accepts
								onChangeCheck={onChangeCheck}
								acceptTermOfUse={values.acceptTermOfUse}
								allowSendingEmail={values.allowSendingEmail}
							/>
						)}
					</Grid>

					<Grid item xs={12} md={6} className={styles.rightForm}>
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

						{mdMatch && (
							<Accepts
								onChangeCheck={onChangeCheck}
								acceptTermOfUse={values.acceptTermOfUse}
								allowSendingEmail={values.allowSendingEmail}
							/>
						)}

						<Button
							data-testid="button-register"
							className={styles.registerButton}
							fullWidth
							disabled={hasFormErrors || loadingRegister || !values.acceptTermOfUse}
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
			{showModalParentEmail && (
				<ModalParentEmail
					value={values.parentEmail}
					open={showModalParentEmail}
					error={errors.parentEmail}
					onClose={handleCloseModalParentEmail}
					validateEmail={validateEmail}
					setParentEmail={setParentEmail}
				/>
			)}
		</Grid>
	);
};

export default Register;
