import React, { memo, useCallback, useRef, useState } from 'react';
import { GoogleMap, Marker, LoadScriptNext } from '@react-google-maps/api';

const displayMapContainerStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
};

type Position = {
  lat: number;
  lng: number;
};

type DisplayMapProps = {
  googleMapsApiKey: string;
  goal?: Position;
  guess?: Position;
  center: Position;
  zoom?: number;
  guessIcon?: string;
};

export const DisplayMap = memo(
  ({
    googleMapsApiKey,
    guess,
    goal,
    center,
    guessIcon,
    zoom = 3,
  }: DisplayMapProps) => {
    const centerRef = useRef<Position>(
      center?.lat ? center : { lat: 1, lng: 0 },
    );
    const zoomRef = useRef<number>(zoom);

    return (
      <>
        <LoadScriptNext googleMapsApiKey={googleMapsApiKey}>
          <GoogleMap
            data-testid="gmap-display-makers"
            mapContainerStyle={displayMapContainerStyle}
            center={centerRef.current}
            zoom={zoomRef.current}
            clickableIcons={false}
            options={{
              disableDefaultUI: true,
              clickableIcons: false,
            }}
          >
            {guess?.lat && (
              <Marker
                position={guess}
                icon={guessIcon ? guessIcon : '/images/red_point.svg'}
              />
            )}
            {goal?.lat && (
              <Marker position={goal} icon="/images/blue_point.svg" />
            )}
          </GoogleMap>
        </LoadScriptNext>
      </>
    );
  },
);
