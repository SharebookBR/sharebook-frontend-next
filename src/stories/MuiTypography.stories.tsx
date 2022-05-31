import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from '@mui/material';
import ThemeProviderWithFont from './ThemeProviderWithFont';

const controlSelect = { control: { type: 'select' } };
const booleanType = {
	type: 'boolean',
	options: [true, false],
	control: {
		type: 'radio'
	}
};

export default {
	title: '@mui/material (v5)',
	component: Typography,
	argTypes: {
		// https://mui.com/pt/material-ui/api/Typography/
		variant: {
			options: [
				'body1',
				'body2',
				'body3',
				'body4',
				'button',
				'caption',
				'h1',
				'h2',
				'h3',
				'h4',
				'h5',
				'h6',
				'inherit',
				'overline',
				'subtitle1',
				'subtitle2',
				'subtitle3',
				'subtitle4'
			],
			type: 'string',
			...controlSelect
		},
		paragraph: booleanType,
		noWrap: booleanType,
		gutterBottom: booleanType
		// variantMapping: {
		//   options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
		//   // type: 'string',
		//   // ...controlSelect,
		//   type: 'string',
		//   ...controlSelect,
		// },
	},
	args: {
		variant: 'body1',
		paragraph: false,
		noWrap: false,
		gutterBottom: false
		// variantMapping: '',
	}
} as ComponentMeta<typeof Typography>;

// 👇 We create a "template" of how args map to rendering
const Template: ComponentStory<typeof Typography> = (args) => (
	<ThemeProviderWithFont>
		<Typography {...args}>{`${args?.variant} to ${args?.variantMapping}`}</Typography>
	</ThemeProviderWithFont>
);

export const MuiTypography = Template.bind({});
