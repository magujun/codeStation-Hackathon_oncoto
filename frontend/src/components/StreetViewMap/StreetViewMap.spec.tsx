import { render, screen, waitFor } from '@testing-library/react';
import { StreetViewMap } from '.';

describe('StreetViewMap component', () => {
  it('renders correctly', () => {
    render(
      <StreetViewMap
        googleMapsApiKey=""
        startPoint={{
          lat: 52.47876324394502,
          lng: -1.913465674644272,
        }}
      />,
    );

    waitFor(() => expect(screen.getByTestId('gmap-street')).toBeInTheDocument());
  });
});
