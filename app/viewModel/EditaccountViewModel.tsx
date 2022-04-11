import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {
  setFirstName,
  setLastName,
  setNumber,
  setPassword,
  setEmail,
  setProfileImage,
} from '../redux/actions';
import { editAccountFields } from '../config';
import EditAccount from '../views/editAccount';

const EditAccountViewModel = ({navigation}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const profileUri = useSelector((state: any) => state.profileImage);
  const accountDetails = useSelector((state: any) => state.accountDetails);
  const dispatch = useDispatch();
  const [accountIndex, setAccountIndex] = useState<number>(0);
  const [modalInput, setModalInput] = useState<string>('');

  async function chooseImage() {
    const result = await launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      () => {},
    );

    if (result.didCancel) {
      console.log('User cancelled image picker');
    } else if (result.errorMessage) {
      console.log('ImagePicker Error: ', result.errorMessage);
    } else {
      const source = {uri: result?.assets[0]?.uri};
      dispatch(setProfileImage(source.uri));
    }
  }

  const getAccountInfoByIndex = (index: number) => {
    switch (index) {
      case 0:
        return accountDetails.first_name;
      case 1:
        return accountDetails.last_name;
      case 2:
        return accountDetails.number;
      case 3:
        return accountDetails.email;
      case 4:
        return accountDetails.password;
      case 5:
        return accountDetails.country_code;
      case 6:
        return accountDetails.flag;
    }
  };

  const updateAccountDetails = () => {
    switch (accountIndex) {
      case 0:
        dispatch(setFirstName(modalInput));
        break;
      case 1:
        dispatch(setLastName(modalInput));
        break;
      case 2:
        dispatch(setNumber(modalInput));
        break;
      case 3:
        dispatch(setEmail(modalInput));
        break;
      case 4:
        dispatch(setPassword(modalInput));
        break;
    }
  };

  return (
    <EditAccount
      {...{
        navigation,
        modalVisible,
        setModalVisible,
        profileUri,
        chooseImage: () => chooseImage(),
        accountDetails,
        accountIndex,
        setAccountIndex: (v: number) => setAccountIndex(v),
        modalInput,
        setModalInput: (v: string) => setModalInput(v),
        onSave: () => updateAccountDetails(),
        getAccountInfoByIndex: (index: number) => getAccountInfoByIndex(index),
        editAccountFields
      }}
    />
  );
};

export default EditAccountViewModel;
