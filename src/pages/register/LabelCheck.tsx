import { Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface ILabelCheckProps {
	label: string;
}

export default function LabelCheck({ label }: ILabelCheckProps) {
	return <Typography style={{ maxWidth: 240, fontSize: '0.875rem' }}>{label}</Typography>;
}
