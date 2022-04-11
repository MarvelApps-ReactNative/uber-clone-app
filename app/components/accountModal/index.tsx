import React, {useEffect, useState} from 'react';
import {
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {buttons, COLORS, editAccountFields, Icon} from '../../config';
import {AccountDetails} from '../../models';
import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode} from 'react-native-country-picker-modal';
import {useDispatch} from 'react-redux';
import {setCountryCode, setFlag} from '../../redux/actions';
import styles from './style';

interface AccountModalprops {
  navigation: any;
  modalVisible: boolean;
  setModalVisible: (v: boolean) => void;
  index: number;
  accountDetails: AccountDetails;
  getAccountInfoByIndex: (v: number) => string | undefined | object;
  modalInput: string;
  setModalInput: (v: string) => void;
  onSave: () => void;
}
const AccountModal = (props: AccountModalprops) => {
  const {
    navigation,
    modalVisible,
    setModalVisible,
    index,
    accountDetails,
    getAccountInfoByIndex,
    modalInput,
    setModalInput,
    onSave,
  } = props;
  const [flag1, setFlag1] = useState<CountryCode>(accountDetails.flag);
  const dispatch = useDispatch();

  useEffect(() => {}, [flag1]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.modalcontainer}>
        <View style={styles.submodalcontainer}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Image source={Icon.BACK} style={styles.backButton} />
          </TouchableOpacity>
          <Text style={styles.titleText}>{editAccountFields[index].Text}</Text>
          <View style={styles.textInputContainer}>
            {index === 2 && (
              <CountryPicker
                withFlagButton
                withCallingCode
                withFilter
                withAlphaFilter
                countryCode={flag1}
                visible={false}
                onSelect={country => {
                  dispatch(setCountryCode(country.callingCode.toString()));
                  dispatch(setFlag(country.cca2));
                  setFlag1(country.cca2);
                }}
              />
            )}
            {index === 2 && (
              <Text style={styles.countryCodeText}>
                {accountDetails.country_code
                  ? '+' + accountDetails.country_code
                  : '+91'}
              </Text>
            )}
            <TextInput
              style={index === 2 ? styles.textInputNumber : styles.textInput}
              onChangeText={(text: string) => setModalInput(text)}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              onSave();
              setModalVisible(false);
            }}
            style={styles.button}>
            <Text style={styles.saveText}>{buttons.SAVE}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AccountModal;
