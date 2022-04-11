import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {BackButton} from '../../components';
import {APIKEY, Icon, Size} from '../../config';
import {
  CurrentLocationDataType,
  LocationDataType,
  rideInfoDataType,
} from '../../models';
import styles from './style';

interface ConfirmRideScreenprops {
  navigation: any;
  Page: any;
  regionChangeData: React.MutableRefObject<LocationDataType | undefined>;
  onTouchEnd: () => void;
  latitude: number;
  longitude: number;
  loc: CurrentLocationDataType;
  itemIndex: number;
  rideInfo: rideInfoDataType;
}
const ConfirmRideScreen = (props: ConfirmRideScreenprops) => {
  const {
    navigation,
    Page,
    regionChangeData,
    onTouchEnd,
    latitude,
    longitude,
    loc,
    itemIndex,
    rideInfo,
  } = props;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.firstContainer}>
        <MapView
          style={[
            styles.mapStyle,
            {bottom: itemIndex >= 1 ? Size.height * 0.5 : 0},
          ]}
          showsUserLocation={true}
          zoomEnabled={true}
          onRegionChange={data => {
            regionChangeData.current = data;
          }}
          onTouchEnd={onTouchEnd}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {itemIndex >= 1 && (
            <MapViewDirections
              origin={{
                latitude: rideInfo.originCoord.lat,
                longitude: rideInfo.originCoord.lng,
              }}
              destination={{
                latitude: rideInfo.destinationCoord.lat,
                longitude: rideInfo.destinationCoord.lng,
              }}
              apikey={APIKEY}
              strokeWidth={4}
              strokeColor="#111111"
            />
          )}
          {itemIndex >= 1 && (
            <Marker
              coordinate={{
                latitude: rideInfo.originCoord.lat,
                longitude: rideInfo.originCoord.lng,
              }}>
              <View style={styles.customMarker}>
                <Text style={[styles.markerText]}>{rideInfo.originName}</Text>
                <Image source={Icon.RIGHTARROW} style={styles.markerImage} />
              </View>
              <Image source={Icon.LOCATION} style={styles.markerLocator} />
            </Marker>
          )}
          {itemIndex >= 1 && (
            <Marker
              coordinate={{
                latitude: rideInfo.destinationCoord.lat,
                longitude: rideInfo.destinationCoord.lng,
              }}>
              <View style={styles.customMarker}>
                <Text style={styles.markerText}>
                  {rideInfo.destinationName}
                </Text>
                <Image source={Icon.RIGHTARROW} style={styles.markerImage} />
              </View>
              <Image source={Icon.LOCATION} style={styles.markerLocator} />
            </Marker>
          )}
        </MapView>

        <BackButton />

        {itemIndex < 1 && (
          <View style={styles.markerContainer}>
            <Image source={Icon.LOCATION} style={styles.marker} />
          </View>
        )}
      </View>
      <View style={styles.secondContainer}>{Page()}</View>
    </SafeAreaView>
  );
};

export default ConfirmRideScreen;
