class ZipCodeUtils {
	/** Return true if zip code (CEP) is valid! Expected: 85950-000 or 85950000
	 *
	 *  Retorna true se zip code (CEP) for válido! Esperado: 85950-000 ou 85950000 */
	static ZipCodeIsValid(zipCode: string): boolean {
		return zipCode.length >= 8 && zipCode.length <= 9 && /^([\d]{2})\.?([\d]{3})\-?([\d]{3})/.test(zipCode);
	}
}

export default ZipCodeUtils;
