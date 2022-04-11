import React from 'react';
import {useSelector} from 'react-redux';
import {profileList, Screens} from '../config';
import {UserProfile} from '../config/dummyData/UserProfile';
import Userprofile from '../views/userProfile';

interface UserprofileViewModel {
  navigation: any;
}
const UserprofileViewModel = (props: UserprofileViewModel) => {
  const {navigation} = props;
  const profileUri = useSelector((state: any) => state.profileImage);
  const accountDetails = useSelector((state: any) => state.accountDetails);
  return (
    <Userprofile
      {...{
        navigation,
        profileList,
        profileUri,
        accountDetails,
        UserProfile,
        onPressHomeScreen: () => navigation.navigate(Screens.HomeViewModel),
        onPressEditAccount: () =>
          navigation.navigate(Screens.EditAccountViewModel),
      }}
    />
  );
};
export default UserprofileViewModel;
