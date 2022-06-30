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
				}
			}}
		>
			<Link href={path} passHref>
				{children}
			</Link>
		</ListItem>
	);
}
