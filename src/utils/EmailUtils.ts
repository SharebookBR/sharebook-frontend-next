class EmailUtils {
	static ValidateEmail(email: string): boolean {
		return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
			email
		);
		return false;
	}
}

export default EmailUtils;
