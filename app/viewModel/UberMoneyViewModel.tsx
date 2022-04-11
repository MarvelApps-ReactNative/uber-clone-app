import React from 'react';
import {uberMoney} from '../config/dummyData/AllTopics';
import UberMoneyScreen from '../views/allTopics/UberMoney';

const UberMoneyModel = () => {
  return <UberMoneyScreen {...{uberMoney}} />;
};

export default UberMoneyModel;
