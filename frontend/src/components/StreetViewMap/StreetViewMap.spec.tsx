import { render, screen, waitFor } from '@testing-library/react';
import { LoadScriptNext } from '@react-google-maps/api';
import { StreetViewMap } from '.';

describe('StreetViewMap component', () => {
  it('renders correctly', () => {
    render(
      <LoadScriptNext googleMapsApiKey="">
        <StreetViewMap
          startPoint={{
            lat: 52.47876324394502,
            lng: -1.913465674644272,
          }}
        />
      </LoadScriptNext>,
    );

    waitFor(() =>
      expect(screen.getByTestId('gmap-street')).toBeInTheDocument(),
    );
  });
});
