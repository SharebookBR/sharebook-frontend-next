class PasswordUtils {
	static ValidatePassword(password: string): boolean {
		return Boolean(password.length < 6 || password.length > 32);
	}
}

export default PasswordUtils;
