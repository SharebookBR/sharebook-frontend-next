import { Link, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import styles from './styles.module.scss';

export function SharebookFooter() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className={styles.footer}>
			<div>
				<Typography className={styles.text} variant="body3">{`© 2018-${currentYear} Copyleft: sharebook.com.br`}</Typography>
				<Link href="https://vercel.com/vercel-admin?utm_source=sharebooknext&utm_campaign=oss" target="_blank" rel="oopener noreferrer">
					<Image src="/powered-by-vercel.svg" width={212} height={45} alt="Powered by vercel" />
				</Link>
			</div>
		</footer>
	);
}
