import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Abutton, Header} from '../../components';
import {buttons, ScreenConstent} from '../../config';
import styles from './style';

interface CashPayprops {
  navigation: any;
}
const CashPay = (props: CashPayprops) => {
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header Title={ScreenConstent.cashPay.CASH} />
      <View style={styles.viewContainer}>
        <View>
          <Text style={styles.text}>
            {ScreenConstent.cashPay.YOU_HAVENT_TAKEN_A_TRIP_YET}
          </Text>
          <Text style={styles.subText}>
            {ScreenConstent.cashPay.YOUR_DRIVER_PHONE_WILL}
          </Text>
        </View>
        <Abutton title={buttons.NEXT} onPress={undefined} />
      </View>
    </SafeAreaView>
  );
};

export default CashPay;
