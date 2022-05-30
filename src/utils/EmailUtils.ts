class EmailUtils {
	/** Return true if email is valid!
	 *
	 *  Retorna true se o email estiver válido! */
	static EmailIsValid(email: string): boolean {
		return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
			email
		);
	}
}

export default EmailUtils;
