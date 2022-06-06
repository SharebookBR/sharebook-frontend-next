import { Button, Menu, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { ReactNode, useState } from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';

interface ISharebookNavBarMobileProps {
	children: ReactNode;
}

const DivFlex = styled('div')(() => ({
	display: 'flex',
	alignItems: 'center',
	padding: '8px 8px 8px 22vw',
	justifyContent: 'space-between'
}));

export default function SharebookNavBarMobile({ children }: ISharebookNavBarMobileProps) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<DivFlex>
			<Image src="/logo.png" width={228} height={87} alt="Logo da Sharebook" />
			<Button sx={{}} aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
				<MenuIcon fontSize="large" />
			</Button>
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
				{children}
			</Menu>
		</DivFlex>
	);
}
