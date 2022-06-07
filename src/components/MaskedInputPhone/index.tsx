import { InputBaseComponentProps } from '@mui/material';
import React from 'react';
import MaskedInput from 'react-text-mask';

export const MaskedInputPhone = React.forwardRef<HTMLInputElement, InputBaseComponentProps>((props, ref): JSX.Element => {
	const { inputRef, ...others } = props;
	// ref is without use, but without React.forwardRef() return console.error

	return (
		<MaskedInput
			{...others}
			ref={inputRef}
			mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
			placeholderChar={'\u2000'}
		/>
	);
});
