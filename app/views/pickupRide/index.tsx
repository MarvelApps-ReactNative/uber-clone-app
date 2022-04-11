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
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {Seperater} from '../../components';
import {APIKEY, buttons, Icon, ScreenConstent, Screens} from '../../config';
import {rideInfoDataType} from '../../models';
import styles from './style';

interface PickRideScreenprops {
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
  rideInfostate: rideInfoDataType;
  navigateToHome: any;
  PaymentOption: () => any;
}
const PickRideScreen = (props: PickRideScreenprops) => {
  const {
    navigation,
    rideInfo,
    destination,
    dropdown,
    panResponder,
    viewPosition,
    rideInfostate,
    navigateToHome,
    PaymentOption,
  } = props;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.firstContainer}>
        <MapView
          style={styles.mapStyle}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          initialRegion={{
            latitude: rideInfostate.originCoord.lat,
            longitude: rideInfostate.originCoord.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <MapViewDirections
            origin={{
              latitude: rideInfostate.originCoord.lat,
              longitude: rideInfostate.originCoord.lng,
            }}
            destination={{
              latitude: rideInfostate.destinationCoord.lat,
              longitude: rideInfostate.destinationCoord.lng,
            }}
            apikey={APIKEY}
            strokeWidth={4}
            strokeColor="#111111"
          />
          <Marker
            coordinate={{
              latitude: rideInfostate.originCoord.lat,
              longitude: rideInfostate.originCoord.lng,
            }}>
            <View style={styles.customMarker}>
              <Text style={styles.markertext}>{rideInfostate.originName}</Text>
              <Image source={Icon.RIGHTARROW} style={styles.markerImage} />
            </View>
            <Image source={Icon.LOCATION} style={styles.MarkerLocator} />
          </Marker>

          <Marker
            coordinate={{
              latitude: rideInfostate.destinationCoord.lat,
              longitude: rideInfostate.destinationCoord.lng,
            }}>
            <Image source={Icon.TOPUBERX} style={styles.carImageStyle} />
          </Marker>
        </MapView>
      </View>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.secondContainer,
          {
            transform: [{translateY: viewPosition}],
          },
        ]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.subSecondMainContainer}>
            <View style={styles.smallLine} />
            <View style={styles.boxContainer}>
              <Text style={styles.headingText}>
                {ScreenConstent.pickupRide.MEET_AT_PICKUP_POINT}
              </Text>
              <View style={styles.blackBox}>
                <Text style={styles.text}>
                  {ScreenConstent.startTrip.BANNER_TIME}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.elevationLine} />
          <View style={styles.subSecondContainer}>
            <View style={styles.boxContainer}>
              <Image source={Icon.CAR} style={styles.carImage} />
              <View>
                <Text style={styles.carNumberText}>{rideInfo.car_number}</Text>
                <Text style={styles.paragraph}>{rideInfo.car_model}</Text>
              </View>
            </View>
            <Text style={styles.knowYourDriverText}>
              {rideInfo.driver_name} Knows {rideInfo.languages}
            </Text>
            <View>
              <View style={styles.boxContainer}>
                <View style={styles.textbox}>
                  <Text style={styles.messageText}>
                    Message {rideInfo.driver_name}
                  </Text>
                </View>
                <View style={styles.imageContainer}>
                  <Image source={Icon.CALL} style={styles.smallIcon} />
                </View>
                <View style={styles.imageContainer}>
                  <Image source={Icon.SUN} style={styles.smallIcon} />
                </View>
              </View>
            </View>
          </View>
          <Seperater />

          <View style={styles.subSecondContainer}>
            <TouchableOpacity style={styles.BannerContainer}>
              <View style={styles.bannerTextContainer}>
                <Text style={styles.bannerText}>
                  {ScreenConstent.home.WELCOME_TO_UBER}
                </Text>
                <Text style={styles.rideText}>
                  {ScreenConstent.home.RIDE_WITH_UBER}
                </Text>
              </View>
              <Image source={Icon.KEYCHAIN} style={styles.banner} />
            </TouchableOpacity>
          </View>
          <Seperater />
          <View style={styles.subSecondContainer}>
            <View style={styles.listItemContainer}>
              <View style={styles.textContainer}>
                <Image source={Icon.LOCATION} style={styles.listItemIcon} />
                <View>
                  <Text style={styles.paragraph}>{destination}</Text>
                  <Text style={styles.textColor}>{dropdown}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.align}>
                <Text style={styles.buttonText}>{buttons.ADD_OR_CHANGE}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Seperater />
          <View style={styles.subSecondContainer}>
            <View style={styles.listItemContainer}>
              <View style={styles.textContainer}>
                <Image source={Icon.USER} style={styles.listItemIcon} />
                <View>
                  <Text style={styles.paragraph}>
                    {ScreenConstent.pickupRide.AMOUNT}
                  </Text>
                  <Text style={styles.textColor}>
                    {ScreenConstent.pickupRide.PAYTM}
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.align} onPress={PaymentOption}>
                <Text style={styles.buttonText}>{buttons.SWITCH}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Seperater />
          <View style={styles.subSecondContainer}>
            <View style={styles.listItemContainer}>
              <View style={styles.textContainer}>
                <Image source={Icon.ARROWS} style={styles.listItemIcon} />
                <Text style={styles.paragraph}>
                  {ScreenConstent.pickupRide.RIDING_WITH_SOMEONE}
                </Text>
              </View>
              <TouchableOpacity style={styles.align}>
                <Text style={styles.buttonText}>{buttons.SPLIT_FARE}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Seperater />
          <View style={styles.subFooterContainer}>
            <View style={styles.listItemContainer}>
              <View style={styles.textContainer}>
                <Image source={Icon.LOCATION} style={styles.listItemIcon} />
                <Text style={styles.paragraph}>
                  {ScreenConstent.pickupRide.SHARE_TRIP_STATUS}
                </Text>
              </View>
              <TouchableOpacity style={styles.align}>
                <Text style={styles.buttonText}>{buttons.SHARE}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footerButtonContainer}>
              <TouchableOpacity style={styles.button} onPress={navigateToHome}>
                <Text style={styles.cancelText}>{buttons.CANCEL}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{buttons.SAFETY}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};

export default PickRideScreen;
