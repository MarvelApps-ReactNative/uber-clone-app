import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Header} from '../../components';
import {ScreenConstant} from '../../config';
import styles from './style';

interface AddPaymentScreenprops {
  navigation: any;
  dispatchReduxData: (props: any, type: string) => void;
  paymentMethods: {
    icon: any;
    label: string;
  }[];
}
const AddPaymentScreen = (props: AddPaymentScreenprops) => {
  const {navigation, dispatchReduxData, paymentMethods} = props;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header Title={ScreenConstant.addPayment.ADD_PAYMENT} />
      <View style={styles.subContainer}>
        {paymentMethods.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => {
                dispatchReduxData(item.label, ScreenConstant.addPayment.LABEL);
                dispatchReduxData(item.icon, ScreenConstant.addPayment.ICON);
              }}>
              <Image source={item.icon} style={styles.icons} />
              <Text style={styles.buttonText}>{item.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default AddPaymentScreen;
