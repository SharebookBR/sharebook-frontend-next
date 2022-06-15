import { screen } from '@testing-library/dom';

interface IGetMuiTextFieldProps {
	dataTestId: string;
}

export const GetInputFromMuiTextFieldByTestId = ({ dataTestId }: IGetMuiTextFieldProps): HTMLInputElement => {
	const wrapperDiv = screen.getByTestId(dataTestId) as HTMLDivElement;

	const childDivEl = wrapperDiv.lastElementChild as HTMLDivElement;

	const inputEl = childDivEl?.firstElementChild as HTMLInputElement;
	return inputEl;
};
