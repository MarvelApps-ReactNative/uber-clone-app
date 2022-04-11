import React from 'react';
import {signingUp} from '../config/dummyData/AllTopics';
import SigningUpScreen from '../views/allTopics/SigningUp';

const SigningUpModel = () => {
  return <SigningUpScreen {...{signingUp}} />;
};

export default SigningUpModel;
