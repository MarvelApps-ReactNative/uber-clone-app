import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Seperator} from '../../components';
import {AnimationType, buttons, Icon, ScreenConstant} from '../../config';
import {RideInfoDataType} from '../../models';
import LottieView from 'lottie-react-native';
import styles from './style';

interface input {
  setItemIndex: any;
  rideInfo: RideInfoDataType;
  formate_time: string;
  PaymentMethod: any;
  GotoNextScreen: any;
}

const ConfirmScreen = (props: input) => {
  const {setItemIndex, rideInfo, formate_time, PaymentMethod, GotoNextScreen} =
    props;
  return (
    <SafeAreaView style={styles.subSecondContainer}>
      <View style={styles.header} />
      <Text style={styles.headingText}>
        {ScreenConstant.confirmRide.CONNECTING_YOU_TO_DRIVER}
      </Text>
      <Seperator />
      <View style={styles.progressIndicatorContainer}>
        <LottieView
          source={AnimationType.CAR_LOADING}
          style={styles.carLoadingAnimation}
          autoPlay
        />
      </View>
      <View style={styles.middleContainer}>
        <LottieView
          source={AnimationType.ANIMATED_MARKER}
          style={styles.markerAnimation}
          autoPlay
        />
        <Text style={styles.addressText}>
          {ScreenConstant.confirmRide.DROPOFF_BY} {formate_time}
        </Text>
      </View>
      <Seperator />
      <View style={styles.flexDirection}>
        <View style={styles.textContainer}>
          <Image source={Icon.LOCATION} style={styles.smallIcon} />
          <Text style={styles.addressText}>{rideInfo.destinationName}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.listButtonText}>
            {ScreenConstant.confirmRide.ADD_OR_CHANGE}
          </Text>
        </TouchableOpacity>
      </View>
      <Seperator />
      <View style={styles.flexDirection}>
        <View style={styles.textContainer}>
          <Image source={Icon.USER} style={styles.smallIcon} />
          <Text style={styles.addressText}>{PaymentMethod.enablePayment}</Text>
        </View>
        <TouchableOpacity onPress={GotoNextScreen}>
          <Text style={styles.listButtonText}>
            {ScreenConstant.confirmRide.SWITCH}
          </Text>
        </TouchableOpacity>
      </View>
      <Seperator />
      <TouchableOpacity>
        <Text style={styles.headingText}>{buttons.CANCEL}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ConfirmScreen;
