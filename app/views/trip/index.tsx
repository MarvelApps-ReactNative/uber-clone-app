import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Header} from '../../components';
import {Icon, ScreenConstent} from '../../config';
import styles from './style';

interface TripScreenprops {
  navigation: any;
}
const TripScreen = (props: TripScreenprops) => {
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header Title={ScreenConstent.trip.CHOOSE_A_TRIP} />
      <View style={styles.viewContainer}>
        <Text style={styles.text}>
          {ScreenConstent.trip.YOU_HAVENT_TAKEN_A_TRIP_YET}
        </Text>

        <View style={styles.button}>
          <Text style={styles.retryText}>{ScreenConstent.trip.RETRY}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.topButton}>
        <Text style={styles.buttonText}>{ScreenConstent.trip.PAST}</Text>
        <Image source={Icon.DOWN} style={styles.icon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TripScreen;
