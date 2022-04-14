import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {FacebookLogin, GoogleLogIn} from '../../common';
import { Seperator } from '../../components';

import {buttons, COLORS, Icon, ScreenConstant} from '../../config';
import styles from './style';

interface LoginScreenprops {
  navigation: any;
  HomeScreen: () => any;
}
const LoginScreen = (props: LoginScreenprops) => {
  const {navigation, HomeScreen} = props;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mobileTitleText}>
        {ScreenConstant.login.ENTER_NUMBER}
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Image source={Icon.LOCATION} style={styles.icon} />
          <Image source={Icon.DOWN} style={styles.smallIcon} />
        </View>
        <TextInput
          style={styles.inputTextStyle}
          placeholder={ScreenConstant.login.MOBILE_NUMBER}
          placeholderTextColor={COLORS.darkGray}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={HomeScreen}>
        <View style={styles.textContainer}>
          <View style={styles.textFlex}>
            <Text style={styles.buttonText}>{buttons.NEXT}</Text>
          </View>
          <Image source={Icon.NEXT} style={styles.nextIcon} />
        </View>
      </TouchableOpacity>
      <Text style={styles.description}>{ScreenConstant.login.DESCRIPTION}</Text>
      <View style={styles.divider}>
        <Seperator />
        <Text style={styles.orText}>{ScreenConstant.login.OR}</Text>
        <Seperator />
      </View>
      <TouchableOpacity style={styles.socialButton} onPress={FacebookLogin}>
        <Image source={Icon.FACEBOOK} style={styles.socialIcon} />
        <Text style={styles.socialButtonText}>{buttons.FACEBOOK}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton} onPress={GoogleLogIn}>
        <Image source={Icon.GOOGLE} style={styles.socialIcon} />
        <Text style={styles.socialButtonText}>{buttons.GOOGLE}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
