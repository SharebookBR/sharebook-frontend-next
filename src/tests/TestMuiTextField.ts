import { TextFieldProps } from '@mui/material';
import { screen } from '@testing-library/dom';

interface IGetTextFieldByMuiProps {
	required: boolean;
	dataTestId: string;
	type: string;
}

/*
    TextField:
    <div> //-> textFieldWrapperEl
        <div>
            <input />
        </div>
    </div>
*/

export const TestMuiTextField = ({ dataTestId, required, type }: IGetTextFieldByMuiProps) => {
	const textFieldWrapperEl = screen.getByTestId(dataTestId) as HTMLDivElement;
	expect(textFieldWrapperEl).toBeInTheDocument();
	expect(textFieldWrapperEl.childElementCount).toBe(2);

	const childDivEl = textFieldWrapperEl.lastElementChild as HTMLDivElement;
	expect(childDivEl).toBeInTheDocument();
	expect(childDivEl.childElementCount).toBe(2);

	const inputEl = childDivEl?.firstElementChild as HTMLInputElement;
	expect(inputEl).toBeInTheDocument();

	if (required) {
		expect(inputEl.required).toBeTruthy();
	}

	expect(inputEl.childElementCount).toBe(0);
	expect(inputEl.type).toBe(type);
};
