import { screen } from '@testing-library/dom';

interface ITestMuiButtonProps {
	disabled: boolean;
	dataTestId: string;
}

export const TestMuiButton = ({ dataTestId, disabled }: ITestMuiButtonProps) => {
	const buttonEl = screen.getByTestId(dataTestId) as HTMLButtonElement;

	expect(buttonEl).toBeInTheDocument();
	if (disabled) expect(buttonEl).toBeDisabled();
};
