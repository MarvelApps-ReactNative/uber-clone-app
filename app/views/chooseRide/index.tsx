import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Icon, ScreenConstent, Screens} from '../../config';
import styles from './style';

interface ChooseRideprops {
  navigation: any;
  PaymentOptionScreen: () => any;
}
const ChooseRide = (props: ChooseRideprops) => {
  const {navigation, PaymentOptionScreen} = props;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={Icon.DOWN} style={styles.headerIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          {ScreenConstent.chooseRide.CHOOSE_A_RIDE}
        </Text>
      </View>
      <View style={styles.flex}>
        <TouchableOpacity style={styles.ChooseCarButtonText}>
          <View style={styles.imageTextContainer}>
            <Image source={Icon.CAR} style={styles.carIcon} />
            <View>
              <Text style={styles.buttonText}>
                {ScreenConstent.chooseRide.UBER_GO}
              </Text>
              <Text style={styles.buttonSubText}>
                {ScreenConstent.chooseRide.TIME}
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.buttonText}>
              ${ScreenConstent.chooseRide.AMOUNT}
            </Text>
            <Text style={styles.buttonSubText}>
              {ScreenConstent.chooseRide.NEXT_AMOUNT}
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
              {ScreenConstent.chooseRide.CASH}
            </Text>
          </View>
          <Image source={Icon.RIGHTARROW} style={styles.moneyIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChooseRide;
