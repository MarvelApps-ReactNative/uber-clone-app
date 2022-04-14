import React, {useCallback, useEffect, useRef, useState} from 'react';
import {BackHandler} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import {CurrentLocationDataType, LocationDataType} from '../models';
import {sendRequest} from '../network';
import {
  api,
  APIKEY,
  Icon,
  initialCoordinates,
  ScreenConstant,
  Screens,
} from '../config';
import {
  setDateScheduleRide,
  setDestinationCoord,
  setDestinationName,
  setOriginCoord,
  setOriginName,
  setTimeScheduleRide,
} from '../redux/actions';
import SearchScreen from '../views/searchDestination/SearchScreen';

const SearchViewModel = ({navigation}: any) => {
  const [originText, setOriginText] = useState('');
  const [destinationText, setDestinationText] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [originPlace, setOriginPlace] = useState<any>(null);
  const [destinationPlace, setDestinationPlace] = useState<any>(null);
  const [placesPredictions, setPlacesPredictions] = useState<any>({
    searchResults: [],
    isShowingResults: false,
  });
  const [currentLatLang, setCurrentLatLang] = useState<CurrentLocationDataType>(
    {lat: 28.595521527723474, lng: 77.33245169743896},
  );
  let filteredPredictions = placesPredictions.searchResults.map(
    (locations: any) => locations.structured_formatting,
  );
  let placeIdList = placesPredictions.searchResults.map(
    (locations: any) => locations.place_id,
  );
  const regionChangeData = useRef<LocationDataType>(initialCoordinates);
  const originTextInputRef = useRef<any>();
  const destinationTextInputRef = useRef<any>();
  const scheduleRide = useSelector((state: any) => state.scheduleRide);
  const dispatch = useDispatch();

  const ORIGIN_TEXT = 'origin_text';

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);

  useEffect(() => {
    getCurrentLocation();
    destinationTextInputRef.current?.focus();
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      resetScheduleRide,
    );
    return () => backHandler.remove();
  }, []);

  const getImage = (type: string) => {
    switch (type) {
      case 'UberX':
        return Icon.TOPUBERX;
      case 'Comfort':
        return Icon.TOPCOMFORT;
      default:
        return Icon.TOPUBERXL;
    }
  };

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      dispatch(setOriginName(originText));
      dispatch(setDestinationName(destinationText));
      dispatch(setOriginCoord(originPlace));
      dispatch(setDestinationCoord(destinationPlace));
      navigation.replace(Screens.SearchResultViewModel);
    }
  };

  const resetScheduleRide = () => {
    dispatch(setDateScheduleRide(''));
    dispatch(setTimeScheduleRide(''));
    navigation.goBack();
    return true;
  };

  const getCurrentLocation = async () => {
    setOriginText('Loading...');
    let cords = {lat: 0, lng: 0};
    Geolocation.getCurrentPosition(
      info => {
        (cords.lat = info.coords.latitude), (cords.lng = info.coords.longitude);
        setCurrentLatLang(cords);
        focusCurrentLocation(cords);
        setOriginPlace(cords);
      },
      error => {
        setOriginText('');
        originTextInputRef.current.focus();
        console.log(error.message);
      },
    );
    if (isFocus === true) setOriginPlace(cords);
  };

  const searchLocation = async (text: string, type: string) => {
    type == ORIGIN_TEXT ? setOriginText(text) : setDestinationText(text);
    let url = `${api.GOOGLE_AUTOCOMPLETE}${APIKEY}&input=${text}`;
    let response = await sendRequest(url);
    if (response != 'error') {
      setPlacesPredictions({
        searchResults: response.data.predictions,
        isShowingResults: true,
      });
    }
  };

  const focusCurrentLocation = async (cords: any) => {
    let url = `${api.GOOGLE_NAME_BY_LAT_LNG}${cords.lat},${cords.lng}&key=${APIKEY}`;
    let response = await sendRequest(url);
    if (response != 'error') {
      let houseNumber =
        response.data.results[0].address_components[0].long_name;
      let area = response.data.results[0].address_components[1].long_name;
      setOrigin(`${houseNumber}, ${area}`);
    }
  };

  const getCoordinatesFromPlaceId = async (text: string) => {
    let url = `${api.GOOGLE_PLACE_ID}${text}&key=${APIKEY}`;
    let response = await sendRequest(url);
    if (response != 'error') {
      isFocus == true
        ? setOriginPlace(response.data.result.geometry.location)
        : setDestinationPlace(response.data.result.geometry.location);
    }
  };

  const onTouchEnd = async () => {
    isFocus
      ? setOriginText(ScreenConstant.searchDestination.LOADING)
      : setDestinationText(ScreenConstant.searchDestination.LOADING);
    let url = `${api.GOOGLE_NAME_BY_LAT_LNG}${regionChangeData.current.latitude},
    ${regionChangeData.current.longitude}&key=${APIKEY}`;
    let response = await sendRequest(url);
    if (response != 'error') {
      let houseNumber =
        response.data.results[0].address_components[0].long_name;
      let area = response.data.results[0].address_components[1].long_name;
      let address = `${houseNumber}, ${area}`;
      isFocus ? setOrigin(address) : setDestination(address);
    }
    let changedCoord = {
      lat: regionChangeData.current.latitude,
      lng: regionChangeData.current.longitude,
    };
    isFocus ? setOriginPlace(changedCoord) : setDestinationPlace(changedCoord);
  };

  const setOrigin = useCallback(value => {
    if (originTextInputRef.current != null) {
      originTextInputRef.current.value = value;
      setOriginText(value);
    }
  }, []);

  const setDestination = useCallback(value => {
    if (destinationTextInputRef.current != null) {
      destinationTextInputRef.current.value = value;
      setDestinationText(value);
      destinationTextInputRef.current.blur();
    }
  }, []);

  return (
    <SearchScreen
      {...{
        navigation,
        originText,
        destinationText,
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
        onChangeSelectedIndex: (index: number) => {
          getCoordinatesFromPlaceId(placeIdList[index]);
          destinationTextInputRef.current?.focus();
        },
        originTextSearchdata: (text: string) =>
          searchLocation(text, ORIGIN_TEXT),
        destinationTextSearchdata: (text: string) => searchLocation(text, ''),
      }}
    />
  );
};

export default SearchViewModel;
