import React, {useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header, Seperater, AccountModal} from '../../components';
import {Icon, ScreenConstent} from '../../config';
import {AccountDetails} from '../../models';
import CountryPicker from 'react-native-country-picker-modal';
import styles from './style';

interface EditAccountprops {
  navigation: any;
  modalVisible: boolean;
  setModalVisible: (v: boolean) => void;
  chooseImage: () => void;
  profileUri: string;
  accountDetails: AccountDetails;
  accountIndex: number;
  setAccountIndex: (v: number) => void;
  modalInput: string;
  setModalInput: (v: string) => void;
  onSave: () => void;
  getAccountInfoByIndex: (index: number) => object;
  editAccountFields: {
    Text: string;
    subtext: string;
    verify: boolean;
  }[];
}
const EditAccount = (props: EditAccountprops) => {
  const {
    navigation,
    profileUri,
    modalVisible,
    setModalVisible,
    chooseImage,
    accountDetails,
    accountIndex,
    setAccountIndex,
    modalInput,
    setModalInput,
    onSave,
    getAccountInfoByIndex,
    editAccountFields,
  } = props;

  useEffect(() => {}, [profileUri, accountDetails]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <Header Title={ScreenConstent.editAccount.EDIT_ACCOUNT} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.secondContainer}>
          <View style={styles.userContainer}>
            <TouchableOpacity onPress={() => chooseImage()}>
              <Image
                source={profileUri ? {uri: profileUri} : Icon.PROFILE}
                style={styles.icon}
              />
              <View style={styles.editIconContainer}>
                <Image source={Icon.PENCIL} style={styles.editIcon} />
              </View>
            </TouchableOpacity>
          </View>
          <Seperater />
          <View style={styles.subConatiner}>
            {editAccountFields.map((item, index) => {
              return (
                <View key={index}>
                  <TouchableOpacity
                    onPress={() => {
                      setAccountIndex(index);
                      setModalVisible(true);
                    }}
                    style={styles.buttonContainer}>
                    <View>
                      <Text style={styles.titleText}>{item.Text}</Text>
                      <View style={styles.subTextContainer}>
                        {item.Text === 'Phone Number' && (
                          <CountryPicker
                            withFlagButton
                            withCallingCode
                            withFilter
                            withAlphaFilter
                            countryCode={accountDetails.flag}
                            visible={false}
                          />
                        )}
                        {item.Text === 'Phone Number' && (
                          <Text style={styles.inputText}>
                            {getAccountInfoByIndex(5)
                              ? '+' + getAccountInfoByIndex(5) + '-'
                              : '+91-'}
                          </Text>
                        )}
                        <Text style={styles.inputText}>
                          {getAccountInfoByIndex(index)
                            ? getAccountInfoByIndex(index)
                            : item.subtext}
                        </Text>
                      </View>
                    </View>
                    {item.verify && (
                      <Text style={styles.verificationText}>
                        {ScreenConstent.editAccount.VERIFIED}
                      </Text>
                    )}
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.footerItemContainer}>
              <View style={styles.footerItemSub}>
                <Image source={Icon.GOOGLE} style={styles.googleImage} />
                <Text style={styles.footerItemText}>
                  {ScreenConstent.editAccount.GOOGLE}
                </Text>
              </View>
              <Text style={styles.footerConnectionText}>
                {ScreenConstent.editAccount.CONNECTED}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItemContainer}>
              <View style={styles.footerItemSub}>
                <Image source={Icon.FACEBOOK} style={styles.googleImage} />
                <Text style={styles.footerItemText}>
                  {ScreenConstent.editAccount.FACEBOOK}
                </Text>
              </View>
              <Text style={styles.footerConnectionText}>
                {ScreenConstent.editAccount.CONNECTED}
              </Text>
            </TouchableOpacity>
          </View>

          <AccountModal
            navigation={navigation}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            index={accountIndex}
            accountDetails={accountDetails}
            getAccountInfoByIndex={getAccountInfoByIndex}
            modalInput={modalInput}
            setModalInput={setModalInput}
            onSave={onSave}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default EditAccount;
