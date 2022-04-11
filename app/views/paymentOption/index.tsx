import React from 'react';
import {
  Image,
  SafeAreaView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon, COLORS, ScreenConstent, buttons} from '../../config';
import styles from './style';

interface PaymentOptionsScreenprops {
  navigation: any;
  isEnabled: boolean;
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSwitch: () => void;
  paymentsOption: any;
  GoBack: () => any;
  AddPayment: () => any;
}
const PaymentOptionsScreen = (props: PaymentOptionsScreenprops) => {
  const {
    navigation,
    isEnabled,
    setIsEnabled,
    toggleSwitch,
    paymentsOption,
    GoBack,
    AddPayment,
  } = props;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.flexVertical}>
        <TouchableOpacity onPress={GoBack}>
          <Image source={Icon.CLOSE} style={styles.crossIcons} />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.headingText}>
            {ScreenConstent.paymentOptions.PAYMENT_OPTIONS}
          </Text>
        </View>
        <View style={styles.topButtonContainer}>
          <TouchableOpacity style={styles.button}>
            <Image source={Icon.USER} style={styles.userIcon} />
            <Text style={styles.buttontText}>
              {ScreenConstent.paymentOptions.PERSONAL}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.flex}>
        <Text style={styles.headingParagraphText}>
          {ScreenConstent.paymentOptions.UBER_CASH}
        </Text>
        <View style={styles.boxContainer}>
          <Image source={Icon.UBER} style={styles.smallIcon} />
          <View style={styles.margin}>
            <Text style={styles.smallHeadingText}>
              {ScreenConstent.paymentOptions.UBER_CASH}
            </Text>
            <Text style={styles.smallHeadingText}>$ {paymentsOption.cash}</Text>
          </View>

          <View style={styles.switchContainer}>
            <Switch
              trackColor={{false: COLORS.gray0, true: COLORS.gray0}}
              thumbColor={isEnabled ? COLORS.black : COLORS.white}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <Text style={styles.headingParagraphText}>
          {ScreenConstent.paymentOptions.PAYMENT_METHOD}
        </Text>
        <View style={styles.boxContainer}>
          <Image
            source={paymentsOption.enablePaymentIcon}
            style={styles.smallIcon}
          />
          <View style={styles.margin}>
            <Text style={styles.smallHeadingText}>
              {paymentsOption.enablePayment}
            </Text>
          </View>
          <View style={styles.switchContainer}>
            <Image source={Icon.CORRECT} style={styles.correctIcon} />
          </View>
        </View>
        <TouchableOpacity style={styles.bottomTextMargin} onPress={AddPayment}>
          <Text style={styles.highlightedText}>
            {buttons.ADD_PAYMENT_METHOD}
          </Text>
        </TouchableOpacity>
        <Text style={styles.headingParagraphText}>
          {ScreenConstent.paymentOptions.VOUCHER}
        </Text>
        <TouchableOpacity style={styles.bottomTextVertical}>
          <Text style={styles.highlightedText}>{buttons.ADD_VOUCHER_CODE}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PaymentOptionsScreen;
