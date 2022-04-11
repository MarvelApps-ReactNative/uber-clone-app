import React from 'react';
import {
  Animated,
  Image,
  PanResponderInstance,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {BackButton, Seperater} from '../../components';
import {buttons, Icon, ScreenConstent} from '../../config';
import styles from './style';

interface StartTripScreenprops {
  navigation: any;
  rideInfo: {
    driver_name: string;
    car_model: string;
    car_type: string;
    car_number: string;
    languages: string;
    phone_no: string;
  };
  destination: string;
  dropdown: string;
  panResponder: PanResponderInstance;
  viewPosition: Animated.Value;
  tipsData: number[];
  onPressPaymentOption: () => any;
}
const StartTripScreen = (props: StartTripScreenprops) => {
  const {
    navigation,
    rideInfo,
    destination,
    dropdown,
    panResponder,
    viewPosition,
    tipsData,
    onPressPaymentOption,
  } = props;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.firstContainer}>
        <MapView
          style={styles.mapStyle}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          initialRegion={{
            latitude: 28.5995001,
            longitude: 77.3315623,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}></MapView>
        <BackButton />
        <View style={styles.markerContainer}>
          <Image source={Icon.LOCATION} style={styles.marker} />
        </View>
      </View>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.secondContainer,
          {
            transform: [{translateY: viewPosition}],
          },
        ]}>
        <View style={styles.subSecondContainer}>
          <View style={styles.boxContainer}>
            <Text style={styles.headingText}>
              {ScreenConstent.startTrip.HEADING_TO} {destination}
            </Text>
            <View style={styles.blackBox}>
              <Text style={styles.text}>
                {ScreenConstent.startTrip.BANNER_TIME}
              </Text>
            </View>
          </View>
          <Seperater />
          <ScrollView>
            <View style={styles.boxContainer}>
              <View>
                <Text style={styles.headingText}>
                  {ScreenConstent.startTrip.TIP} {rideInfo.driver_name}
                </Text>
                <Text style={styles.paragraphText}>
                  {ScreenConstent.startTrip.TRIP_DELIVER_TEXT}
                </Text>
              </View>
              <Image source={Icon.CAR} style={styles.carImage} />
            </View>
            <View style={styles.tripContainer}>
              {tipsData.map((item, index) => {
                return (
                  <View key={index} style={styles.imageContainer}>
                    <Text>{item}</Text>
                  </View>
                );
              })}
            </View>
            <Seperater />
            <View style={styles.listItemContainer}>
              <View style={styles.textContainer}>
                <Image source={Icon.LOCATION} style={styles.listItemIcon} />
                <View>
                  <Text style={styles.paragraphText}>{destination}</Text>
                  <Text>{dropdown}</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Text style={styles.buttonText}>{buttons.ADD_OR_CHANGE}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.listItemContainer}>
              <View style={styles.textContainer}>
                <Image source={Icon.USER} style={styles.listItemIcon} />
                <View>
                  <Text style={styles.paragraphText}>
                    {ScreenConstent.pickupRide.AMOUNT}
                  </Text>
                  <Text>{ScreenConstent.pickupRide.PAYTM}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={onPressPaymentOption}>
                <Text style={styles.buttonText}>{buttons.SWITCH}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.listItemContainer}>
              <View style={styles.textContainer}>
                <Image source={Icon.ARROWS} style={styles.listItemIcon} />
                <Text style={styles.paragraphText}>
                  {ScreenConstent.pickupRide.RIDING_WITH_SOMEONE}
                </Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.buttonText}>{buttons.SPLIT_FARE}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.listItemContainer}>
              <View style={styles.textContainer}>
                <Image source={Icon.LOCATION} style={styles.listItemIcon} />
                <Text style={styles.paragraphText}>
                  {ScreenConstent.pickupRide.SHARE_TRIP_STATUS}
                </Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.buttonText}>{buttons.SHARE}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.paragraphText}>{buttons.CANCEL}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{buttons.SAFETY}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default StartTripScreen;
