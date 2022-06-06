import { AppBar, Button, Menu, styled, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { ReactNode, useState } from 'react';
import SharebookNavBarLogo from './SharebookNavBarLogo';

interface ISharebookNavBarMobileProps {
	children: ReactNode;
}

const CustomAppBar = styled(AppBar)(() => ({
	alignItems: 'center'
}));

const ToolbarFlex = styled(Toolbar)(() => ({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	width: '100%',
	justifyContent: 'space-between'
}));

const ImageWrapper = styled('div')(() => ({
	width: '100%',
	textAlign: 'center'
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
		<CustomAppBar position="sticky" color="default">
			<ToolbarFlex sx={{ padding: { xs: '8px 8px 8px 1vw', md: '8px 8px 8px 22vw' } }}>
				<ImageWrapper
					sx={{
						paddingLeft: {
							sm: '1rem',
							xs: '0'
						}
					}}
				>
					<SharebookNavBarLogo />
				</ImageWrapper>
				<Button sx={{ display: 'inline-block' }} aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
					<MenuIcon fontSize="large" />
				</Button>
				<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
					{children}
				</Menu>
			</ToolbarFlex>
		</CustomAppBar>
	);
}
