import { Box, Button, TextField, Typography } from '@mui/material';
import { SharebookDialog } from '@sharebook-components';
import Utils from '@sharebook-utils';
import React, { useCallback, useState } from 'react';

import styles from './styles.module.scss';

interface IModalParentEmailProps {
	open: boolean;
	value?: string;
	onClose: () => void;
	setParentEmail: (email: string) => boolean;
	validateEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
	error?: string;
}

//TODO: Add imagem

export function ModalParentEmail({ open, value, error, onClose, setParentEmail, validateEmail }: IModalParentEmailProps) {
	const [parentEmail, _setParentEmail] = useState(value || '');
	const [emailIsValid, setEmailIsValid] = useState(false);

	const onChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const { value: currentValue } = Utils.GetNameAndValueFromHTMLInputElementEvent(e);
			const newEmailsIsValid = Utils.EmailIsValid(currentValue);
			setEmailIsValid(newEmailsIsValid);
			if (error && currentValue.length > 5) validateEmail(e);
			_setParentEmail(currentValue);
		},
		[validateEmail, _setParentEmail, setEmailIsValid, error]
	);

	const onConfirmParentEmail = useCallback(() => {
		const result = setParentEmail(parentEmail);
		if (result) onClose();
	}, [onClose, setParentEmail, parentEmail]);

	return (
		<SharebookDialog open={open} onClose={onClose} title={null} className={styles.modalParentEmail}>
			<Typography variant="bodyLargeBold">Ops!</Typography>
			<Typography>Identificamos que você é menor de idade.</Typography>
			<Typography>Por favor nos informe o email dos seus pais ou responsável, para autorização.</Typography>
			<Box sx={{ maxWidth: 342 }}>
				<TextField
					data-testid="input-parentEmail"
					className={styles.input}
					type="email"
					name="parentEmail"
					fullWidth
					label="E-mail"
					value={parentEmail}
					placeholder="exemplo@email.com"
					required
					onChange={onChange}
					onBlur={(e) => validateEmail(e as React.ChangeEvent<HTMLInputElement>)}
					error={Boolean(error)}
					helperText={error}
				/>
				<Button
					data-testid="button-add-parentEmail"
					fullWidth
					variant="contained"
					disabled={Boolean(error) || !emailIsValid}
					onClick={onConfirmParentEmail}
				>
					Continuar
				</Button>
			</Box>
		</SharebookDialog>
	);
}
