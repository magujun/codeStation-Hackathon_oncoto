import React, { Component, useEffect, useState, memo } from 'react';
import {
  GoogleMap,
  LoadScript,
  StreetViewPanorama,
} from '@react-google-maps/api';

const mapContainerStyle = {
  height: '100%',
  width: '100%',
  top: 0,
  left: 0,
};

type Position = {
  lat: number;
  lng: number;
};

type StreetMapProps = {
  googleMapsApiKey: string;
  startPoint: Position;
};

export const StreetViewMap = memo(({ googleMapsApiKey, startPoint }: StreetMapProps) => {
  // const ref = React.useRef<StreetViewPanorama>();

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        data-testid="gmap-street"
        mapContainerStyle={mapContainerStyle}
        center={startPoint}
        zoom={2}
        clickableIcons={false}
        options={{
          clickableIcons: false,
          disableDefaultUI: true,
        }}
        onClick={e => console.log(e)}
      >
        <StreetViewPanorama
          options={{
            position: startPoint,
            enableCloseButton: false,
            linksControl: false,
            addressControl: false,
            visible: true,
            motionTracking: false,
            motionTrackingControl: false,
            disableDefaultUI: true,
            showRoadLabels: false,
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
});
