class PasswordUtils {
	/** Return true if password is valid!
	 *
	 *  Retorna true se a senha estiver válida! */
	static PasswordIsValid(password: string): boolean {
		return Boolean(password.length >= 6 && password.length <= 32);
	}
}

export default PasswordUtils;
