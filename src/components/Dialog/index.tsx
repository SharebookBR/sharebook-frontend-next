import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { ReactNode } from 'react';
import { useWindowSize } from 'usehooks-ts';

interface ISharebookDialogProps {
	title: ReactNode;
	children: ReactNode;
	open: boolean;
	onClose?: () => void;
	actions?: ReactNode;
	className?: string;
}

//TODO: Validar se esse é o modelo padrão e alterar o "theme" e/ou criar um variant pra esse modelo

export function SharebookDialog({ title, children, open, onClose, actions, className }: ISharebookDialogProps) {
	const { width } = useWindowSize();
	return (
		<Dialog open={open} fullScreen={Boolean(width && width < 600)} className={className ?? ''}>
			<DialogTitle>
				{title}
				{onClose && (
					<CloseIcon onClick={onClose} style={{ position: 'relative', left: 'calc(100% - 24px)', top: '4px', cursor: 'pointer' }} />
				)}
			</DialogTitle>
			<DialogContent dividers>{children}</DialogContent>
			{actions && <DialogActions>{actions}</DialogActions>}
		</Dialog>
	);
}
