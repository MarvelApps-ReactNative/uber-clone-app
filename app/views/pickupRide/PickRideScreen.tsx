import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {Seperator} from '../../components';
import {APIKEY, buttons, Icon, ScreenConstant} from '../../config';
import {RideInfoDataType} from '../../models';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
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
  rideInfostate: RideInfoDataType;
  navigateToHome: () => any;
  PaymentOption: () => any;
  snapPointsFirst: string[];
  handleSheetChanges: (index: number) => void;
  bottomIndex: number;
  firstBottomModalRef: React.RefObject<BottomSheetModalMethods>;
  paymentsOption: any;
}
const PickRideScreen = (props: PickRideScreenprops) => {
  const {
    navigation,
    rideInfo,
    rideInfostate,
    navigateToHome,
    PaymentOption,
    handleSheetChanges,
    bottomIndex,
    firstBottomModalRef,
    snapPointsFirst,
    paymentsOption,
  } = props;

  return (
    <GestureHandlerRootView style={styles.mainContainer}>
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
                <Text style={styles.markertext}>
                  {rideInfostate.originName}
                </Text>
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

        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={firstBottomModalRef}
            index={bottomIndex}
            snapPoints={snapPointsFirst}
            enablePanDownToClose={false}
            enableDismissOnClose={false}
            enableContentPanningGesture={false}
            enableHandlePanningGesture={true}
            onChange={handleSheetChanges}>
            <View style={styles.subSecondMainContainer}>
              <View style={styles.boxContainer}>
                <Text style={styles.headingText}>
                  {ScreenConstant.pickupRide.MEET_AT_PICKUP_POINT}
                </Text>
                <View style={styles.blackBox}>
                  <Text style={styles.text}>
                    {ScreenConstant.startTrip.BANNER_TIME}
                  </Text>
                </View>
              </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.elevationLine} />
              <View style={styles.subSecondContainer}>
                <View style={styles.boxContainer}>
                  <Image source={Icon.CAR} style={styles.carImage} />
                  <View>
                    <Text style={styles.carNumberText}>
                      {rideInfo.car_number}
                    </Text>
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
              <Seperator />

              <View style={styles.subSecondContainer}>
                <TouchableOpacity style={styles.bannerContainer}>
                  <View style={styles.bannerTextContainer}>
                    <Text style={styles.bannerText}>
                      {ScreenConstant.home.WELCOME_TO_UBER}
                    </Text>
                    <Text style={styles.rideText}>
                      {ScreenConstant.home.RIDE_WITH_UBER}
                    </Text>
                  </View>
                  <Image source={Icon.KEYCHAIN} style={styles.banner} />
                </TouchableOpacity>
              </View>
              <Seperator />
              <View style={styles.subSecondContainer}>
                <View style={styles.listItemContainer}>
                  <View style={styles.textContainer}>
                    <Image source={Icon.LOCATION} style={styles.listItemIcon} />
                    <View>
                      <Text style={styles.paragraph}>
                        {ScreenConstant.pickupRide.NEW_DELHI_RAILWAY_STATION}
                      </Text>
                      <Text style={styles.textColor}>
                        {ScreenConstant.pickupRide.DROPOFF}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.align}>
                    <Text style={styles.buttonText}>
                      {buttons.ADD_OR_CHANGE}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Seperator />
              <View style={styles.subSecondContainer}>
                <View style={styles.listItemContainer}>
                  <View style={styles.textContainer}>
                    <Image source={Icon.USER} style={styles.listItemIcon} />
                    <View>
                      <Text style={styles.paragraph}>
                        {ScreenConstant.pickupRide.AMOUNT}
                      </Text>
                      <Text style={styles.textColor}>
                        {paymentsOption.enablePayment}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.align}
                    onPress={PaymentOption}>
                    <Text style={styles.buttonText}>{buttons.SWITCH}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Seperator />
              <View style={styles.subSecondContainer}>
                <View style={styles.listItemContainer}>
                  <View style={styles.textContainer}>
                    <Image source={Icon.ARROWS} style={styles.listItemIcon} />
                    <Text style={styles.paragraph}>
                      {ScreenConstant.pickupRide.RIDING_WITH_SOMEONE}
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.align}>
                    <Text style={styles.buttonText}>{buttons.SPLIT_FARE}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Seperator />
              <View style={styles.subFooterContainer}>
                <View style={styles.listItemContainer}>
                  <View style={styles.textContainer}>
                    <Image source={Icon.LOCATION} style={styles.listItemIcon} />
                    <Text style={styles.paragraph}>
                      {ScreenConstant.pickupRide.SHARE_TRIP_STATUS}
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.align}>
                    <Text style={styles.buttonText}>{buttons.SHARE}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.footerButtonContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={navigateToHome}>
                    <Text style={styles.cancelText}>{buttons.CANCEL}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{buttons.SAFETY}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default PickRideScreen;
