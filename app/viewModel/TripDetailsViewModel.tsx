import React, {useEffect, useRef} from 'react';
import MapView from 'react-native-maps';
import initialCoordinates from '../config/dummyData/Mapdata';
import Geolocation from '@react-native-community/geolocation';
import {LocationDataType} from '../models';
import tripDetails from '../config/dummyData/TripDetails';
import TripDetails from '../views/tripDetails';

const TripDetailsViewModel = () => {
  const LocationData = useRef<LocationDataType>(initialCoordinates);
  const mapRef = React.useRef<MapView>(null);

  const getCurrentLocation = async () => {
    Geolocation.getCurrentPosition(
      info => {
        (LocationData.current.latitude = info.coords.latitude),
          (LocationData.current.longitude = info.coords.longitude);
        mapRef.current?.animateToRegion(
          {
            latitude: LocationData.current.latitude,
            longitude: LocationData.current.longitude,
            latitudeDelta: LocationData.current.latitudeDelta,
            longitudeDelta: LocationData.current.longitudeDelta,
          },
          500,
        );
      },
      error => {
        // console.log(error.message);
      },
      {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
    );
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <TripDetails
      {...{
        LocationData,
        mapRef,
        tripDetails
      }}
    />
  );
};

export default TripDetailsViewModel;
