import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from '@mui/material';
import ThemeProviderWithFont from './ThemeProviderWithFont';

const controlSelect = { control: { type: 'select' } };
const radioSelect = { control: { type: 'radio' } };
const booleanWithRadio = {
	options: [true, false],
	type: 'boolean',
	...radioSelect
};

export default {
	title: '@mui/material (v5)',
	component: TextField,
	argTypes: {
		// https://mui.com/material-ui/api/text-field/
		color: {
			options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
			...controlSelect,
			type: 'string'
		},
		variant: {
			options: ['filled', 'standard', 'outlined'],
			type: 'string',
			...controlSelect
		},
		disabled: booleanWithRadio,
		required: booleanWithRadio,
		size: {
			options: ['small', 'medium'],
			type: 'string',
			...controlSelect
		},
		rows: { type: 'number' }
	},
	args: {
		label: 'Label',
		placeholder: 'Placeholder',
		variant: 'outlined',
		value: 'value'
	}
} as ComponentMeta<typeof TextField>;

// 👇 We create a "template" of how args map to rendering
const Template: ComponentStory<typeof TextField> = (args) => (
	<ThemeProviderWithFont>
		        <TextField {...args}>{`${args?.variant} ${args?.color}`}</TextField>
	</ThemeProviderWithFont>
);

export const MuiTextField = Template.bind({});
