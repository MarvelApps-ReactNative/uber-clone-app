import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useSelector} from 'react-redux';
import {convertMinsToHrsMins, getCarImage} from '../common';
import {Screens} from '../config';
import {CurrentLocationDataType} from '../models';
import {NavigationProp} from '../models';
import SearchResultScreen from '../views/searchResult/SearchResultScreen';

const apidata = {
  coordinates: [],
  distance: 4.72,
  duration: 14.65,
  fares: [undefined],
  waypointOrder: [[]],
};

interface rideInfoType {
  rideInfo: {
    destinationCoord: CurrentLocationDataType;
    destinationName: string;
    originCoord: CurrentLocationDataType;
    originName: string;
  };
}

const SearchResultViewModel = (props: NavigationProp) => {
  const {navigation} = props;
  const rideInfo = useSelector((state: any) => state.rideInfo);
  const paymentsOption = useSelector((state: any) => state.paymentsOption);

  const [mapData, setMapData] = useState(apidata);
  const [cartype, setcartype] = useState('');

  let rideDurationTime = mapData.duration;
  let rideDurationTimeInHour = convertMinsToHrsMins(
    rideDurationTime.toFixed(2),
  );

  const useForceUpdate = () => {
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);
  };

  const firstBottomModalRef = useRef<BottomSheetModal>(null);
  const secondBottomModalRef = useRef<BottomSheetModal>(null);
  const [bottomIndex, setBottomIndex] = useState<number>(0);
  const [selectedCar, setSelectedCar] = useState<number>(0);
  const snapPointsFirst = useMemo(() => ['32%', '65%'], []);
  const snapPointsSecond = useMemo(() => ['15%', '15%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    setBottomIndex(index);
  }, []);

  useEffect(() => {
    firstBottomModalRef.current?.present();
    secondBottomModalRef.current?.present();
  }, []);

  return (
    <SearchResultScreen
      {...{
        navigation,
        getCarImage,
        mapData,
        useForceUpdate,
        rideDurationTimeInHour,
        rideDurationTime,
        cartype,
        setcartype,
        bottomIndex,
        setBottomIndex,
        selectedCar,
        setSelectedCar,
        snapPointsFirst,
        snapPointsSecond,
        handleSheetChanges,
        firstBottomModalRef,
        secondBottomModalRef,
        originPlace: rideInfo.originCoord,
        destinationPlace: rideInfo.destinationCoord,
        originText: rideInfo.originName,
        destinationText: rideInfo.destinationName,
        updateMapData: (data: any) => {
          setMapData(data);
        },
        paymentsOption,
        navigateToNextScreen: () =>
          navigation.navigate(Screens.ConfirmRideViewModel, {
            rideDuration: mapData.duration,
          }),
        AlertMessage: () => navigation.navigate(Screens.AlertMessageViewModel),
        PaymentOption: () =>
          navigation.navigate(Screens.PaymentOptionsViewModel),
      }}
    />
  );
};

export default SearchResultViewModel;
