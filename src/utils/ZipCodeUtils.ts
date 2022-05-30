class ZipCodeUtils {
	/** Return true if zip code (CEP) is valid!
	 *
	 *  Retorna true se zip code (CEP) for válido! */
	static ZipCodeIsValid(zipCode: string): boolean {
		return /^([\d]{2})\.?([\d]{3})\-?([\d]{3})/.test(zipCode);
	}
}

export default ZipCodeUtils;
