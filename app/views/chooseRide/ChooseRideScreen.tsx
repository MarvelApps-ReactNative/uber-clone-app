import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Icon, ScreenConstant} from '../../config';
import styles from './style';

interface ChooseRideprops {
  navigation: any;
  PaymentOptionScreen: () => any;
}
const ChooseRideScreen = (props: ChooseRideprops) => {
  const {navigation, PaymentOptionScreen} = props;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={Icon.DOWN} style={styles.headerIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          {ScreenConstant.chooseRide.CHOOSE_A_RIDE}
        </Text>
      </View>
      <View style={styles.flex}>
        <TouchableOpacity style={styles.ChooseCarButtonText}>
          <View style={styles.imageTextContainer}>
            <Image source={Icon.CAR} style={styles.carIcon} />
            <View>
              <Text style={styles.buttonText}>
                {ScreenConstant.chooseRide.UBER_GO}
              </Text>
              <Text style={styles.buttonSubText}>
                {ScreenConstant.chooseRide.TIME}
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.buttonText}>
              ${ScreenConstant.chooseRide.AMOUNT}
            </Text>
            <Text style={styles.buttonSubText}>
              {ScreenConstant.chooseRide.NEXT_AMOUNT}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.payementButton}
          onPress={PaymentOptionScreen}>
          <View style={styles.imageTextContainer}>
            <Image source={Icon.CASH} style={styles.moneyIcon} />
            <Text style={styles.paymentButtonText}>
              {ScreenConstant.chooseRide.CASH}
            </Text>
          </View>
          <Image source={Icon.RIGHTARROW} style={styles.moneyIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChooseRideScreen;
