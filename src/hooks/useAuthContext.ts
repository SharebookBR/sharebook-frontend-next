import React, { useEffect, useState, useCallback } from 'react';
import axiosClient from '@sharebook-axios';

interface IAuthContext {
	authenticated: boolean;
	email?: string;
	accessToken?: string;
	expiration?: Date;
	name?: string;
	profile?: string;
	userId?: string;
}

interface ILogin {
	email: string;
	password: string;
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

	const login = useCallback(
		async (data: ILogin): Promise<boolean> => {
			try {
				const { data: responseData } = await axiosClient.post('Account/Login', data);
				localStorage.setItem(keyLocalStorage, JSON.stringify(responseData?.value));
				setAuthContext(responseData?.value);
				return true;
			} catch {
				console.log('Falha no login.');
				localStorage.removeItem(keyLocalStorage);
				if (authContext != initialValue) setAuthContext(initialValue);
				return false;
			}
		},
		[authContext, setAuthContext]
	);

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

	return { authenticated: authContext.authenticated, authContext, login, logout };
}
