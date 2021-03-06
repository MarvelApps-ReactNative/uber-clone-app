import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {Screens} from '../config';
import {RideInfoDataType} from '../models';
import {RideInformation} from '../config/dummyData/RiderInformation';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {NavigationProp} from '../models';
import {ScreenConstant} from '../config';
import {onShare} from '../common';
import PickRideScreen from '../views/pickupRide/PickRideScreen';

type rideInfoType = {
  rideInfo: RideInfoDataType;
};

const PickupRideViewModel = (props: NavigationProp) => {
  const {navigation} = props;
  const rideInfostate = useSelector((state: rideInfoType) => state.rideInfo);
  const paymentsOption = useSelector((state: any) => state.paymentsOption);
  const destination = useSelector((state: any) => state.rideInfo);

  const [rideInfo, setRideInfo] = useState(RideInformation);

  const firstBottomModalRef = useRef<BottomSheetModal>(null);
  const [bottomIndex, setBottomIndex] = useState<number>(0);
  const snapPointsFirst = useMemo(() => ['40%', '97%'], []);

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
        rideInfostate,
        navigateToHome: () => navigation.navigate(Screens.HomeViewModel),
        PaymentOption: () =>
          navigation.navigate(Screens.PaymentOptionsViewModel),
        firstBottomModalRef,
        handleSheetChanges,
        bottomIndex,
        snapPointsFirst,
        paymentsOption,
        destinationText: destination.destinationName,
        SearchScreen: () => navigation.replace(Screens.SearchViewModel),
        ShareMessage: () => onShare(ScreenConstant.pickupRide.SHARE_MESSAGE),
      }}
    />
  );
};

export default PickupRideViewModel;
