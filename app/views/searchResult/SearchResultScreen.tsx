import React, {useRef} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {CommonButton, Seperator} from '../../components';
import {APIKEY, buttons, cars, Icon, ScreenConstant} from '../../config';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import styles from './style';

interface SearchResultprops {
  navigation: any;
  originText: any;
  destinationText: any;
  mapData: {
    coordinates: {
      latitude: number;
      longitude: number;
    }[];
    distance: number;
    duration: number;
    fares: undefined[];
    waypointOrder: never[][];
  };
  rideDurationTimeInHour: string;
  rideDurationTime: number;
  bottomIndex: number;
  selectedCar: number;
  snapPointsFirst: string[];
  snapPointsSecond: string[];
  originPlace: {lat: number; lng: number};
  destinationPlace: {lat: number; lng: number};
  handleSheetChanges: (index: number) => void;
  useForceUpdate(): () => void;
  updateMapData: (data: any) => void;
  getCarImage: (type: string) => any;
  setSelectedCar: React.Dispatch<React.SetStateAction<number>>;
  setBottomIndex: React.Dispatch<React.SetStateAction<number>>;
  setcartype: React.Dispatch<React.SetStateAction<string>>;
  firstBottomModalRef: React.RefObject<BottomSheetModalMethods>;
  secondBottomModalRef: React.RefObject<BottomSheetModalMethods>;
  paymentsOption: any;
  navigateToNextScreen: () => any;
  AlertMessage: () => any;
  PaymentOption: () => any;
}

const SearchResultScreen = (props: SearchResultprops) => {
  const {
    navigation,
    getCarImage,
    originPlace,
    destinationPlace,
    originText,
    destinationText,
    updateMapData,
    mapData,
    useForceUpdate,
    rideDurationTimeInHour,
    rideDurationTime,
    setcartype,
    bottomIndex,
    setBottomIndex,
    selectedCar,
    setSelectedCar,
    handleSheetChanges,
    snapPointsFirst,
    snapPointsSecond,
    firstBottomModalRef,
    secondBottomModalRef,
    paymentsOption,
    navigateToNextScreen,
    AlertMessage,
    PaymentOption,
  } = props;

  const forceUpdate = useForceUpdate();

  const map = useRef<any>(null);

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.firstContainer}>
          <MapView
            ref={current => (map.current = current)}
            onLayout={() => {
              map.current.animateCamera({
                latitude: originPlace.lat,
                longitude: originPlace.lng,
                pitch: 90,
                heading: 0,
                zoom: 12.5,
              });
            }}
            style={styles.mapStyle}
            initialRegion={{
              latitude: originPlace.lat,
              longitude: originPlace.lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <MapViewDirections
              origin={{
                latitude: originPlace.lat,
                longitude: originPlace.lng,
              }}
              destination={{
                latitude: destinationPlace.lat,
                longitude: destinationPlace.lng,
              }}
              apikey={APIKEY}
              strokeWidth={4}
              strokeColor="#111111"
              onError={val => AlertMessage}
              onReady={result => {
                updateMapData(result), forceUpdate();
              }}
            />
            <Marker
              coordinate={{
                latitude: originPlace.lat,
                longitude: originPlace.lng,
              }}>
              <View style={styles.flexDirection}>
                <View style={styles.timeContainer}>
                  <Text style={styles.hourMinText}>
                    {rideDurationTime > 60
                      ? rideDurationTimeInHour + ' Hour'
                      : rideDurationTime.toFixed(0) + ' MIN'}
                  </Text>
                </View>
                <View style={styles.customMarker}>
                  <Text style={styles.markerText}>{originText}</Text>
                  <Image source={Icon.RIGHTARROW} style={styles.markerImage} />
                </View>
              </View>
              <Image source={Icon.LOCATION} style={styles.markerLocator} />
            </Marker>

            <Marker
              coordinate={{
                latitude: destinationPlace.lat,
                longitude: destinationPlace.lng,
              }}>
              <View style={styles.customMarker}>
                <Text style={[styles.markerText]}>{destinationText}</Text>
                <Image source={Icon.RIGHTARROW} style={styles.markerImage} />
              </View>
              <Image source={Icon.LOCATION} style={styles.markerLocator} />
            </Marker>

            {cars.map((item, index) => {
              return (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: item.latitude,
                    longitude: item.longitude,
                  }}>
                  <Image
                    source={getCarImage(item.type)}
                    style={[
                      styles.carImage,
                      {
                        transform: [
                          {
                            rotate: `${item.heading}deg`,
                          },
                        ],
                      },
                    ]}
                  />
                </Marker>
              );
            })}
          </MapView>
        </View>
        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={firstBottomModalRef}
            index={bottomIndex}
            snapPoints={snapPointsFirst}
            enablePanDownToClose={false}
            enableDismissOnClose={false}
            onChange={handleSheetChanges}>
            <Text style={styles.promoText}>
              {ScreenConstant.serachResult.PROMOTION_TEXT}
            </Text>

            <Seperator />

            {bottomIndex != 0 &&
              cars.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.chooseCarButtonText}
                    onPress={() => {
                      setcartype(item.type);
                      setBottomIndex(0);
                      setSelectedCar(index);
                    }}>
                    <View style={styles.imageTextContainer}>
                      <Image
                        source={getCarImage(item.type)}
                        style={styles.carIcon}
                      />
                      <View>
                        <Text style={styles.buttonText}>{item.type}</Text>
                        <Text style={styles.buttonSubText}>
                          {' '}
                          {ScreenConstant.chooseRide.TIME}{' '}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text style={styles.buttonText}>
                        {'\u20B9'} {(mapData.distance * item.price).toFixed(2)}
                      </Text>
                      <Text style={styles.buttonSubTextSecond}>
                        {'\u20B9'}
                        {(mapData.distance * item.price * 2).toFixed(2)}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            {bottomIndex == 0 && (
              <View style={styles.chooseCarButtonText}>
                <View style={styles.imageTextContainer}>
                  <Image
                    source={getCarImage(cars[selectedCar].type)}
                    style={styles.carIcon}
                  />
                  <View>
                    <Text style={styles.buttonText}>
                      {cars[selectedCar].type}
                    </Text>
                    <Text style={styles.buttonSubText}>
                      {' '}
                      {ScreenConstant.chooseRide.TIME}{' '}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.buttonText}>
                    {'\u20B9'}{' '}
                    {(mapData.distance * cars[selectedCar].price).toFixed(2)}
                  </Text>
                  <Text style={styles.buttonSubTextSecond}>
                    {'\u20B9'}
                    {(mapData.distance * cars[selectedCar].price * 2).toFixed(
                      2,
                    )}
                  </Text>
                </View>
              </View>
            )}
          </BottomSheetModal>
          <BottomSheetModal
            ref={secondBottomModalRef}
            index={1}
            snapPoints={snapPointsSecond}
            enablePanDownToClose={false}
            enableContentPanningGesture={false}
            enableHandlePanningGesture={false}
            handleComponent={() => <View style={styles.margin} />}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.paymentButton}
                onPress={PaymentOption}>
                <View style={styles.imageTextContainer}>
                  <Image
                    source={paymentsOption.enablePaymentIcon}
                    style={styles.moneyIcon}
                  />
                  <Text style={styles.paymentButtonText}>
                    {paymentsOption.enablePayment}
                  </Text>
                </View>
                <Image source={Icon.RIGHTARROW} style={styles.moneyIcon} />
              </TouchableOpacity>
              <CommonButton
                title={buttons.CONFIRM + ' ' + cars[selectedCar].type}
                onPress={navigateToNextScreen}
              />
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default SearchResultScreen;
