class PhoneUtils {
	/** Return true if phone is valid!
	 *
	 *  Retorna true se o telefone estiver válido! */
	static PhoneIsValid(phone: string): boolean {
		return Boolean(phone.length >= 11 && phone.length <= 16 && /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/.test(phone));
	}
}

export default PhoneUtils;
