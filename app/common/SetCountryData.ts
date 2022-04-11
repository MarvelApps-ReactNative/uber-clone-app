import {Country} from 'react-native-country-picker-modal';
import {setCountryCode, setFlag} from '../redux/actions';
import {useDispatch} from 'react-redux';

const dispatch = useDispatch();

const setCountryData = (country: Country) => {
  dispatch(setCountryCode(country.callingCode.toString()));
  dispatch(setFlag(country.cca2));
};

export default setCountryData;
