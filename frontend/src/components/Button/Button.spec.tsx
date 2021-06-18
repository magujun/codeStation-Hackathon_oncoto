import { render, screen } from '@testing-library/react';
import { Button } from '.';
import { FaGlobe } from 'react-icons/fa';

describe('Button component', () => {
  it('should render a primary button as default', () => {
    render(<Button>Test</Button>)

    const testButton = screen.getByText('Test');

    expect(testButton).toBeInTheDocument();
    expect(testButton).not.toHaveStyle('background-color: transparent');
  });

  it('should render a secondary button with transparent backgound if isPrimary is set to false', () => {
    render(<Button isPrimary={false}>Test</Button>)

    const testButton = screen.getByText('Test');

    expect(testButton).toHaveStyle('background-color: transparent');
  });

  it('should render an icon if props is passed', () => {
    render(<Button icon={FaGlobe}>Test</Button>)

    expect(screen.getByTestId('button-icon')).toBeInTheDocument();
  });
})
