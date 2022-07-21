import React, { useRef } from 'react';
import { useAuthContext } from '@sharebook-hooks';
import { useIsMounted } from 'usehooks-ts';

/* TODO: 
	- receive redirectUrl after logout
	- Verify if it's possible, redirect to /login without reload (make sure about this problem: https://github.com/SharebookBR/sharebook-frontend-next/issues/99)
*/

export default function Logout() {
	const { logout } = useAuthContext();
	const isMounted = useIsMounted();
	const withLogoutRef = useRef<boolean>(false);

	if (!withLogoutRef.current && isMounted()) {
		withLogoutRef.current = true;
		logout();
		window.location.pathname = '/login';
	}

	return null;
}
