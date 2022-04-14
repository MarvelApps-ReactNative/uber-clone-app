import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {CommonButton, Header} from '../../components';
import {buttons, ScreenConstant} from '../../config';
import {NavigationProp} from '../../models';
import styles from './style';

const CashPayScreen = (props: NavigationProp) => {
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header Title={ScreenConstant.cashPay.CASH} />
      <View style={styles.viewContainer}>
        <View>
          <Text style={styles.text}>
            {ScreenConstant.cashPay.YOU_HAVENT_TAKEN_A_TRIP_YET}
          </Text>
          <Text style={styles.subText}>
            {ScreenConstant.cashPay.YOUR_DRIVER_PHONE_WILL}
          </Text>
        </View>
        <CommonButton title={buttons.NEXT} onPress={undefined} />
      </View>
    </SafeAreaView>
  );
};

export default CashPayScreen;
