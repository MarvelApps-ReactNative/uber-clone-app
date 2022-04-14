import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Seperator, CommonButton} from '../../components';
import {ScreenConstant, buttons} from '../../config';
import styles from './style';

interface input {
  setItemIndex: any;
  place: string;
  confirmPickup: () => void;
}

const ConfirmPickupScreen = (props: input) => {
  const {setItemIndex, place, confirmPickup} = props;

  return (
    <SafeAreaView style={styles.confirmPickupScreenMainContainer}>
      <Text style={styles.headerText}>
        {ScreenConstant.confirmRide.CONFIRM_PICKUP_SPOT}
      </Text>
      <Seperator />
      <View style={styles.subSecondContainer}>
        <Text style={styles.addressText}>{place}</Text>
        <CommonButton
          title={buttons.CONFIRM_PICKUP}
          onPress={() => {
            setItemIndex(1);
            confirmPickup();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ConfirmPickupScreen;
