import React, { Component, useEffect, useState, memo } from 'react';
import {
  GoogleMap,
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
  startPoint: Position;
};

export const StreetViewMap = memo(
  ({ startPoint }: StreetMapProps) => {
    // const ref = React.useRef<StreetViewPanorama>();

    return (
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
    );
  },
);
