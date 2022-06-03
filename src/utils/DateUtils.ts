import { EnumDateTypes } from '@sharebook-enums';
class DateUtils {
	/** Return true if date is valid! Expected: "dd/MM/yyyy" -> "31/01/2000"
	 *
	 *  Retorna true se a data estiver válida! Esperado: "dd/MM/yyyy" -> "31/01/2000" */
	static DateIsValid(date: string, type: EnumDateTypes): boolean {
		switch (type) {
			case EnumDateTypes.ddMMyyyy:
				return /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])$)/.test(
					date
				);
			default:
				throw 'invalid type! @sharebook-utils -> DateUtils.DateIsValid';
		}
	}
}

export default DateUtils;
