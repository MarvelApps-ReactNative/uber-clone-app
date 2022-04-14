import React from 'react';
import { NavigationProp } from '../models';
import AddCardScreeen from '../views/addCard/AddCardScreeen';

const AddCardViewModel = (props: NavigationProp) => {
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
