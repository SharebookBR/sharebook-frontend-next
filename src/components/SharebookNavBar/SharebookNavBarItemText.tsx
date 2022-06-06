import { Typography } from '@mui/material';
import React from 'react';
import SharebookNavBarItem from './SharebookNavBarItem';

interface ISharebookNavBarItemText {
	text: string;
	path: string;
}

const SharebookNavBarItemText = ({ text, path }: ISharebookNavBarItemText) => {
	return (
		<SharebookNavBarItem path={path}>
			<Typography variant="bodyMediumBold" color="secondary">
				{text}
			</Typography>
		</SharebookNavBarItem>
	);
};

export default SharebookNavBarItemText;
