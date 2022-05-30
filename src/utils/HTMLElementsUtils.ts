interface IEventNameAndValue {
	name: string;
	value: string;
}

interface IEventNameAndChecked {
	name: string;
	checked: boolean;
}
class HTMLElementsUtils {
	static GetNameAndValueFromHTMLInputElementEvent(e: React.ChangeEvent<HTMLInputElement>): IEventNameAndValue {
		const { name, value } = e.currentTarget;
		return { name, value };
	}
	static GetNameAndCheckedFromHTMLInputElementEvent(e: React.ChangeEvent<HTMLInputElement>): IEventNameAndChecked {
		const { name, checked } = e.currentTarget;
		return { name, checked };
	}
}

export default HTMLElementsUtils;
