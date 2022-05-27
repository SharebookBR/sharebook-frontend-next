import { ListItem, Typography } from '@mui/material';
import Link from 'next/link';
import { ReactNode } from 'react';

interface SharebookNavBarItemProps {
	path: string;
	children: ReactNode;
}

export function SharebookNavBarItem({ path, children }: SharebookNavBarItemProps) {
	return (
		<ListItem>
			<Link href={path} passHref>
				{children}
			</Link>
		</ListItem>
	);
}
