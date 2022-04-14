import React from 'react';
import {NavigationProp} from '../models';
import TripScreen from '../views/trip/TripScreen';

const TripViewModal = (props: NavigationProp) => {
  const {navigation} = props;

  return (
    <TripScreen
      {...{
        navigation,
      }}
    />
  );
};

export default TripViewModal;
