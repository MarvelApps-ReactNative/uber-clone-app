import React from 'react';
import {NavigationProp} from '../models';
import MessagesScreen from '../views/message/MessagesScreen';

const MessagesViewModel = (props: NavigationProp) => {
  const {navigation} = props;

  return (
    <MessagesScreen
      {...{
        navigation,
        GoBack: () => navigation.goBack(),
      }}
    />
  );
};

export default MessagesViewModel;
