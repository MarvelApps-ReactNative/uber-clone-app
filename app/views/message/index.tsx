import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Icon, ScreenConstent} from '../../config';
import styles from './style';

interface MessagesScreenprops {
  navigation: any;
  GoBack: () => any;
}
const MessagesScreen = (props: MessagesScreenprops) => {
  const {navigation, GoBack} = props;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={GoBack}>
          <Image source={Icon.BACK} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.messageText}>
          {ScreenConstent.messagesScreen.MESSAGES}
        </Text>
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.imageContainer}>
            <Image source={Icon.GIFTBOX} style={styles.icon} />
          </View>
          <Text style={styles.couponText}>
            {ScreenConstent.messagesScreen.COUPON}
          </Text>
          <Text style={styles.offerText}>
            {ScreenConstent.messagesScreen.OFFER_TEXT}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MessagesScreen;
