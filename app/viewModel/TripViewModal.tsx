import React from 'react';
import TripScreen from '../views/trip';

interface TripViewModalprops {
  navigation: any;
}
const TripViewModal = (props: TripViewModalprops) => {
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
