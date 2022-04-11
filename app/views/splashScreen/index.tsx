import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {constants} from '../../config';
import styles from './style';

interface SplashScreenprops {
  navigation: any;
}
const SplashScreen = (props: SplashScreenprops) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.uberText}>{constants.UBER}</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
