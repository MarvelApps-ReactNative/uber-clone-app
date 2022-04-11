import React from 'react';
import {accessibility} from '../config/dummyData/AllTopics';
import AccessibilityScreen from '../views/allTopics/Accessibility';

const AccessibilityModel = () => {
  return <AccessibilityScreen {...{accessibility}} />;
};

export default AccessibilityModel;
