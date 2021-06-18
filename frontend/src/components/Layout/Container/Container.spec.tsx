import { render, screen } from '@testing-library/react';
import { Container } from '.';

describe('Button component', () => {
  it('should render children inside the container', () => {
    render(<Container><p>Test</p></Container>)

    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
