import React from 'react';
import {uberBus} from '../config/dummyData/AllTopics';
import UberBusScreen from '../views/allTopics/UberBus';

const UberBusModel = () => {
  return <UberBusScreen {...{uberBus}} />;
};

export default UberBusModel;
