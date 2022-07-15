import React, { useRef } from 'react';
import { useAuthContext } from '@sharebook-hooks';
import { useRouter } from 'next/router';
import { useIsMounted } from 'usehooks-ts';

// TODO: receive redirectUrl after logout

export default function Logout() {
	const { logout } = useAuthContext();
	const isMounted = useIsMounted();
	const { push } = useRouter();
	const withLogoutRef = useRef<boolean>(false);

	if (!withLogoutRef.current && isMounted()) {
		withLogoutRef.current = true;
		logout();
		push('/login');
	}

	return null;
}
