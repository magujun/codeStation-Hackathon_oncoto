import { render, screen, waitFor } from '@testing-library/react';
import { LoadScriptNext } from '@react-google-maps/api';

import { Map } from '.';

describe('Map component', () => {
  it('renders correctly', () => {
    render(
      <LoadScriptNext googleMapsApiKey="">
        <Map
          center={{
            lat: 0,
            lng: 0,
          }}
        />
      </LoadScriptNext>,
    );

    waitFor(() => expect(screen.getByTestId('gmap-maker')).toBeInTheDocument());
  });
});
