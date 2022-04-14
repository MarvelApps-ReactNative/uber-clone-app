import React from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Seperator} from '../../components';
import {cars, COLORS, Icon, ScreenConstant} from '../../config';
import {LocationDataType} from '../../models';
import styles from './style';

interface SearchScreenprops {
  navigation: any;
  isFocus: boolean;
  scheduleRide: any;
  originText: string;
  destinationText: string;
  placesPredictions: any;
  setPlacesPredictions: any;
  filteredPredictions: any;
  currentLatLang: {lat: number; lng: number};
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
  setOriginText: React.Dispatch<React.SetStateAction<string>>;
  setDestinationText: React.Dispatch<React.SetStateAction<string>>;
  regionChangeData: React.MutableRefObject<LocationDataType>;
  destinationTextInputRef: React.MutableRefObject<any>;
  originTextInputRef: React.MutableRefObject<any>;
  onTouchEnd: () => void;
  getCurrentLocation: () => void;
  resetScheduleRide: () => boolean;
  originTextSearchdata: (text: string) => void;
  onChangeSelectedIndex: (index: number) => void;
  destinationTextSearchdata: (text: string) => void;
  getImage: (type: string) => any;
}

const SearchScreen = (props: SearchScreenprops) => {
  const {
    originText,
    destinationText,
    destinationTextSearchdata,
    originTextSearchdata,
    placesPredictions,
    setPlacesPredictions,
    filteredPredictions,
    setOriginText,
    setDestinationText,
    isFocus,
    setIsFocus,
    getImage,
    getCurrentLocation,
    scheduleRide,
    resetScheduleRide,
    currentLatLang,
    regionChangeData,
    onTouchEnd,
    destinationTextInputRef,
    originTextInputRef,
    onChangeSelectedIndex,
  } = props;

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={
          scheduleRide.time.length > 1
            ? styles.firstContainerSchedule
            : styles.firstContainer
        }>
        <View style={styles.flexDirection}>
          <TouchableOpacity
            onPress={() => resetScheduleRide()}
            style={styles.backbutton}>
            <Image source={Icon.BACK} style={styles.icon} />
          </TouchableOpacity>
        </View>
        {scheduleRide.time.length > 1 && (
          <View style={styles.scheduleView}>
            <Text style={styles.paragraph}>
              {scheduleRide.date} at {scheduleRide.time}
            </Text>
          </View>
        )}
        <View style={styles.flexDirection}>
          <View style={styles.stateContainer}>
            <View style={[styles.circle, {opacity: isFocus ? 1 : 0.5}]} />
            <View style={styles.line} />
            <View style={[styles.square, {opacity: isFocus ? 0.5 : 1}]} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              ref={originTextInputRef}
              placeholder={ScreenConstant.searchDestination.ENTER_PICKUP_TIME}
              style={styles.textInput}
              value={originText}
              onChangeText={originTextSearchdata}
              placeholderTextColor={COLORS.darkGray}
              onFocus={() => {
                setPlacesPredictions({
                  ...placesPredictions,
                  isShowingResults: true,
                }),
                  setIsFocus(true);
              }}
            />
            <TextInput
              ref={destinationTextInputRef}
              placeholder={ScreenConstant.searchDestination.WHERE_TO}
              style={styles.textInput}
              value={destinationText}
              onChangeText={destinationTextSearchdata}
              placeholderTextColor={COLORS.darkGray}
              onFocus={() => {
                setPlacesPredictions({
                  ...placesPredictions,
                  isShowingResults: true,
                }),
                  setIsFocus(false);
              }}
              onTouchStart={() => {
                setPlacesPredictions({
                  ...placesPredictions,
                  searchResults: [],
                });
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <MapView
          style={styles.mapStyle}
          showsUserLocation={true}
          zoomEnabled={true}
          onRegionChange={data => {
            regionChangeData.current = data;
          }}
          onTouchEnd={() => {
            onTouchEnd();
          }}
          moveOnMarkerPress
          initialRegion={{
            latitude: currentLatLang.lat,
            longitude: currentLatLang.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {cars.map((item, index) => {
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}>
                <Image
                  source={getImage(item.type)}
                  style={[
                    styles.carMarker,
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

      <KeyboardAvoidingView>
        <View style={styles.midMarker}>
          <Image source={Icon.LOCATION} style={styles.markerIcon} />
        </View>
      </KeyboardAvoidingView>

      {placesPredictions.isShowingResults && (
        <View
          style={
            scheduleRide.time.length > 1
              ? styles.subModalContainerSchedule
              : styles.subModalContainer
          }>
          <FlatList
            data={filteredPredictions}
            keyboardShouldPersistTaps={'always'}
            renderItem={({item, index}) => {
              return (
                <View>
                  <TouchableOpacity
                    style={styles.searchTextContainer}
                    onPress={() => {
                      isFocus == true
                        ? setOriginText(item.main_text)
                        : setDestinationText(item.main_text),
                        onChangeSelectedIndex(index);
                    }}>
                    <View style={styles.searchImageContainer}>
                      <Image source={Icon.LOCATION} style={styles.searchIcon} />
                    </View>
                    <View>
                      <Text style={styles.paragraph}>{item.main_text}</Text>
                      <Text style={styles.para2}>{item.secondary_text}</Text>
                    </View>
                  </TouchableOpacity>
                  <Seperator />
                </View>
              );
            }}
            keyExtractor={(_, i) => i.toString()}
          />

          {isFocus == true && (
            <TouchableOpacity
              style={styles.searchTextContainer}
              onPress={() => {
                getCurrentLocation(),
                  setOriginText(ScreenConstant.searchDestination.LOCATION);
                Keyboard.dismiss();
              }}>
              <View style={styles.searchImageContainer}>
                <Image source={Icon.LOCATION} style={styles.searchIcon} />
              </View>
              <Text style={styles.paragraph}>
                {ScreenConstant.searchDestination.SET_CURRENT_LOCATION}
              </Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.searchTextContainer}
            onPress={() => {
              setPlacesPredictions({
                ...placesPredictions,
                isShowingResults: false,
              }),
                Keyboard.dismiss();
            }}>
            <View style={styles.searchImageContainer}>
              <Image source={Icon.LOCATION} style={styles.searchIcon} />
            </View>
            <Text style={styles.paragraph}>
              {ScreenConstant.searchDestination.SET_LOCATION_ON_MAP}
            </Text>
          </TouchableOpacity>

          <Pressable
            onPress={() => {
              setPlacesPredictions({
                ...placesPredictions,
                isShowingResults: false,
              });
              Keyboard.dismiss();
            }}>
            <View style={styles.height} />
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
