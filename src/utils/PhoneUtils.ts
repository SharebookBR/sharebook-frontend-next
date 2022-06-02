class PhoneUtils {
	/** Return true if phone is valid! Expected: "(44) 99988-7766" or "(44) 9 9988-7766"
	 *
	 *  Retorna true se o telefone estiver válido! Esperado: "(44) 99988-7766" ou "(44) 9 9988-7766" */
	static PhoneIsValid(phone: string): boolean {
		const regex = /^(\(?\d{2}\)?\s)(\d{1})([\s]?)(\d{4})-(\d{4})$/;
		return Boolean(phone.length >= 11 && phone.length <= 16 && regex.test(phone));
	}
}

export default PhoneUtils;
