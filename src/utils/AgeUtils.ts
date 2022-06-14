class AgeUtils {
	/** Return true if age is between 8 and 100!
	 *
	 *  Retorna true se a idade for entre 8 e 100! */
	static AgeIsValid(age: number): boolean {
		return Boolean(age >= 8 && age <= 100);
	}
	/** Return true if age is between 18 and 100!
	 *
	 *  Retorna true se a idade for entre 18 e 100! */
	static AgeIsBiggerThan18(age: number): boolean {
		return Boolean(this.AgeIsValid(age) && age >= 18);
	}
}

export default AgeUtils;
