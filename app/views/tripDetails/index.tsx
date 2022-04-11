import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Header} from '../../components';
import {Icon, ScreenConstent} from '../../config';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {LocationDataType} from '../../models';
import styles from './styles';

interface TripDetailsprops {
  LocationData: React.MutableRefObject<LocationDataType>;
  mapRef: React.RefObject<MapView>;
  tripDetails: {
    ID: number;
    icon: any;
    title: string;
    text: string;
  }[];
}

const TripDetails = (props: TripDetailsprops) => {
  const {LocationData, mapRef, tripDetails} = props;
  let starIcon = [];
  for (let index = 0; index <= 4; index++) {
    starIcon.push(
      <Image source={Icon.STAR} style={styles.starIcon} key={index} />,
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header Title={ScreenConstent.tripDetail.TRIP_DETAILS} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <MapView
            ref={mapRef}
            style={styles.mapView}
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
        <View style={styles.tripContainer}>
          <View style={styles.timingContainer}>
            <Text style={styles.bajajText}>
              {ScreenConstent.help.TIME_TEXT}
            </Text>
            <Text style={styles.bajajText}>{ScreenConstent.help.AMOUNT}</Text>
          </View>
          <View style={styles.timingContainer}>
            <Text style={styles.bajajText}>
              {ScreenConstent.help.BAJAJ_AUTO}
            </Text>
            <TouchableOpacity>
              <Text style={styles.tipText}>
                {ScreenConstent.help.ADD_A_TIP}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.addressContainer}>
            <Image source={Icon.CIRCLE} style={styles.circleIcon} />
            <Text style={styles.addressText}>
              {ScreenConstent.tripDetail.CIRCLE_ADDRESS}
            </Text>
          </View>
          <View style={styles.margin}>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.bajajText}>
                {ScreenConstent.tripDetail.RECEIPT}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.addressContainer}>
            <Image source={Icon.SQUARE} style={styles.circleIcon} />
            <Text style={styles.addressText}>
              {ScreenConstent.tripDetail.SQUARE_ADDRESS}
            </Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.tripContainer}>
          <View style={styles.profileContainer}>
            <Image source={Icon.USER} style={styles.profileIcon} />
            <Text style={styles.profileText}>
              {ScreenConstent.tripDetail.YOUR_RIDE_WITH_ALEX_DONZO}
            </Text>
            <View style={styles.starIconContainer}>{starIcon}</View>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.tripContainer}>
          {tripDetails.map((item, index) => {
            return (
              <TouchableOpacity style={styles.detailContainer} key={index}>
                <Image source={item.icon} style={styles.icons} />
                <View key={index}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.text}>{item.text}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TripDetails;
