import { render, screen, waitFor } from '@testing-library/react';
import { DisplayMap } from '.';

describe('StreetViewMap component', () => {
  it('renders correctly', () => {
    render(
      <DisplayMap
        googleMapsApiKey=""
        center={{
          lat: 52.47876324394502,
          lng: -1.913465674644272,
        }}
      />,
    );

    waitFor(() => expect(screen.getByTestId('gmap-display-makers')).toBeInTheDocument());
  });
});
