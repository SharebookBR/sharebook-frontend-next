class PostalCodeUtils {
	/** Return true if postal code (CEP) is valid! Expected: 85950-000 or 85950000
	 *
	 *  Retorna true se postal code (CEP) for válido! Esperado: 85950-000 ou 85950000 */
	static PostalCodeIsValid(postalCode: string): boolean {
		return postalCode.length >= 8 && postalCode.length <= 9 && /^([\d]{2})\.?([\d]{3})\-?([\d]{3})/.test(postalCode);
	}
}

export default PostalCodeUtils;
