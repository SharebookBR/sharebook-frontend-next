import { Box, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import sharebookAxiosClient from '@sharebook-axios';
import SendIcon from '@mui/icons-material/Send';
import Utils from '@sharebook-utils';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';

interface IResponseRequest {
	messages: string[];
	success: boolean;
	successMessage: string;
}
const defaultRequestResponseError: IResponseRequest = {
	messages: ['Não foi possível redefinir sua senha, verifique seu e-mail ou tente novamente mais tarde.'],
	success: false,
	successMessage: ''
};
const defaultRequestResponseSuccess: IResponseRequest = {
	messages: [],
	success: true,
	successMessage: 'Redefinição de senha enviada por E-mail.'
};

export default function Form() {
	const [email, setEmail] = useState<string>('');
	const [emailError, setEmailError] = useState<string>('');
	const [loadingRequest, setLoadingRequest] = useState(false);
	const [requestResponse, setRequestResponse] = useState<IResponseRequest | null>(null);

	const onChangeEmail = (newValue: string) => {
		setEmail(newValue);
		if (emailError) validateEmail(newValue);
	};

	const sendRequestResetPassword = () => {
		if (Utils.EmailIsValid(email)) {
			setLoadingRequest(true);
			sharebookAxiosClient
				.post('Account/ForgotMyPassword', { email })
				.then((resp: any) => {
					const newRequestResponse: IResponseRequest | null = (resp.data as IResponseRequest) || null;
					console.log('then', resp, newRequestResponse);
					if (newRequestResponse) setRequestResponse(newRequestResponse);
					else setRequestResponse(defaultRequestResponseSuccess);
				})
				.catch((err: Error | any) => {
					if (sharebookAxiosClient.isAxiosError(err)) {
						const resp: IResponseRequest | null = err?.response?.data || null;
						if (resp) setRequestResponse(resp);
						else setRequestResponse(defaultRequestResponseError);
					} else setRequestResponse(defaultRequestResponseError);
				})
				.finally(() => setLoadingRequest(false));
		} else console.error('Email inválido!');
	};

	const validateEmail = useCallback(
		(currentEmail: string) => {
			if (currentEmail.length > 0) {
				const emailIsValid = Utils.EmailIsValid(currentEmail);
				if (emailIsValid && emailError) setEmailError('');
				else if (!emailIsValid && !emailError) setEmailError('E-mail inválido');
			}
		},
		[emailError]
	);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				width: {
					xs: '100%',
					sm: '300px',
					md: '350px'
				},
				maxWidth: '350px'
			}}
			ml={1}
		>
			<Typography variant="h4">Não se preocupe!</Typography>
			<Typography variant="bodyMedium" maxWidth={370} mt={1} mb={2}>
				Enviaremos um e-mail com instruções de como redefinir sua senha.
			</Typography>
			<TextField
				type="email"
				fullWidth
				placeholder="example@email.com"
				label="E-mail cadastrado"
				value={email}
				error={Boolean(emailError)}
				helperText={emailError}
				disabled={Boolean(requestResponse?.success)}
				onChange={(e) => onChangeEmail(e.target.value)}
				onBlur={(e) => validateEmail(e.currentTarget.value)}
			/>
			{!loadingRequest &&
				requestResponse?.messages?.map((error: string) => (
					<Typography color="error" sx={{ mt: 1, ml: 2 }} key={error}>
						{error}
					</Typography>
				))}
			<LoadingButton
				fullWidth
				variant="contained"
				style={{ marginTop: '16px' }}
				loading={loadingRequest}
				loadingPosition="start"
				startIcon={<SendIcon />}
				disabled={Boolean(!Utils.EmailIsValid(email) || emailError || requestResponse?.success)}
				onClick={sendRequestResetPassword}
			>
				Enviar
			</LoadingButton>
			{requestResponse?.success && (
				<Typography mt={1} color="success.main">
					{requestResponse?.successMessage || defaultRequestResponseSuccess.successMessage}
				</Typography>
			)}
			<Box mt={2}>
				<Typography variant="bodySmall" sx={{ '& a': { pl: 1 } }}>
					Ainda não tem conta?
					<Link href="/register" passHref>
						Crie uma grátis
					</Link>
					.
				</Typography>
			</Box>
		</Box>
	);
}
