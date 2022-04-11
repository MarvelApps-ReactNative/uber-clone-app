import React from 'react';
import {accountOptions} from '../config/dummyData/AllTopics';
import Account from '../views/allTopics/Account';

const AccountModel = () => {
  return <Account {...{accountOptions}} />;
};

export default AccountModel;
