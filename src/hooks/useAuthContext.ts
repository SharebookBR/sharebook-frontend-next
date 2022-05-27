import React, { useEffect, useState, useCallback } from 'react';

interface IAuthContext {
	authenticated: boolean;
	email?: string;
	accessToken?: string;
	expiration?: Date;
	name?: string;
	profile?: string;
	userId?: string;
}

const initialValue: IAuthContext = { authenticated: false };
const keyLocalStorage = 'shareBookUser';
/*  
    TODO: 
		- login without reload
        - Validate expiration
        - If token has expirated, remove from localStorage
        - Create class/wrapper to access localStorage
        - Encrypt accessToken
*/

export function useAuthContext() {
	const [authContext, setAuthContext] = useState<IAuthContext>(initialValue);

	const login = useCallback((newAuth: IAuthContext) => {
		console.log('Login efetuado para ' + newAuth.email);
		localStorage.setItem(keyLocalStorage, JSON.stringify(newAuth));
		setAuthContext(newAuth);
	}, []);

	const logout = useCallback(() => {
		console.log('Logout efetuado!');
		localStorage.removeItem(keyLocalStorage);
		setAuthContext(initialValue);
	}, []);

	useEffect(() => {
		const strValue = localStorage.getItem(keyLocalStorage);
		if (strValue) {
			const shareBookUser: IAuthContext = JSON.parse(strValue || '');
			if (shareBookUser != authContext) setAuthContext(shareBookUser);
		}
	}, []);

	return { authContext, login, logout };
}
