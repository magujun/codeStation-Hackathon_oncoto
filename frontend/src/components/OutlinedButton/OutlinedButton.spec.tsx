import { render, screen } from '@testing-library/react';
import { OutlinedButton } from '.';

describe('Button component', () => {
  it('should render the outlined button correctly', () => {
    render(<OutlinedButton>Test</OutlinedButton>)

    const testButton = screen.getByText('Test');

    expect(testButton).toHaveStyle('background-color: transparent');
  });
});
