import { render, screen, waitFor } from '@testing-library/react';
import { Modal } from '.';

describe('Modal component', () => {
  it('renders correctly', () => {
    render(
      <Modal
        title="Title"
        open
        onClose={() => {}}
      />,
    );

    waitFor(() => expect(screen.getByText('Title')).toBeInTheDocument());
  });
});
