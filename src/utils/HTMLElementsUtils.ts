interface IEventNameAndValue {
	name: string;
	value: string;
}
class HTMLElementsUtils {
	static GetNameAndValueFromHTMLInputElementEvent(e: React.ChangeEvent<HTMLInputElement>): IEventNameAndValue {
		const { name, value } = e.currentTarget;
		return { name, value };
	}
}

export default HTMLElementsUtils;
