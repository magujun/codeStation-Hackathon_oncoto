import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Button component', () => {
  it('should render the solid button correctly', () => {
    render(<Button>Test</Button>)

    const testButton = screen.getByText('Test');

    expect(testButton).toBeInTheDocument();
    expect(testButton).not.toHaveStyle('background-color: transparent');
  });
})
