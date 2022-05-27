import { Typography } from '@mui/material';
import React from 'react';

import styles from './styles.module.scss';

export function SharebookFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Typography>{`© 2018-${currentYear} Copyleft: sharebook.com.br`}</Typography>
    </footer>
  );
}
