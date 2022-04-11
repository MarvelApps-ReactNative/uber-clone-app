import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Seperater, Abutton} from '../../components';
import {ScreenConstent, buttons} from '../../config';
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
        {ScreenConstent.confirmRide.CONFIRM_PICKUP_SPOT}
      </Text>
      <Seperater />
      <View style={styles.subSecondContainer}>
        <Text style={styles.addressText}>{place}</Text>
        <Abutton
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
