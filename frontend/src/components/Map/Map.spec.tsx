import { render, screen, waitFor } from '@testing-library/react';
import { Map } from '.';

describe('Map component', () => {
  it('renders correctly', () => {
    render(
      <Map
        googleMapsApiKey=""
        center={{
          lat: 0,
          lng: 0,
        }}
      />,
    );

    waitFor(() => expect(screen.getByTestId('gmap-maker')).toBeInTheDocument());
  });
});
