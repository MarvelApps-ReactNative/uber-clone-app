import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {alertMessage} from '../../config/Constant';
import {AnimationType} from '../../config';
import LottieView from 'lottie-react-native';
import styles from './styles';

interface AlertMessageProps {
  navigation: any;
  onPressButton: () => any;
}

const AlertScreen = (props: AlertMessageProps) => {
  const {navigation, onPressButton} = props;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.marginContainer}>
        <View>
          <LottieView
            source={AnimationType.SLEEPING_CAT}
            style={styles.animationStyle}
            autoPlay
          />
          <Text style={styles.messageText}>{alertMessage.ALERT_MESSAGE}</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={onPressButton}>
          <Text style={styles.okText}>{alertMessage.OK}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default AlertScreen;
