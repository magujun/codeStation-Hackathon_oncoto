import { render, screen } from '@testing-library/react';
import { Card } from '.';

describe('Card component', () => {
  it('renders correctly', () => {
    render(<Card image="/images/logo.svg" text="card text" />)

    const testCard = screen.getByText('card text');

    expect(testCard).toBeInTheDocument();
  });
})
