import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ThemeProvider } from '@mui/material';
import ThemeProviderWithFont from './ThemeProviderWithFont';

const controlSelect = { control: { type: 'select' } };
const radioSelect = { control: { type: 'radio' } };

export default {
	title: '@mui/material (v5)',
	component: Button,
	argTypes: {
		// https://mui.com/pt/material-ui/api/button/
		color: {
			options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
			...controlSelect,
			type: 'string'
		},
		variant: {
			options: ['text', 'contained', 'outlined'],
			type: 'string',
			...controlSelect
		},
		disabled: {
			options: [true, false],
			type: 'boolean',
			...radioSelect
		},
		size: {
			options: ['small', 'medium', 'large'],
			type: 'string',
			...controlSelect
		}
	},
	args: {
		color: 'primary',
		variant: 'contained',
		disabled: false,
		size: 'medium',
		text: '@mui v5'
	}
} as ComponentMeta<typeof Button>;

// 👇 We create a "template" of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => (
	<ThemeProviderWithFont>
		        <Button {...args}>{`${args?.variant} ${args?.color}`}</Button>
	</ThemeProviderWithFont>
);

export const MuiButton = Template.bind({});
