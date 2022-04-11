import React from 'react';
import {moreScreen} from '../config/dummyData/AllTopics';
import More from '../views/allTopics/More';

const MoreModel = () => {
  return <More {...{moreScreen}} />;
};

export default MoreModel;
