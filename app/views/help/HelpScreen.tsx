import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon, ScreenConstant} from '../../config';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {LocationDataType} from '../../models';
import {Header} from '../../components';
import styles from './style';

interface HelpScreenprops {
  navigation: any;
  LocationData: React.MutableRefObject<LocationDataType>;
  mapRef: React.RefObject<MapView>;
  data: {
    name: string;
    navigation: string;
  }[];
  TripViewDetailScreen: () => any;
}
const HelpScreen = (props: HelpScreenprops) => {
  const {navigation, LocationData, mapRef, data, TripViewDetailScreen} = props;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header Title={ScreenConstant.help.HELP} />
        <Text style={styles.lastTripText}>
          {ScreenConstant.help.YOUR_LAST_TRIP}
        </Text>
        <TouchableOpacity onPress={TripViewDetailScreen}>
          <View style={styles.tripContainer}>
            <View style={styles.timingContainer}>
              <Text style={styles.timingText}>
                {ScreenConstant.help.TIME_TEXT}
              </Text>
              <Text style={styles.timingText}>
                {ScreenConstant.help.AMOUNT}
              </Text>
            </View>
            <Text style={styles.bajajText}>
              {ScreenConstant.help.BAJAJ_AUTO}
            </Text>
          </View>
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
        </TouchableOpacity>
        <View style={styles.padding}>
          <Text style={styles.mapText}>
            {ScreenConstant.help.REPORT_AN_ISSUE_WITH_THIS_TRIP}
          </Text>
        </View>
        <View style={styles.line} />
        <View style={styles.secondContainer}>
          <Text style={styles.allTopicText}>
            {ScreenConstant.help.ALL_TOPIC}
          </Text>
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.buttonContainer}
                onPress={() => props.navigation.navigate(item.navigation)}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Image source={Icon.RIGHTARROW} style={styles.backIcon} />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpScreen;
