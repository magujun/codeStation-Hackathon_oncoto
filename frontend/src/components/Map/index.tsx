import React, { memo, useCallback, useRef, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const mapContainerStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
};

type Position = {
  lat: number;
  lng: number;
};

type MapProps = {
  center: Position;
  zoom?: number;
  onGuess?: (guess: Position) => void;
};

export const Map = memo(
  ({ onGuess, center, zoom = 3 }: MapProps) => {
    const [guess, setGuess] = useState<Position>(null);
    const ref = useRef<GoogleMap>();
    const centerRef = useRef<Position>(center);
    const zoomRef = useRef<number>(zoom);

    const handleMapClick = useCallback(
      (e: any) => {
        const { latLng } = e;

        const destination = {
          lat: latLng.lat() as number,
          lng: latLng.lng() as number,
        };

        setGuess(destination);
        if (onGuess) onGuess(destination);
      },
      [onGuess],
    );

    return (
      <>
        <GoogleMap
          data-testid="gmap-maker"
          mapContainerStyle={mapContainerStyle}
          center={centerRef.current}
          onClick={handleMapClick}
          zoom={zoomRef.current}
          clickableIcons={false}
          options={{
            disableDefaultUI: true,
            clickableIcons: false,
            fullscreenControl: true,
            fullscreenControlOptions: {
              position: 5,
            },
            zoomControl: true,
          }}
          ref={ref}
        >
          {guess?.lat && (
            <Marker position={guess} icon="/images/red_point.svg" />
          )}
        </GoogleMap>
      </>
    );
  },
);
