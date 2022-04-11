import React from 'react';
import MessagesScreen from '../views/message';

interface MessagesViewModelprops {
  navigation: any;
}
const MessagesViewModel = (props: MessagesViewModelprops) => {
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
