import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {CommonButton} from '../../components';
import {
  AnimationType,
  buttons,
  CovidMessage,
  ScreenConstant,
} from '../../config';
import LottieView from 'lottie-react-native';
import styles from './style';

interface input {
  setItemIndex: any;
}

const CovideMessageScreen = (props: input) => {
  const {setItemIndex} = props;

  return (
    <SafeAreaView style={styles.subSecondContainer}>
      <Text style={styles.headingText}>
        {ScreenConstant.covidMessage.HELP_KEEP_YOUR_COMMUNITY_SAFE}
      </Text>
      <LottieView
        source={AnimationType.COVID_SAFETY}
        style={styles.covidSafetyAnimation}
        autoPlay
      />
      {CovidMessage.map((item, index) => {
        return (
          <View key={index} style={styles.textContainer}>
            <View style={styles.bullets}>
              <Text style={styles.bulletText}>{index + 1}</Text>
            </View>
            <Text style={styles.text}>{item.message}</Text>
          </View>
        );
      })}
      <CommonButton
        title={buttons.READY_TO_RIDE}
        onPress={() => setItemIndex(2)}
      />
    </SafeAreaView>
  );
};

export default CovideMessageScreen;
