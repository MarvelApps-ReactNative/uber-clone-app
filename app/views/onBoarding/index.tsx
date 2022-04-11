import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {AnimationType, Icon} from '../../config';
import {onboarding} from '../../config/Constant';
import LottieView from 'lottie-react-native';
import styles from './style';

interface Onboardingscreenprops {
  navigation: any;
  LoginScreen: () => any;
}
const Onboardingscreen = (props: Onboardingscreenprops) => {
  const {navigation, LoginScreen} = props;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Image source={Icon.UBER_LOGO} style={styles.uberLogo} />
        <LottieView
          source={AnimationType.FACE_MASK}
          style={styles.covidSafetyAnimation}
          autoPlay
        />
        <Text style={styles.headingText}>{onboarding.MOVE_WITH_SAFETY}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={LoginScreen}>
        <Text style={styles.buttonText}>{onboarding.GET_STARTED}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Onboardingscreen;
