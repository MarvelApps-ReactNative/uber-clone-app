import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {ScheduleRideModal} from '../../components';
import {Icon, ScreenConstent} from '../../config';
import {LocationDataType} from '../../models';
import styles from './style';

interface Homepageprops {
  navigation: any;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  LocationData: React.MutableRefObject<LocationDataType>;
  mapRef: React.RefObject<MapView>;
  profileUri: string;
  RideType: {
    name: string;
    image: any;
  }[];
  Buttons: {
    icon: any;
    name: string;
  }[];
  UserProfileScreen: () => any;
  SearchScreen: () => any;
}

const Homepage = (props: Homepageprops) => {
  const {
    navigation,
    visible,
    setVisible,
    LocationData,
    mapRef,
    profileUri,
    RideType,
    Buttons,
    UserProfileScreen,
    SearchScreen,
  } = props;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScheduleRideModal
          visible={visible}
          setVisible={setVisible}
          navigation={navigation}
        />
        <TouchableOpacity style={styles.header} onPress={UserProfileScreen}>
          <Image
            source={profileUri ? {uri: profileUri} : Icon.PROFILE}
            style={styles.userIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bannerContainer} onPress={SearchScreen}>
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

        <View style={styles.rideTypeMainContainer}>
          {RideType.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  onPress={SearchScreen}
                  style={styles.rideTypeContainer}>
                  {index == 0 && (
                    <View style={styles.renderItem}>
                      <Text style={styles.promoText}>
                        {ScreenConstent.home.PROMO}
                      </Text>
                    </View>
                  )}
                  <Image source={item.image} style={styles.carIcon} />
                  <Text style={styles.rideTypeText}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

        <View style={styles.pickupPointConatiner}>
          <TouchableOpacity onPress={SearchScreen}>
            <Text style={styles.titleText}>
              {ScreenConstent.home.ENTER_PICKUP_POINT}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setVisible(true)}
            style={styles.timeButton}>
            <Image source={Icon.CLOCK} style={styles.smallIcon} />
            <Text style={styles.paragraphText}>{ScreenConstent.home.NOW}</Text>
            <Image source={Icon.DOWN} style={styles.smallIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.mainButtonContainer}>
          {Buttons.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity style={styles.buttonContainer}>
                  <View style={styles.childButtonContainer}>
                    <View style={styles.imageContainer}>
                      <Image source={item.icon} style={styles.smallIcon} />
                    </View>
                    <Text style={styles.paragraphText}>{item.name}</Text>
                  </View>
                  <Image
                    source={Icon.RIGHTARROW}
                    style={styles.rightArrowIcon}
                  />
                </TouchableOpacity>
                <View style={styles.seperator} />
              </View>
            );
          })}
        </View>
        <Text style={styles.titleText}>{ScreenConstent.home.AROUND_YOU}</Text>
        <View style={styles.map}>
          <MapView
            ref={mapRef}
            style={styles.mapStyle}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            liteMode={true}
            initialRegion={{
              latitude: LocationData.current.latitude,
              longitude: LocationData.current.longitude,
              latitudeDelta: LocationData.current.latitudeDelta,
              longitudeDelta: LocationData.current.longitudeDelta,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Homepage;
