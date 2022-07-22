import { Alert, Box, Container, Snackbar, TextField, Typography } from '@mui/material';
import Utils from '@sharebook-utils';
import Image from 'next/image';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { IValuesContactUs } from './types';
import ReCAPTCHA from 'react-google-recaptcha';
import sharebookAxiosClient from '@sharebook-axios';
import { LoadingButton } from '@mui/lab';
import { MaskedInputPhone } from '@sharebook-components';
import configs from '@sharebook-configs';

export default function ContactUs() {
	const [values, setValues] = useState<IValuesContactUs>({ name: '', email: '', phone: '', message: '', recaptchaReactive: '' });
	const [errors, setErrors] = useState<IValuesContactUs>({ name: '', email: '', phone: '', message: '', recaptchaReactive: '' });
	const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
	const [successSubmit, setSuccessSubmit] = useState<boolean | null>(null);
	const [formIsValid, setFormIsValid] = useState<boolean>(false);
	const captchaRef = useRef(null);

	const messageIsValid = useCallback((message: string, updateErrors: boolean = true): boolean => {
		const isValid = Boolean(message.length >= 20 && message.length <= 512);
		if (updateErrors)
			setErrors((currentErrors) => ({ ...currentErrors, message: isValid ? '' : 'Mensagem deve conter entre 3 e 200 caracteres.' }));
		return isValid;
	}, []);

	const nameIsValid = useCallback((name: string, updateErrors: boolean = true): boolean => {
		const isValid = Boolean(name.length >= 3 && name.length <= 200);
		if (updateErrors) setErrors((currentErrors) => ({ ...currentErrors, name: isValid ? '' : 'Nome deve conter entre 3 e 200 caracteres.' }));
		return isValid;
	}, []);

	const emailIsValid = useCallback((email: string, updateErrors: boolean = true): boolean => {
		const isValid = Utils.EmailIsValid(email);
		if (updateErrors) setErrors((currentErrors) => ({ ...currentErrors, email: isValid ? '' : 'Email inválido!' }));
		return isValid;
	}, []);

	const phoneIsValid = useCallback((phone: string, updateErrors: boolean = true): boolean => {
		const isValid = Utils.PhoneIsValid(phone);
		if (updateErrors) setErrors((currentErrors) => ({ ...currentErrors, phone: isValid ? '' : 'Telefone inválido! Ex: (11) 9 9988-7766' }));
		return isValid;
	}, []);

	const recaptchaValueIsValid = useCallback((value: string): boolean => {
		const isValid = Boolean(value.length > 0);
		setErrors((currentErrors) => ({ ...currentErrors, recaptchaReactive: isValid ? '' : 'Recaptcha inválido!' }));
		return isValid;
	}, []);

	const onChangeRecaptcha = (value: string | null): void => {
		setValues((currentValues) => ({ ...currentValues, recaptchaReactive: value || '' }));
	};

	const clearRecaptcha = () => {
		setValues((currentValues) => ({ ...currentValues, recaptchaReactive: '' }));
	};

	const onSubmit = async () => {
		setLoadingSubmit(true);
		sharebookAxiosClient
			.post('ContactUs/SendMessage', values)
			.then((resp: any) => {
				setSuccessSubmit(resp?.data?.success || false);
			})
			.catch(() => {
				setSuccessSubmit(false);
			})
			.finally(() => setLoadingSubmit(false));
	};

	useEffect(() => {
		if (
			nameIsValid(values.name, false) &&
			emailIsValid(values.email, false) &&
			phoneIsValid(values.phone, false) &&
			messageIsValid(values.message, false) &&
			recaptchaValueIsValid(values.recaptchaReactive)
		)
			setFormIsValid(true);
		else setFormIsValid(false);
	}, [values, nameIsValid, messageIsValid, recaptchaValueIsValid, phoneIsValid, emailIsValid]);

	return (
		<Container sx={{ maxWidth: '1110px' }}>
			<Typography
				textAlign="center"
				variant="h1"
				sx={{
					fontSize: {
						xs: 28,
						sm: 38
					}
				}}
			>
				Fale Conosco
			</Typography>
			<Box
				sx={{
					minWidth: {
						xs: '100%',
						md: '400px'
					},
					display: 'flex',
					justifyContent: 'space-between',
					padding: {
						xs: '0',
						sm: '0 24px',
						md: '0 48px',
						lg: '0 96px'
					}
				}}
			>
				<Box
					sx={{
						display: {
							xs: 'none',
							sm: 'initial'
						}
					}}
				>
					<Image src="/contact-us.jpg" alt="Fale conosco" height={485} width={365} />
				</Box>
				<Box
					sx={{
						width: {
							xs: '100%',
							sm: '60%',
							md: '50%'
						},
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-start',
						alignItems: 'center',
						margin: {
							xs: '32px 0',
							sm: '40px 0',
							md: '48px 0',
							lg: '56px 0'
						}
					}}
				>
					<TextField
						required
						sx={{ mt: 3, width: '310px' }}
						label="Nome"
						name="name"
						variant="outlined"
						value={values.name}
						error={Boolean(errors.name)}
						helperText={errors.name}
						onChange={(e) => setValues((currentValues) => ({ ...currentValues, name: e.target.value }))}
						onBlur={(e) => nameIsValid(e.target.value)}
					/>

					<TextField
						required
						sx={{ mt: 3, width: '310px' }}
						label="E-mail"
						variant="outlined"
						value={values.email}
						error={Boolean(errors.email)}
						helperText={errors.email}
						name="email"
						onBlur={(e) => emailIsValid(e.target.value)}
						onChange={(e) => setValues((currentValues) => ({ ...currentValues, email: e.target.value }))}
					/>

					<TextField
						required
						sx={{ mt: 3, width: '310px' }}
						label="DDD + Telefone"
						variant="outlined"
						value={values.phone}
						error={Boolean(errors.phone)}
						InputProps={{
							inputProps: {
								showMask: false
							},
							inputComponent: MaskedInputPhone
						}}
						helperText={errors.phone}
						name="phone"
						onBlur={(e) => phoneIsValid(e.target.value)}
						onChange={(e) => setValues((currentValues) => ({ ...currentValues, phone: e.target.value }))}
					/>

					<TextField
						required
						sx={{ mt: 3, mb: 3, width: '310px' }}
						label="Mensagem"
						variant="outlined"
						name="message"
						multiline
						minRows={3}
						value={values.message}
						error={Boolean(errors.message)}
						helperText={errors.message}
						onChange={(e) => setValues((currentValues) => ({ ...currentValues, message: e.target.value }))}
						onBlur={(e) => messageIsValid(e.target.value)}
					/>

					<ReCAPTCHA
						sitekey={configs.siteKeyGoogleRecaptcha}
						ref={captchaRef}
						onChange={onChangeRecaptcha}
						onExpired={clearRecaptcha}
						onErrored={clearRecaptcha}
					/>

					<LoadingButton
						sx={{ mt: 3, minWidth: '90px' }}
						loading={loadingSubmit}
						variant="contained"
						disabled={!formIsValid || Boolean(successSubmit)}
						onClick={onSubmit}
					>
						{loadingSubmit ? '' : 'Enviar'}
					</LoadingButton>
					<Snackbar
						anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
						open={successSubmit !== null}
						autoHideDuration={6000}
						onClose={() => setSuccessSubmit(null)}
						message="Note archived"
					>
						<Alert variant="filled" severity={successSubmit ? 'success' : 'error'} closeText="Fechar">
							{successSubmit
								? 'Mensagem enviada com sucesso!'
								: 'Não foi possível enviar os dados da mensagem! Tente novamente mais tarde.'}
						</Alert>
					</Snackbar>
				</Box>
			</Box>
		</Container>
	);
}
