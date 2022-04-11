import {StyleSheet} from 'react-native';
import {COLORS, Font, Size} from '../../config';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0418a2',
    justifyContent: 'space-between',
  },
  subContainer: {
    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  uberLogo: {
    resizeMode: 'contain',
    height: Size.height * 0.035,
  },
  shieldLogo: {
    resizeMode: 'contain',
    height: Size.height * 0.18,
    borderRadius: 20,
  },
  headingText: {
    fontSize: 34,
    color: COLORS.white,
    ...Font.heading,
  },
  button: {
    backgroundColor: COLORS.black,
    padding: 15,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: COLORS.white,
    ...Font.body,
    textAlign: 'center',
  },
  covidSafetyAnimation: {
    width: Size.width * 0.45,
    height: Size.height * 0.27,
    alignSelf: 'center',
  },
});

export default styles;
