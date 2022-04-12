import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {Screens} from '../config';
import {rideInfoDataType} from '../models';
import {RideInformation} from '../config/dummyData/RiderInformation';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import PickRideScreen from '../views/pickupRide';

interface PickupRideViewModelprops {
  navigation: any;
}
type rideInfoType = {
  rideInfo: rideInfoDataType;
};

const PickupRideViewModel = (props: PickupRideViewModelprops) => {
  const {navigation} = props;
  const rideInfostate = useSelector((state: rideInfoType) => state.rideInfo);
  const paymentsOption = useSelector((state: any) => state.paymentsOption);

  const [rideInfo, setRideInfo] = useState(RideInformation);

  const destination = 'New Delhi Railway Station';
  const paytm = 'Paytm';
  const dropdown = '6:32pm dropoff';

  const firstBottomModalRef = useRef<BottomSheetModal>(null);
  const [bottomIndex, setBottomIndex] = useState<number>(0);
  const snapPointsFirst = useMemo(() => ['40%', '96%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    setBottomIndex(index);
  }, []);

  useEffect(() => {
    firstBottomModalRef.current?.present();
  }, []);

  return (
    <PickRideScreen
      {...{
        navigation,
        rideInfo,
        destination,
        paytm,
        dropdown,
        rideInfostate,
        navigateToHome: () => navigation.navigate(Screens.HomeViewModel),
        PaymentOption: () =>
          navigation.navigate(Screens.PaymentOptionsViewModel),
        firstBottomModalRef,
        handleSheetChanges,
        bottomIndex,
        snapPointsFirst,
        paymentsOption
      }}
    />
  );
};

export default PickupRideViewModel;
