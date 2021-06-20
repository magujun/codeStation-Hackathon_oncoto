import { render, screen, waitFor } from '@testing-library/react';
import { Timer } from '.';

jest.setTimeout(10000); // 10 sec

describe('Timer component', () => {
  it('Render correctly', async () => {
    render(<Timer finishDate={Date.now()} onTimeout={() => {}} />);

    await waitFor(
      () => expect(screen.getByText('00:00:00')).toBeInTheDocument(),
      {
        timeout: 2,
      },
    );
  });

  it('Timeout correctly', async () => {
    render(<Timer finishDate={Date.now() + 1000 * 2} onTimeout={() => {}} />);

    await waitFor(
      () => expect(screen.getByText('00:00:00')).toBeInTheDocument(),
      {
        timeout: 5 * 1000,
      },
    );
  });
});
