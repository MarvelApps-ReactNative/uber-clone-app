import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import initialCoordinates from '../config/dummyData/Mapdata';
import {LocationDataType} from '../models';
import {RideType, Buttons} from '../config/dummyData/HomeCar';
import {NavigationProp} from '../models';
import {Screens} from '../config';
import HomeScreen from '../views/home/HomeScreen';

const HomeViewModel = (props: NavigationProp) => {
  const {navigation} = props;

  const [visible, setVisible] = useState<boolean>(false);
  const LocationData = useRef<LocationDataType>(initialCoordinates);
  const mapRef = React.useRef<MapView>(null);
  const profileUri = useSelector((state: any) => state.profileImage);

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
    <HomeScreen
      {...{
        navigation,
        visible,
        setVisible: (visible: boolean) => setVisible(visible),
        LocationData,
        mapRef,
        profileUri,
        RideType,
        Buttons,
        UserProfileScreen: () =>
          navigation.navigate(Screens.UserprofileViewModel),
        SearchScreen: () => navigation.navigate(Screens.SearchViewModel),
      }}
    />
  );
};
export default HomeViewModel;
