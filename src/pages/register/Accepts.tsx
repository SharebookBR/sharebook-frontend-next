import React from 'react';
import { Checkbox, FormControlLabel, FormGroup, Typography, Link as LinkMui } from '@mui/material';

import styles from './styles.module.scss';
import LabelCheck from './LabelCheck';

interface IAcceptsProps {
	onChangeCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
	allowSendingEmail: boolean;
	acceptTermOfUse: boolean;
}

export default function Accepts({ acceptTermOfUse, allowSendingEmail, onChangeCheck }: IAcceptsProps) {
	return (
		<>
			<FormGroup className={styles.acceptLabels}>
				<FormControlLabel
					sx={{ mt: 4 }}
					control={<Checkbox name="allowSendingEmail" defaultChecked onChange={onChangeCheck} value={allowSendingEmail} />}
					label={<LabelCheck label="Aceito receber e-mails e newsletter da Sharebook" />}
				/>
				<FormControlLabel
					sx={{ mt: 4 }}
					data-testid="input-acceptTermOfUse"
					control={<Checkbox name="acceptTermOfUse" onChange={onChangeCheck} value={acceptTermOfUse} />}
					label={
						<LabelCheck
							label={
								<Typography>
									Eu concordo com os{' '}
									<LinkMui href="/terms-of-use" target="_blank">
										Termos de uso
									</LinkMui>{' '}
									da Sharebook
								</Typography>
							}
						/>
					}
				/>
			</FormGroup>
		</>
	);
}
