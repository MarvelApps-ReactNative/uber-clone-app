import React from 'react';
import AddCardScreeen from '../views/addCard';

interface AddCardViewModelprops {
  navigation: any;
}
const AddCardViewModel = (props: AddCardViewModelprops) => {
  const {navigation} = props;
  return (
    <AddCardScreeen
      {...{
        navigation,
      }}
    />
  );
};

export default AddCardViewModel;
