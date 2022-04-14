import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {constants, Icon} from '../../config';
import {AccountDetails} from '../../models';
import styles from './style';

interface userprofileprops {
  navigation: any;
  profileList: {
    image: any;
    name: string;
    route: string;
  }[];
  UserProfile: {
    image: any;
    name: string;
    route: string;
  }[];
  profileUri: string;
  accountDetails: AccountDetails;
  onPressHomeScreen: () => any;
  onPressEditAccount: () => any;
}
const UserProfileScreen = (props: userprofileprops) => {
  const {
    navigation,
    profileList,
    UserProfile,
    profileUri,
    accountDetails,
    onPressHomeScreen,
    onPressEditAccount,
  } = props;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.paddingContainer}>
        <TouchableOpacity onPress={onPressHomeScreen}>
          <Image source={Icon.CLOSE} style={styles.closeIcon} />
        </TouchableOpacity>
        <View style={styles.header}>
          <View>
            <Text style={styles.userNameText} numberOfLines={2}>
              {accountDetails.first_name} {accountDetails.last_name}
            </Text>
            <View style={styles.ratingContainer}>
              <Image source={Icon.STAR} style={styles.smallIcon}></Image>
              <Text style={styles.ratingText}>5.0</Text>
            </View>
          </View>
          <TouchableOpacity onPress={onPressEditAccount}>
            <Image
              source={profileUri ? {uri: profileUri} : Icon.PROFILE}
              style={styles.userIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.boxContainer}>
          {UserProfile.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate(item.route)}
                key={index}
                style={styles.boxStyle}>
                <Image source={item.image} style={styles.lightIcon} />
                <Text style={styles.bodyText}>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View style={styles.seperator} />

      <View style={styles.paddingContainer}>
        {profileList.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.list}
              onPress={() =>
                item.route ? navigation.navigate(item.route) : null
              }>
              <Image source={item.image} style={styles.icons} />
              <Text style={styles.listItem}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Text style={styles.versionText}>{constants.VERSION}</Text>
    </SafeAreaView>
  );
};

export default UserProfileScreen;
