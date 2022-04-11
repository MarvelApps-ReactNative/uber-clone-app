import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header} from '../../components';
import {buttons, Icon, ScreenConstent} from '../../config';
import {AccountDetails} from '../../models';
import SettingModal from './SettingModal';
import styles from './style';

interface SettingScreenprops {
  navigation: any;
  ModalVisible: boolean;
  setModalVisible: any;
  profileUri: any;
  accountDetails: AccountDetails;
  Favorites: {
    icon: any;
    name: string;
  }[];
  settingButtons: {
    text: string;
    subText: string;
  }[];
}
const SettingScreen = (props: SettingScreenprops) => {
  const {
    navigation,
    ModalVisible,
    setModalVisible,
    profileUri,
    accountDetails,
    Favorites,
    settingButtons,
  } = props;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header Title={ScreenConstent.settings.ACCOUNT_SETTINGS} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.secondContainer}>
        <TouchableOpacity style={styles.userContainer}>
          <Image
            source={profileUri ? {uri: profileUri} : Icon.PROFILE}
            style={styles.icon}
          />
          <View style={styles.userTextConatiner}>
            <Text style={styles.nameText}>
              {accountDetails.first_name} {accountDetails.last_name}
            </Text>
            <Text style={styles.nameText}>{accountDetails.number}</Text>
            <Text style={styles.nameText}>{accountDetails.email}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.seperator} />
        <View style={styles.subConatiner}>
          <Text style={styles.favouriteText}>
            {ScreenConstent.settings.FAVOURITE}
          </Text>
          {Favorites.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={styles.buttonContainer}>
                <Image source={item.icon} style={styles.smallIcon} />
                <View style={styles.userTextConatiner}>
                  <Text style={styles.nameText}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.seperator} />
        <View style={styles.subConatiner}>
          <Text style={styles.favouriteText}>
            {ScreenConstent.settings.TRUSTED_CONTACTS}
          </Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Image source={Icon.SHIELD} style={styles.smallIcon} />
            <View style={styles.userTextConatiner}>
              <Text style={styles.nameText}>
                {ScreenConstent.settings.MANAGE_TRUSTED_CONTACTS}
              </Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.paragraphText}>
            {ScreenConstent.settings.SHARE_YOUR_TRIP}
          </Text>
        </View>
        <View style={styles.seperator} />

        {settingButtons.map((item, index) => {
          return (
            <View key={index}>
              <TouchableOpacity style={styles.subConatiner}>
                <Text style={styles.nameText}>{item.text}</Text>
                <Text style={styles.paragraphText}>{item.subText}</Text>
              </TouchableOpacity>
              <View style={styles.seperator} />
            </View>
          );
        })}
        <View style={styles.signOutContainer}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.nameText}>{buttons.SIGN_OUT}</Text>
          </TouchableOpacity>
        </View>
        <SettingModal
          navigation={navigation}
          ModalVisible={ModalVisible}
          setModalVisible={setModalVisible}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;
