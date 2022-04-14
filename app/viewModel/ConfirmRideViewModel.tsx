import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {formatTime} from '../common';
import {api, APIKEY, Screens} from '../config';
import {
  CurrentLocationDataType,
  LocationDataType,
  RideInfoDataType,
} from '../models';
import {sendRequest} from '../network';
import {setOriginCoord, setOriginName} from '../redux/actions';
import ConfirmRideScreen from '../views/confirmRide/ConfirmRideScreen';
import ConfirmPickupScreen from '../views/confirmRide/ConfirmPickupScreen';
import ConfirmScreen from '../views/confirmRide/ConfirmScreen';
import CovideMessageScreen from '../views/confirmRide/CovideMessageScreen';

interface ConfirmRideViewModelprops {
  navigation: any;
  route: any;
}
type rideInfoType = {
  rideInfo: RideInfoDataType;
};
const ConfirmRideViewModel = (props: ConfirmRideViewModelprops) => {
  const {navigation, route} = props;
  const {rideDuration} = route.params;

  const rideInfo = useSelector((state: rideInfoType) => state.rideInfo);
  const PaymentMethod = useSelector((state: any) => state.paymentsOption);

  const initialCoordinates = {
    latitude: rideInfo.originCoord.lat,
    longitude: rideInfo.originCoord.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [itemIndex, setItemIndex] = useState(0);
  const regionChangeData = useRef<LocationDataType>(initialCoordinates);
  const [place, setPlace] = useState<string>('');
  const [loc, setLoc] = useState<CurrentLocationDataType>({lat: 0, lng: 0});
  const dispatch = useDispatch();

  // confirm screen
  const countingdata = [1, 2, 3, 4];

  let todayDate = new Date();
  let time = todayDate.setMinutes(
    todayDate.getMinutes() + rideDuration.toFixed(0),
  );
  let tempDate = new Date(time);
  let formate_time = formatTime(tempDate);

  const Page = () => {
    switch (itemIndex) {
      case 0:
        return (
          <ConfirmPickupScreen
            {...{
              setItemIndex,
              place,
              confirmPickup,
            }}
          />
        );
      case 1:
        return (
          <CovideMessageScreen
            {...{
              setItemIndex,
            }}
          />
        );
      case 2:
        return (
          <ConfirmScreen
            {...{
              setItemIndex,
              rideInfo,
              formate_time,
              PaymentMethod,
              GotoNextScreen: () =>
                navigation.navigate(Screens.PaymentOptionsViewModel),
              SearchScreen: () => navigation.replace(Screens.SearchViewModel),
              HomeScreen: () => navigation.navigate(Screens.HomeViewModel),
            }}
          />
        );
    }
  };

  const onTouchEnd = async () => {
    setLoc({
      lat: regionChangeData.current.latitude,
      lng: regionChangeData.current.longitude,
    });
    let url = `${api.GOOGLE_NAME_BY_LAT_LNG}${regionChangeData.current.latitude},
    ${regionChangeData.current.longitude}&key=${APIKEY}`;
    let response = await sendRequest(url);
    if (response != 'error') {
      let houseNumber =
        response.data.results[0].address_components[0].long_name;
      let area = response.data.results[0].address_components[1].long_name;
      setPlace(`${houseNumber}, ${area}`);
    }
  };

  const confirmPickup = () => {
    dispatch(
      setOriginCoord({
        lat: regionChangeData.current.latitude,
        lng: regionChangeData.current.longitude,
      }),
    );
    dispatch(setOriginName(place));
  };

  useEffect(() => {
    onTouchEnd();
  }, []);

  useEffect(() => {
    if (itemIndex == 2) {
      setTimeout(() => {
        navigation.replace(Screens.PickupRideViewModel);
      }, 4000);
    }
  });

  return (
    <ConfirmRideScreen
      {...{
        navigation,
        Page,
        itemIndex,
        regionChangeData,
        onTouchEnd: () => onTouchEnd(),
        latitude: rideInfo.originCoord.lat,
        longitude: rideInfo.originCoord.lng,
        loc,
        rideInfo,
      }}
    />
  );
};

export default ConfirmRideViewModel;
