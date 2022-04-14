import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {buttons, Icon, ScreenConstant} from '../../config';

import styles from './style';

interface Walletprops {
  paymentsOption: any;
  onPressGoBack: () => any;
  onPress: () => any;
}
const WalletScreen = (props: Walletprops) => {
  const {paymentsOption, onPressGoBack, onPress} = props;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity onPress={onPressGoBack}>
        <Image source={Icon.BACK} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.nameText}>{ScreenConstant.wallet.NAME}</Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.cardContainer}>
          <Text style={styles.titleText}>{ScreenConstant.wallet.UBERCASH}</Text>
          <View style={styles.textContainer}>
            <Text style={styles.cashText}>${paymentsOption.cash}</Text>
            <Image source={Icon.RIGHTARROW} style={styles.icon} />
          </View>
          <View style={styles.giftCardButton}>
            <Text style={styles.giftCardText}>+ </Text>
            <Text style={styles.giftCardText}>{buttons.GIFT_CARD}</Text>
          </View>
        </View>
        <View style={styles.sendGiftCard}>
          <View>
            <Text style={styles.sendGiftText}>{buttons.SEND_A_GIFT}</Text>
            <View style={styles.textContainer}>
              <Text style={styles.descriptionText}>
                {ScreenConstant.wallet.DESCRIPTION}
              </Text>
              <Image source={Icon.GIFTBOX} style={styles.icon} />
            </View>
          </View>
          <View style={styles.sendGiftButton}>
            <Text style={styles.titleText}>{buttons.SEND_A_GIFT}</Text>
          </View>
        </View>

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
          <View style={styles.correctIconContainer}>
            <Image source={Icon.CORRECT} style={styles.correctIcon} />
          </View>
        </View>

        <TouchableOpacity onPress={onPress}>
          <Text style={styles.addPaymentText}>
            {ScreenConstant.wallet.ADD_PAYMENT}
          </Text>
        </TouchableOpacity>
        <View style={styles.seperator} />

        <View>
          <Text style={styles.titleText}>
            {ScreenConstant.wallet.RIDE_PROFILES}
          </Text>
          <View>
            <TouchableOpacity style={styles.buttonContainer}>
              <View style={styles.imageContainer}>
                <Image source={Icon.DRIVER} style={styles.driverIcon} />
              </View>
              <Text style={styles.titleText}>
                {ScreenConstant.wallet.PERSONAL}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <View style={styles.driverIconContainer}>
                <Image source={Icon.WORK} style={styles.driverIcon} />
              </View>
              <View>
                <Text style={styles.startUberText}>
                  {ScreenConstant.wallet.START_UBER}
                </Text>
                <Text style={styles.turnOnText}>
                  {ScreenConstant.wallet.TURN_ON}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.seperator} />
          <Text style={styles.titleText}>{ScreenConstant.wallet.VOUCHERS}</Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <View style={styles.imageContainer}>
              <Image source={Icon.DRIVER} style={styles.driverIcon} />
            </View>
            <Text style={styles.titleText}>
              {ScreenConstant.wallet.VOUCHERS}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WalletScreen;
