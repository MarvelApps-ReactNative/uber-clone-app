import React from 'react';
import {guide} from '../config/dummyData/AllTopics';
import GuidScreen from '../views/allTopics/GuideToUber';

const GuideModel = () => {
  return <GuidScreen {...{guide}} />;
};

export default GuideModel;
