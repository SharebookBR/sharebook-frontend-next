import { ListItem } from '@mui/material';
import Link from 'next/link';
import { ReactNode } from 'react';

interface SharebookNavBarItemProps {
	path: string;
	children: ReactNode;
}

export default function SharebookNavBarItem({ path, children }: SharebookNavBarItemProps) {
	return (
		<ListItem
			sx={{
				justifyContent: {
					sm: 'center',
					xs: 'center'
				},
				p: {
					md: '0 0.6rem',
					lg: '0 1.18rem'
				}
			}}
		>
			<Link href={path} passHref>
				{children}
			</Link>
		</ListItem>
	);
}
