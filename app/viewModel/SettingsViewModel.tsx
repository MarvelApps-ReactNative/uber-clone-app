import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Favorites, settingButtons} from '../config/dummyData/AccountSettings';
import {NavigationProp} from '../models';
import SettingScreen from '../views/setting/SettingScreen';

const SettingsViewModel = (props: NavigationProp) => {
  const {navigation} = props;
  const [ModalVisible, setModalVisible] = useState(false);
  const profileUri = useSelector((state: any) => state.profileImage);
  const accountDetails = useSelector((state: any) => state.accountDetails);

  return (
    <SettingScreen
      {...{
        navigation,
        ModalVisible,
        setModalVisible,
        profileUri,
        accountDetails,
        Favorites,
        settingButtons,
      }}
    />
  );
};

export default SettingsViewModel;
