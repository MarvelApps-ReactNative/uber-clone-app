import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Header} from '../../components';
import {ScreenConstent} from '../../config';
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
      <Header Title={ScreenConstent.addPayment.ADD_PAYMENT} />
      <View style={styles.subContainer}>
        {paymentMethods.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => {
                dispatchReduxData(item.label, 'label');
                dispatchReduxData(item.icon, 'icon');
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
